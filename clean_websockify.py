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

# 1. Kill stale websockify processes
run_ssh_command(target_ip, user, password, "kill -9 2606 3409")
run_ssh_command(target_ip, user, password, "pkill -f websockify")

# 2. Restart websockify cleanly pointing to 5902 (Display :2)
cmd = "nohup websockify --web=/usr/share/novnc/ 6081 0.0.0.0:5902 > /tmp/novnc_clean.log 2>&1 &"
run_ssh_command(target_ip, user, password, cmd)

# 3. Verify single process
run_ssh_command(target_ip, user, password, "ps aux | grep websockify")
