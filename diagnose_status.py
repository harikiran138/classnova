import subprocess
import time

def run_ssh_command(ip, user, password, command):
    print(f"\n=== CMD: {command} ===")
    expect_script = f"""
    set timeout 40
    spawn ssh -o StrictHostKeyChecking=no {user}@{ip} "{command}"
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
    # Filter out the ssh banner/password prompt noise if possible, but printing raw is safer for now
    print(result.stdout)
    if result.stderr:
        print(f"STDERR: {result.stderr}")

target_ip = "172.18.161.85"
user = "classnova"
password = "hari1388"

commands = [
    "uptime",
    "free -h",
    "pm2 status",
    "pm2 logs --lines 20 --nostream", 
    "ps aux | grep -E 'node|kiosk'",
    "ls -F /home/classnova/",
    "cat /home/classnova/kiosk.sh || echo 'kiosk.sh not found'"
]

for cmd in commands:
    run_ssh_command(target_ip, user, password, cmd)
