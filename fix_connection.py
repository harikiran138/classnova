import subprocess
import time

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

# 1. Check services
run_ssh_command(target_ip, user, password, "sudo netstat -tulpn")

# 2. Check firewall
run_ssh_command(target_ip, user, password, "sudo ufw status")

# 3. Start websockify (noVNC) manually if installed
# This maps port 6080 (browser) -> 5900 (VNC)
run_ssh_command(target_ip, user, password, "nohup websockify --web=/usr/share/novnc/ 6080 localhost:5900 > novnc.log 2>&1 &")

# 4. Check if it started
run_ssh_command(target_ip, user, password, "ps aux | grep websockify")
