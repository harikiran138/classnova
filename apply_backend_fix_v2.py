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

# New content
line1 = "VITE_APP_BACKEND_V2_GET_URL=https://json.excalidraw.com/api/v2/"
line2 = "VITE_APP_BACKEND_V2_POST_URL=https://json.excalidraw.com/api/v2/post/"
line3 = "VITE_APP_COLLABORATION_SERVER=https://json.excalidraw.com"

# Construct printf command
# printf "l1\nl2\nl3\n" > file
cmd = f"printf '{line1}\\n{line2}\\n{line3}\\n' > /home/classnova/NovaBoard_Deployed/excalidraw-app/.env.development"

run_ssh_command(target_ip, user, password, cmd)

# Verify
run_ssh_command(target_ip, user, password, "cat /home/classnova/NovaBoard_Deployed/excalidraw-app/.env.development")
