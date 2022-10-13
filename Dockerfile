FROM        --platform=${TARGETPLATFORM} node:18-alpine

ARG         NODE_ENV=production

WORKDIR     /fatstx

COPY        . .

RUN         yarn install && \
            yarn build && \
            rm -r /fatstx/node_modules /fatstx/yarn.lock /fatstx/package.json && \
            yarn global add serve && \
            yarn add react-inject-env && \
            chmod +x /fatstx/entrypoint.sh

EXPOSE      3000

ENV         STACKS_BLOCKCHAIN_API_URL ${STACKS_BLOCKCHAIN_API_URL:-http://stacks-blockchain-api:3999}

ENTRYPOINT  ["./entrypoint.sh"]