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

# 1. Check if RealVNC is installed
run_ssh_command(target_ip, user, password, "dpkg -l | grep realvnc")

# 2. Check if the service exists
run_ssh_command(target_ip, user, password, "systemctl list-unit-files | grep vnc")

# 3. Kill current TightVNC setup to avoid conflicts
run_ssh_command(target_ip, user, password, "killall Xtightvnc websockify Xvnc")
run_ssh_command(target_ip, user, password, "vncserver -kill :1")
run_ssh_command(target_ip, user, password, "vncserver -kill :2")
