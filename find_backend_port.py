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

# 1. Read the startup script to see what ports/services are launched
run_ssh_command(target_ip, user, password, "cat /home/classnova/NovaBoard_Deployed/runNovaBoard.command")

# 2. Check open ports again (netstat) - looking for something other than 3000, 5900, 5901, 6080, 6081, 22
run_ssh_command(target_ip, user, password, "sudo netstat -tulpn")

# 3. Check logs of backend if possible
run_ssh_command(target_ip, user, password, "tail -n 20 /home/classnova/NovaBoard_Deployed/backend.log 2>/dev/null")
