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

# 1. Kill any stale VNC processes explicitly
run_ssh_command(target_ip, user, password, "vncserver -kill :1")
run_ssh_command(target_ip, user, password, "killall Xtightvnc")

# 2. Create the xstartup file remotely
xstartup_content = """#!/bin/bash
xrdb $HOME/.Xresources
startxfce4 &
lxsession &
/usr/bin/lxsession -s LXDE-pi -e LXDE &
"""
# Note: I'm adding multiple session starters in hope one works (Raspbian usually uses LXDE-pi)

# Escape for shell printf
xstartup_cmd = f"printf '{xstartup_content}' > /home/classnova/.vnc/xstartup && chmod +x /home/classnova/.vnc/xstartup"
run_ssh_command(target_ip, user, password, xstartup_cmd)

# 3. Start VNC server with geometry
run_ssh_command(target_ip, user, password, "vncserver :1 -geometry 1280x720 -depth 24")

# 4. Verify startup
run_ssh_command(target_ip, user, password, "ps aux | grep Xtightvnc")
