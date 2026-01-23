import subprocess

def run_ssh_command(ip, user, password, command):
    print(f"\n=== CMD: {command} ===")
    expect_script = f"""
    set timeout 20
    spawn ssh -o StrictHostKeyChecking=no {user}@{ip}
    expect {{
        "password:" {{
            send "{password}\\r"
            expect "$ " {{
                send "{command}\\r"
                expect "$ " {{
                    send "exit\\r"
                    expect eof
                }}
            }}
        }}
        "yes/no" {{
            send "yes\\r"
            exp_continue
        }}
    }}
    """
    result = subprocess.run(['expect', '-c', expect_script], capture_output=True, text=True)
    print(result.stdout)

target_ip = "172.18.161.85"
user = "classnova"
password = "hari1388"

# Using cat heredoc for start_nova.sh
cmd1 = """cat << 'EOF' > /home/classnova/start_nova.sh
#!/bin/bash
export DISPLAY=:0
export NODE_ENV=production
export NODE_OPTIONS="--max-old-space-size=1536"
cd /home/classnova/NovaBoard_Deployed/excalidraw-app
./node_modules/.bin/electron . --no-sandbox
EOF
chmod +x /home/classnova/start_nova.sh
"""

# Using cat heredoc for kiosk.sh
cmd2 = """cat << 'EOF' > /home/classnova/kiosk.sh
#!/bin/bash
export DISPLAY=:0
pkill -f lxpanel
pkill -f pcmanfm
unclutter -idle 0 &
VIDEO_PATH="$HOME/Downloads/video1.mp4"
if [ -f "$VIDEO_PATH" ]; then
    cvlc --fullscreen --no-video-title-show --play-and-exit "$VIDEO_PATH"
fi
while true; do
    /home/classnova/start_nova.sh >> /home/classnova/nova_run.log 2>&1
    sleep 2
done
EOF
chmod +x /home/classnova/kiosk.sh
"""

run_ssh_command(target_ip, user, password, cmd1)
run_ssh_command(target_ip, user, password, cmd2)
run_ssh_command(target_ip, user, password, "pkill -f npm; pkill -f node; pkill -f electron; pkill -f kiosk.sh")
run_ssh_command(target_ip, user, password, "nohup /home/classnova/kiosk.sh > /home/classnova/kiosk_startup.log 2>&1 &")
