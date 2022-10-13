FROM        --platform=${TARGETPLATFORM} node:18-alpine as builder

ARG         NODE_ENV=production

WORKDIR     /fatstx

COPY        . .

RUN         yarn install && \
            yarn build

            # Stage 2 - the production environment
FROM        --platform=${TARGETPLATFORM} node:18-alpine

WORKDIR      /app

COPY        --from=builder /fatstx /app

RUN         yarn global add serve && \
            rm -r /app/node_modules /app/yarn.lock /app/package.json && \
            yarn add react-inject-env && \
            chmod +x /app/entrypoint.sh

EXPOSE      3000

ENV         STACKS_BLOCKCHAIN_API_URL ${STACKS_BLOCKCHAIN_API_URL:-http://stacks-blockchain-api:3999}

ENTRYPOINT  ["./entrypoint.sh"]