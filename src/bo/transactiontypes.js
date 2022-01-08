export class XactnType {
    static xactnTypes = [
      //Arkadiko
      {id:1,XactnType:'', XactnTypeDetail:'Arkadiko Close Vault',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1',function:'close-vault',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:2,XactnType:'', XactnTypeDetail:'Arkadiko Burn USDA',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1',function:'burn',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:2,XactnType:'', XactnTypeDetail:'Arkadiko Mint USDA',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1',function:'mint',senderAddress:'',recipientAddress:'',inSymbol:'USDA',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:2,XactnType:'', XactnTypeDetail:'Arkadiko Vault Deposit',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1',function:'deposit',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:2,XactnType:'', XactnTypeDetail:'Arkadiko Deposit and Mint',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-freddie-v1-1',function:'collateralize-and-mint',senderAddress:'',recipientAddress:'',inSymbol:'USDA',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:3,XactnType:'', XactnTypeDetail:'Arkadiko Claim STX',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-claim-yield-v2-1',function:'claim',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:4,XactnType:'', XactnTypeDetail:'Arkadiko Stake DIKO',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stake-registry-v1-1',function:'stake',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'DIKO',notOutSymbol:''},
      {id:4,XactnType:'', XactnTypeDetail:'Arkadiko Stake LP',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stake-registry-v1-1',function:'stake',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:'DIKO'},
      {id:5,XactnType:'', XactnTypeDetail:'Arkadiko DIKO Rewards',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stake-registry-v1-1',function:'stake',senderAddress:'',recipientAddress:'',inSymbol:'DIKO',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:6,XactnType:'', XactnTypeDetail:'Arkadiko Unstake',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stake-registry-v1-1',function:'unstake',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'DIKO',outSymbol:'',notOutSymbol:''},
      {id:7,XactnType:'', XactnTypeDetail:'Arkadiko DIKO Rewards',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stake-registry-v1-1',function:'unstake',senderAddress:'',recipientAddress:'',inSymbol:'DIKO',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:8,XactnType:'', XactnTypeDetail:'Arkadiko Add Liquidity',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-swap-v2-1',function:'add-to-position',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:8,XactnType:'', XactnTypeDetail:'Arkadiko Add Liquidity',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-swap-v1-1',function:'add-to-position',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:9,XactnType:'', XactnTypeDetail:'Arkadiko Reduce Liquidity',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-swap-v2-1',function:'reduce-position',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:10,XactnType:'', XactnTypeDetail:'Arkadiko Swap',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-swap-v2-1',function:'swap-y-for-x',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:11,XactnType:'', XactnTypeDetail:'Arkadiko Swap',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-swap-v2-1',function:'swap-x-for-y',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:12,XactnType:'', XactnTypeDetail:'Arkadiko Stake DIKO',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stake-registry-v1-1',function:'stake-pending-rewards',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'DIKO',outSymbol:'',notOutSymbol:''},
      {id:13,XactnType:'', XactnTypeDetail:'Arkadiko DIKO Rewards',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stake-registry-v1-1',function:'stake-pending-rewards',senderAddress:'',recipientAddress:'',inSymbol:'DIKO',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:13,XactnType:'', XactnTypeDetail:'Arkadiko DIKO Rewards',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stake-registry-v1-1',function:'claim-pending-rewards',senderAddress:'',recipientAddress:'',inSymbol:'DIKO',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:13,XactnType:'', XactnTypeDetail:'Aradiko Return Voted DIKO',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-governance-v2-1',function:'return-votes-to-member',senderAddress:'',recipientAddress:'',inSymbol:'DIKO',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:13,XactnType:'', XactnTypeDetail:'Aradiko Vote DIKO',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-governance-v2-1',function:'vote-for',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'DIKO',notOutSymbol:''},
      {id:13,XactnType:'', XactnTypeDetail:'Aradiko Vault Enable W/D',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stacker-v1-1',function:'enable-vault-withdrawals',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:13,XactnType:'', XactnTypeDetail:'Aradiko DIKO Rewards',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-vault-rewards-v1-1',function:'claim-pending-rewards',senderAddress:'',recipientAddress:'',inSymbol:'DIKO',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:13,XactnType:'', XactnTypeDetail:'Aradiko DIKO Rewards',contract:'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-stake-lp-rewards-2',function:'claim-rewards',senderAddress:'',recipientAddress:'',inSymbol:'DIKO',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      //Stackswap
      {id:14,XactnType:'', XactnTypeDetail:'Stackswap Swap',contract:'SP1Z92MPDQEWZXW36VX71Q25HKF5K2EPCJ304F275.stackswap-swap-v5k',function:'swap-y-for-x',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:15,XactnType:'', XactnTypeDetail:'Stackswap Swap',contract:'SP1Z92MPDQEWZXW36VX71Q25HKF5K2EPCJ304F275.stackswap-swap-v5k',function:'swap-x-for-y',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      //Syvita
      {id:16,XactnType:'Dispose', XactnTypeDetail:'Syvita NYC Pool',contract:'',function:'',senderAddress:'',recipientAddress:'SP18XC4F27VQ8P2QGKZ5P6KR41GK77ZVFWV468P1',inSymbol:'',notInSymbol:'',outSymbol:'STX',notOutSymbol:''},
      {id:16,XactnType:'Dispose', XactnTypeDetail:'Syvita NYC Pool',contract:'',function:'',senderAddress:'',recipientAddress:'SP2ST741GVK200RYK9NKTYP6CJH1AG4ZPV4A5WG4M',inSymbol:'',notInSymbol:'',outSymbol:'STX',notOutSymbol:''},
      {id:16,XactnType:'Dispose', XactnTypeDetail:'Syvita NYC Pool',contract:'',function:'',senderAddress:'',recipientAddress:'SP1C6WQ9KTV3769S8X8YNAWBXKDG2Y65P5EEDRWR6',inSymbol:'',notInSymbol:'',outSymbol:'STX',notOutSymbol:''},
      {id:16,XactnType:'Dispose', XactnTypeDetail:'Syvita NYC Pool',contract:'',function:'',senderAddress:'',recipientAddress:'SP2BE8YZF117DZX8FTZQ0072GQ8VET2PPPQC58YFJ',inSymbol:'',notInSymbol:'',outSymbol:'STX',notOutSymbol:''},
      {id:16,XactnType:'Dispose', XactnTypeDetail:'Syvita NYC Pool',contract:'',function:'',senderAddress:'',recipientAddress:'SPYABDY1GR8RPQVNK1VFD1CQP6MZT2GF4Q9QB19F',inSymbol:'',notInSymbol:'',outSymbol:'STX',notOutSymbol:''},
      {id:16,XactnType:'Dispose', XactnTypeDetail:'Syvita MIA Pool',contract:'',function:'',senderAddress:'',recipientAddress:'SPRK96DVHVA9KZ9EQ8PQQ110GW8HH4TQ5DGMRMVD',inSymbol:'',notInSymbol:'',outSymbol:'STX',notOutSymbol:''},
      {id:16,XactnType:'Dispose', XactnTypeDetail:'Syvita MIA Pool',contract:'SP343J7DNE122AVCSC4HEK4MF871PW470ZSXJ5K66.miamipool-v1',function:'add-funds',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'STX',notOutSymbol:''},
      {id:16,XactnType:'Dispose', XactnTypeDetail:'Syvita MIA Pool',contract:'SP196Q1HN49MJTJFRW08RCRP7YSXY28VE72GQWS0P.syvita-mining-mia-v1',function:'contribute',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'STX',notOutSymbol:''},
      {id:16,XactnType:'Mined', XactnTypeDetail:'Syvita MIA Pool',contract:'SP343J7DNE122AVCSC4HEK4MF871PW470ZSXJ5K66.miamipool-v1',function:'payout-mia',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:16,XactnType:'Mined', XactnTypeDetail:'Syvita MIA Pool',contract:'SP196Q1HN49MJTJFRW08RCRP7YSXY28VE72GQWS0P.syvita-mining-mia-v1',function:'contributor-claim-all-rewards-for-pool',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:16,XactnType:'Mined', XactnTypeDetail:'Syvita MIA Pool',contract:'',function:'',senderAddress:'SPRK96DVHVA9KZ9EQ8PQQ110GW8HH4TQ5DGMRMVD',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:16,XactnType:'Mined', XactnTypeDetail:'Syvita NYC Pool',contract:'',function:'',senderAddress:'SP2ST741GVK200RYK9NKTYP6CJH1AG4ZPV4A5WG4M',recipientAddress:'',inSymbol:'NYC',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:16,XactnType:'Mined', XactnTypeDetail:'Syvita NYC Pool',contract:'',function:'',senderAddress:'SP1C6WQ9KTV3769S8X8YNAWBXKDG2Y65P5EEDRWR6',recipientAddress:'',inSymbol:'NYC',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:16,XactnType:'Mined', XactnTypeDetail:'Syvita NYC Pool',contract:'',function:'',senderAddress:'SP2BE8YZF117DZX8FTZQ0072GQ8VET2PPPQC58YFJ',recipientAddress:'',inSymbol:'NYC',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:16,XactnType:'Mined', XactnTypeDetail:'Syvita NYC Pool',contract:'',function:'',senderAddress:'SPYABDY1GR8RPQVNK1VFD1CQP6MZT2GF4Q9QB19F',recipientAddress:'',inSymbol:'NYC',notInSymbol:'',outSymbol:'',notOutSymbol:''},

      //CityCoins
      {id:17,XactnType:'Reward', XactnTypeDetail:'NYC Stacking Reward',contract:'SP2H8PY27SEZ03MWRKS5XABZYQN17ETGQS3527SA5.newyorkcitycoin-core-v1',function:'claim-stacking-reward',senderAddress:'',recipientAddress:'',inSymbol:'STX',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:17,XactnType:'', XactnTypeDetail:'Return of Stacked NYC',contract:'SP2H8PY27SEZ03MWRKS5XABZYQN17ETGQS3527SA5.newyorkcitycoin-core-v1',function:'claim-stacking-reward',senderAddress:'',recipientAddress:'',inSymbol:'NYC',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:17,XactnType:'Reward', XactnTypeDetail:'MIA Stacking Reward',contract:'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-core-v1',function:'claim-stacking-reward',senderAddress:'',recipientAddress:'',inSymbol:'STX',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:17,XactnType:'', XactnTypeDetail:'Return of Stacked MIA',contract:'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-core-v1',function:'claim-stacking-reward',senderAddress:'',recipientAddress:'',inSymbol:'MIA',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:17,XactnType:'', XactnTypeDetail:'Stack NYC Coins',contract:'SP2H8PY27SEZ03MWRKS5XABZYQN17ETGQS3527SA5.newyorkcitycoin-core-v1',function:'stack-tokens',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:17,XactnType:'', XactnTypeDetail:'Stack MIA Coins',contract:'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-core-v1',function:'stack-tokens',senderAddress:'',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      //OkCoin
      {id:18,XactnType:'', XactnTypeDetail:'OkCoin Xfer',contract:'',function:'',senderAddress:'SP17H4TSCP2JYBF45HEZGGF3N66VRPXQZW4EBVAAV',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:19,XactnType:'', XactnTypeDetail:'OkCoin Xfer',contract:'',function:'',senderAddress:'SP2XFNHB366DQWK7TSPYRPCA5XFA3964W8W6RS5P0',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:20,XactnType:'', XactnTypeDetail:'OkCoin Xfer',contract:'',function:'',senderAddress:'SP3DW8X8CBPSYWT327120KE5N8DEJTTBMYJ2QH68Y',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:20,XactnType:'', XactnTypeDetail:'OkCoin Xfer',contract:'',function:'',senderAddress:'SP3HXJJMJQ06GNAZ8XWDN1QM48JEDC6PP6W3YZPZJ',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:21,XactnType:'', XactnTypeDetail:'OkCoin Xfer',contract:'',function:'',senderAddress:'',recipientAddress:'SP3HXJJMJQ06GNAZ8XWDN1QM48JEDC6PP6W3YZPZJ',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      //CoinEx
      {id:18,XactnType:'', XactnTypeDetail:'CoineX Xfer',contract:'',function:'',senderAddress:'SP36AQJD5A92TM5WS0ZEC4GSZPY5B2CPQD6TX35PP',recipientAddress:'',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''},
      {id:18,XactnType:'', XactnTypeDetail:'CoineX Xfer',contract:'',function:'',senderAddress:'',recipientAddress:'SP36AQJD5A92TM5WS0ZEC4GSZPY5B2CPQD6TX35PP',inSymbol:'',notInSymbol:'',outSymbol:'',notOutSymbol:''}
      
    ];
}
