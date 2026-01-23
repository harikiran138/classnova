import subprocess

def run_ssh_command(ip, user, password, command):
    print(f"\n=== CMD: {command} ===")
    expect_script = f"""
    set timeout 20
    spawn ssh -o StrictHostKeyChecking=no {user}@{ip} "{command}"
    expect {{
        "password:" {{
            send "{password}\\r"
            expect eof
        }}
        "yes/no" {{
            send "yes\\r"
            exp_continue
        }}
    }}
    """
    result = subprocess.run(['expect', '-c', expect_script], capture_output=True, text=True)
    print(result.stdout)

target_ip = "172.18.161.85"
user = "classnova"
password = "hari1388"

# Nuke everything for the user
nuke_cmd = "pkill -9 -u classnova node; pkill -9 -u classnova electron; pkill -9 -u classnova yarn; pkill -9 -u classnova kiosk.sh; pkill -9 -u classnova npm"

run_ssh_command(target_ip, user, password, nuke_cmd)
run_ssh_command(target_ip, user, password, "nohup /home/classnova/kiosk.sh > /home/classnova/kiosk_startup_final.log 2>&1 &")
run_ssh_command(target_ip, user, password, "ps aux | grep -E 'node|electron|kiosk'")
