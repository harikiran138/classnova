import subprocess

def run_ssh_command(ip, user, password, command):
    print(f"\n=== CMD: {command} ===")
    expect_script = f"""
    set timeout 600
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
    if result.returncode != 0:
        print(f"Error in command: {command}")

target_ip = "172.18.161.85"
user = "classnova"
password = "hari1388"

# Commands
cmds = [
    # 1. Build React App
    "cd /home/classnova/NovaBoard_Deployed/excalidraw-app && export NODE_OPTIONS='--max-old-space-size=2048' && npm run build:app > build_app.log 2>&1",
    # 2. Build Electron Main
    "cd /home/classnova/NovaBoard_Deployed/excalidraw-app && npm run electron:build > build_electron.log 2>&1",
    # 3. Create startup script
    "echo '#!/bin/bash\ncd /home/classnova/NovaBoard_Deployed/excalidraw-app\nexport NODE_ENV=production\nelectron .' > /home/classnova/start_nova.sh && chmod +x /home/classnova/start_nova.sh",
    # 4. Check logs head/tail to verify success
    "tail -n 20 /home/classnova/NovaBoard_Deployed/excalidraw-app/build_app.log",
    "tail -n 20 /home/classnova/NovaBoard_Deployed/excalidraw-app/build_electron.log"
]

for cmd in cmds:
    run_ssh_command(target_ip, user, password, cmd)
