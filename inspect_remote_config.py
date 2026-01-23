import subprocess

def run_ssh_command(ip, user, password, command):
    print(f"--- Running: {command} ---")
    expect_script = f"""
    set timeout 20
    spawn ssh {user}@{ip} "{command}"
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

# 1. List contents of excalidraw-app to see structure
run_ssh_command(target_ip, user, password, "ls -F /home/classnova/NovaBoard_Deployed/excalidraw-app/")

# 2. Check for .env files in excalidraw-app
run_ssh_command(target_ip, user, password, "ls -a /home/classnova/NovaBoard_Deployed/excalidraw-app/ | grep .env")

# 3. Check for .env files in root
run_ssh_command(target_ip, user, password, "ls -a /home/classnova/NovaBoard_Deployed/ | grep .env")
