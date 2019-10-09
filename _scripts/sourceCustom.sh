#!/usr/bin/env sh

FILE=customEnv.sh

if [[ -f $FILE ]]; then
  echo "Using Custom Envs..."
  cat $FILE
  echo ""
  source $FILE
fi