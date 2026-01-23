#!/bin/bash
export DISPLAY=:0

# Kill desktop environment
pkill -f lxpanel
pkill -f pcmanfm

# Hide mouse cursor
unclutter -idle 0 &

# Play video if exists
VIDEO_PATH="$HOME/Downloads/video1.mp4"
if [ -f "$VIDEO_PATH" ]; then
    cvlc --fullscreen --no-video-title-show --play-and-exit "$VIDEO_PATH"
fi

# Launch NovaBoard in production mode
while true; do
    /home/classnova/start_nova.sh >> /home/classnova/nova_run.log 2>&1
    sleep 2
done
