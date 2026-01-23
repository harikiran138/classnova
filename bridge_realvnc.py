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

# 1. Start Websockify for RealVNC (5900)
# Use existing tunnel port 6081
run_ssh_command(target_ip, user, password, "pkill -f websockify")
cmd = "nohup websockify --web=/usr/share/novnc/ 6081 0.0.0.0:5900 > /tmp/novnc_realvnc.log 2>&1 &"
run_ssh_command(target_ip, user, password, cmd)

# 2. Verify RealVNC port and Websockify
run_ssh_command(target_ip, user, password, "netstat -tuln | grep 5900")
run_ssh_command(target_ip, user, password, "ps aux | grep websockify")
