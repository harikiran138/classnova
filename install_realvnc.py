import subprocess

def run_ssh_command(ip, user, password, command):
    print(f"--- Running: {command} ---")
    expect_script = f"""
    set timeout 120
    spawn ssh -t {user}@{ip} "{command}"
    expect {{
        "password for {user}:" {{
            send "{password}\\r"
            exp_continue
        }}
        "{user}@{ip}'s password:" {{
            send "{password}\\r"
            exp_continue
        }}
        "Do you want to continue?" {{
            send "Y\\r"
            exp_continue
        }}
        timeout {{ exit 2 }}
        eof {{ exit 0 }}
    }}
    catch wait result
    exit [lindex $result 3]
    """
    result = subprocess.run(['expect', '-c', expect_script], capture_output=True, text=True)
    print(result.stdout)

target_ip = "172.18.161.85"
user = "classnova"
password = "hari1388"

# 1. Install RealVNC Server
# Note: Using -t for pseudo-terminal to make sudo happy if needed
install_cmd = "sudo apt-get update && sudo apt-get install realvnc-vnc-server -y"
run_ssh_command(target_ip, user, password, install_cmd)

# 2. Enable and Start Service
enable_cmd = "sudo systemctl enable vncserver-x11-serviced.service && sudo systemctl start vncserver-x11-serviced.service"
run_ssh_command(target_ip, user, password, enable_cmd)

# 3. Verify it's running
run_ssh_command(target_ip, user, password, "systemctl status vncserver-x11-serviced.service")

# 4. Clean up old TightVNC stuff
run_ssh_command(target_ip, user, password, "killall Xtightvnc Xvnc || true")
