import { MIAStackingList } from "../bo/cityarrays/miastackinglist"
import { NYCStackingList } from '../bo/cityarrays/nycstackinglist'
import { getCurrentBlock } from '../api/stxapicalls'
//import  getDIKOPricesInUSDT  from './PopulateCoinPrices'

export default async function convertStackingJsonToOutputArray(json,symbol) {
    //getDIKOPricesInUSDT();
    let outputArray = getStackingListArray(symbol);
    let coinContract=getCoinSmartContractAddress(symbol);

    for (const xactn of json) {
        if (xactn.tx.tx_status === 'success' && xactn.tx.contract_call !== undefined && xactn.tx.contract_call.contract_id===coinContract ) {
            outputArray = processTransactionForStacking(outputArray, xactn);
        }
    }

    outputArray = await populateFutureBlockEndDates(outputArray);
    return outputArray.filter(function(item){return (item.endBlockDate!=="");}).sort((a) => parseInt(a.endBlock));

}

function getStackingListArray(symbol) {
    let stackingListArray;
    if (symbol==='MIA') {
        stackingListArray=MIAStackingList.stackingList();
    } else {
        stackingListArray=NYCStackingList.stackingList();
    }    

    return stackingListArray;
}

function getCoinSmartContractAddress(symbol)
{
    let coinContract;
    if (symbol==='MIA') {      
        coinContract = "SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-core-v1";
    } else {
        coinContract = "SP2H8PY27SEZ03MWRKS5XABZYQN17ETGQS3527SA5.newyorkcitycoin-core-v1";
    }
    return coinContract;
}

function processTransactionForStacking(outputArray,xactn) {
    const functionName=xactn.tx.contract_call===undefined?'':xactn.tx.contract_call.function_name;
    const blockHeight=xactn.tx.block_height;

    if (functionName==='stack-tokens') {
        outputArray=processStackTokensTransaction(outputArray,xactn,blockHeight);
    } else if (functionName==="claim-stacking-reward") {
        outputArray=processClaimTransaction(outputArray,xactn,blockHeight);
    } 

    return outputArray;
}

//Process a stack-tokens transaction
function processStackTokensTransaction(outputArray,xactn,blockHeight){

    let cycleCount=xactn.tx.contract_call.function_args[1].repr.substring(1);
    let firstCycleListRow=outputArray.filter(function(item){
        return (item.startBlock<=blockHeight && item.endBlock>=blockHeight);
    })[0];
    
    if (firstCycleListRow!==undefined) {
        let firstCycle=firstCycleListRow.round+1;
        let lastCycle=parseInt(firstCycle)+parseInt(cycleCount)-1;
        const amount=xactn.tx.contract_call.function_args[0].repr.substring(1);
        console.log(Date.now()+' Stacked ' + amount + ' CityCoins from cycle ' + firstCycle + ' to ' + lastCycle);
        outputArray=applyStackTokensTransaction(outputArray,amount,firstCycle,lastCycle)
    }
    return outputArray;
}

//Apply stack-tokens transaction to the list
function applyStackTokensTransaction(outputArray,amount,firstCycle,lastCycle){
    for (let i = firstCycle; i <=lastCycle ; i++) {
        outputArray[i].stackedCoins=parseInt(outputArray[i].stackedCoins)+parseInt(amount);
        outputArray[i].canClaimCoin=
            i===lastCycle || outputArray[i].canClaimCoin==='STX+Coin'
                ?'STX+Coin'
                :'STX Only';
    }
    return outputArray;
}

//Process a claim-stacking-reward transaction, including applying to list
//Currently only checking STX rewards, not coins being returned
function processClaimTransaction(outputArray,xactn,blockHeight){

    const rewardsCycle=xactn.tx.contract_call.function_args[0].repr.substring(1);
    const rawAmount=xactn.tx.post_conditions[0].amount;

    const rewardsAmount= parseInt(rawAmount)/1000000;
            outputArray[rewardsCycle].claimedRewards=rewardsAmount;
            outputArray[rewardsCycle].claimDate=blockHeight;
            console.log(Date.now()+' Claimed ' + rewardsAmount + 'STX from this cycle');

    return outputArray;
}

//this populates up to three future block end dates, plus any past block end dates which aren't hard coded yet
async function populateFutureBlockEndDates(outputArray)
{
    const currentBlock=await getCurrentBlock();
    const currentDate = new Date().toISOString();
    let ctr=0;
    for (const stackingRound of outputArray.filter(function(item){return (item.endBlockDate==='');}).sort((a) => parseInt(a.endBlock))) {
        if (parseInt(stackingRound.endBlock)>parseInt(currentBlock)) {
            ctr+=1
            let minutestoAdd=parseInt(stackingRound.endBlock-currentBlock)*10;
            let blockTime=new Date((new Date(currentDate)).getTime() + (minutestoAdd* 60 * 1000));

            stackingRound.endBlockDate=blockTime.toISOString();
        }
        
        if (ctr>2) {
            break;
        }
    }

    return outputArray;
}
