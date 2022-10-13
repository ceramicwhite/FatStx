#!/bin/sh

REACT_APP_STACKS_BLOCKCHAIN_API_URL=$STACKS_BLOCKCHAIN_API_URL npx react-inject-env set

serve -s build -n