import subprocess

def run_ssh_command(ip, user, password, command):
    print(f"\n=== CMD: {command} ===")
    expect_script = f"""
    set timeout 20
    spawn ssh -o StrictHostKeyChecking=no {user}@{ip} "{command}"
    expect {{
        "password:" {{
            send "{password}\\r"
            expect eof
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

# Search for "3000" or "index.html" in main.js
run_ssh_command(target_ip, user, password, "grep -C 5 'http://localhost:3000' /home/classnova/NovaBoard_Deployed/excalidraw-app/dist-electron/main.js")
