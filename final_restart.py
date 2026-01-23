import subprocess

def run_ssh_command(ip, user, password, command):
    print(f"\n=== CMD: {command} ===")
    expect_script = f"""
    set timeout 40
    spawn ssh -o StrictHostKeyChecking=no {user}@{ip} "{command}"
    expect {{
        "password:" {{
            send "{password}\\r"
            expect {{
                 eof {{ exit 0 }}
                 timeout {{ exit 0 }}
            }}
        }}
        "yes/no" {{
            send "yes\\r"
            exp_continue
        }}
        timeout {{ exit 2 }}
        eof {{ exit 1 }}
    }}
    catch wait result
    exit [lindex $result 3]
    """
    result = subprocess.run(['expect', '-c', expect_script], capture_output=True, text=True)
    print(result.stdout)

target_ip = "172.18.161.85"
user = "classnova"
password = "hari1388"

# 1. Create robust start_nova.sh
start_script = """#!/bin/bash
export DISPLAY=:0
export NODE_ENV=production
export NODE_OPTIONS="--max-old-space-size=1536"
cd /home/classnova/NovaBoard_Deployed/excalidraw-app
# Kill any stray electron first
pkill -f electron
# Start with local electron
./node_modules/.bin/electron . --no-sandbox
"""

# 2. Create optimized kiosk.sh
kiosk_script = """#!/bin/bash
export DISPLAY=:0

# Kill desktop environment elements to save RAM
pkill -f lxpanel
pkill -f pcmanfm

# Hide mouse cursor
unclutter -idle 0 &

# Play video if exists (optional splash)
VIDEO_PATH="$HOME/Downloads/video1.mp4"
if [ -f "$VIDEO_PATH" ]; then
    cvlc --fullscreen --no-video-title-show --play-and-exit "$VIDEO_PATH"
fi

# Launch NovaBoard in production mode
while true; do
    /home/classnova/start_nova.sh >> /home/classnova/nova_run.log 2>&1
    sleep 2
done
"""

# Commands to apply
cmds = [
    f"echo '{start_script}' > /home/classnova/start_nova.sh && chmod +x /home/classnova/start_nova.sh",
    f"echo '{kiosk_script}' > /home/classnova/kiosk.sh && chmod +x /home/classnova/kiosk.sh",
    "pkill -f kiosk.sh || echo 'kiosk not running'",
    "pkill -f electron || echo 'no electron to kill'",
    "pkill -f vite || echo 'no vite to kill'",
    # Run kiosk in background (disowned)
    "nohup /home/classnova/kiosk.sh > /home/classnova/kiosk_startup.log 2>&1 &"
]

for cmd in cmds:
    run_ssh_command(target_ip, user, password, cmd)
