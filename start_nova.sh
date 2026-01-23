#!/bin/bash
export DISPLAY=:0
export NODE_ENV=production
export NODE_OPTIONS="--max-old-space-size=1536"
cd /home/classnova/NovaBoard_Deployed/excalidraw-app
# Start with local electron
./node_modules/.bin/electron . --no-sandbox --disable-gpu --disable-software-rasterizer
