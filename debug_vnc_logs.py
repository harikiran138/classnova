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

# 1. Grab 50 lines of syslog where vnc might log
run_ssh_command(target_ip, user, password, "sudo tail -n 50 /var/log/syslog | grep -i vnc")

# 2. Grab RealVNC logs if they exist
run_ssh_command(target_ip, user, password, "sudo cat /root/.vnc/vncserver-x11.log 2>/dev/null")
run_ssh_command(target_ip, user, password, "cat /home/classnova/.vnc/*logfile* 2>/dev/null")

# 3. Check the novnc.log content again to see the failure reason for the recent attempts
run_ssh_command(target_ip, user, password, "cat novnc.log")
