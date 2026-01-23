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

# Switch to port :2 (5902) to avoid permission issues with :1
# 1. Start VNC on :2
run_ssh_command(target_ip, user, password, "vncserver :2 -geometry 1280x720 -depth 24")

# 2. Update websockify to point to 5902
# First kill old websockify
run_ssh_command(target_ip, user, password, "pkill websockify")

# Start new websockify on 6081 -> 5902
# Note: Keeping 6081 as the external port so we don't have to change the tunnel
cmd = "nohup websockify --web=/usr/share/novnc/ 6081 0.0.0.0:5902 > /tmp/novnc.log 2>&1 &"
run_ssh_command(target_ip, user, password, cmd)

# 3. Verify
run_ssh_command(target_ip, user, password, "ps aux | grep -E 'Xtightvnc|websockify'")
