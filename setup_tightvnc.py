import subprocess

def run_ssh_command(ip, user, password, command):
    print(f"--- Running: {command} ---")
    expect_script = f"""
    set timeout 180
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

# 1. Install tightvncserver
run_ssh_command(target_ip, user, password, "sudo apt-get update && sudo apt-get install -y tightvncserver")

# 2. Kill any existing vnc sessions
run_ssh_command(target_ip, user, password, "vncserver -kill :1 2>/dev/null || true")

# 3. Start new VNC server on :1 (5901)
# We need to set a password automatically. 
# "echo password | vncpasswd -f > ~/.vnc/passwd"
run_ssh_command(target_ip, user, password, "mkdir -p ~/.vnc && echo 'hari1388' | vncpasswd -f > ~/.vnc/passwd && chmod 600 ~/.vnc/passwd")
run_ssh_command(target_ip, user, password, "USER=classnova vncserver :1 -geometry 1280x800 -depth 24")

# 4. Point websockify to 5901 (Port :1)
run_ssh_command(target_ip, user, password, "pkill -f websockify")
run_ssh_command(target_ip, user, password, "nohup python3 /usr/bin/websockify --web=/usr/share/novnc/ 6081 0.0.0.0:5901 > novnc_new.log 2>&1 &")
