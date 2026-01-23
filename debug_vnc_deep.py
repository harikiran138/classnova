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

# 1. Check active VNC screens
run_ssh_command(target_ip, user, password, "vncserver -list")

# 2. Check running processes (Xtightvnc, websockify)
run_ssh_command(target_ip, user, password, "ps aux | grep -E 'Xtightvnc|websockify'")

# 3. Check VNC Start Script (xstartup) to see what desktop it tries to launch
run_ssh_command(target_ip, user, password, "cat /home/classnova/.vnc/xstartup")

# 4. Check the specific log file for the active display (assuming :1)
# Note: Log name typically hostname:1.log
run_ssh_command(target_ip, user, password, "ls -F /home/classnova/.vnc/*.log")
run_ssh_command(target_ip, user, password, "tail -n 30 /home/classnova/.vnc/*.log")
