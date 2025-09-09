#!/bin/bash
cd /home/kavia/workspace/code-generation/restaurant-web-template-131700-131715/restaurant_web_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

