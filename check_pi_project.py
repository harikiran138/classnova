import subprocess
import time

def run_ssh_command(ip, user, password, command):
    print(f"--- Running: {command} ---")
    expect_script = f"""
    set timeout 30
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
    # clean output (remove headers if possible, but raw is fine for analysis)
    print(result.stdout)

target_ip = "172.18.161.85"
user = "classnova"
password = "hari1388"

# 1. Listing files to find the project
run_ssh_command(target_ip, user, password, "ls -F ~/")

# 2. Check running node/python processes
run_ssh_command(target_ip, user, password, "ps aux | grep -E 'node|python|react|vite'")

# 3. Check open ports
run_ssh_command(target_ip, user, password, "netstat -tulpn || ss -tulpn")

# 4. Check docker containers (if applicable)
run_ssh_command(target_ip, user, password, "docker ps")
