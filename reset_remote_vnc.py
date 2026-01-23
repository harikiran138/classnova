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

# 1. Kill old websockify on Pi to clear port
run_ssh_command(target_ip, user, password, "pkill -f websockify")

# 2. Restart websockify with different flag combination
# Binding to 0.0.0.0 to ensure it listens largely
run_ssh_command(target_ip, user, password, "nohup python3 /usr/bin/websockify --web=/usr/share/novnc/ 6080 0.0.0.0:5900 > novnc.log 2>&1 &")

# 3. Verify VNC server (realvnc or tightvnc) is listening on 5900
run_ssh_command(target_ip, user, password, "netstat -tulpn | grep 5900")

# 4. Check firewall
run_ssh_command(target_ip, user, password, "sudo iptables -L | grep 5900 || echo 'No iptables rules'")
