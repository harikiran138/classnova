import subprocess

def run_ssh_command(ip, user, password, command):
    print(f"\n=== CMD: {command} ===")
    expect_script = f"""
    set timeout 40
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

def run_scp(ip, user, password, local_file, remote_path):
    print(f"Uploading {local_file} to {remote_path}...")
    expect_script = f"""
    set timeout 60
    spawn scp -o StrictHostKeyChecking=no {local_file} {user}@{ip}:{remote_path}
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
    subprocess.run(['expect', '-c', expect_script])

target_ip = "172.18.161.85"
user = "classnova"
password = "hari1388"

run_scp(target_ip, user, password, "/Users/chepuriharikiran/Desktop/github/classnova/start_nova.sh", "/home/classnova/start_nova.sh")

cmds = [
    "chmod +x /home/classnova/start_nova.sh",
    "pkill -9 -u classnova node; pkill -9 -u classnova electron; pkill -9 -u classnova kiosk.sh",
    "pm2 delete all",
    "pm2 start /home/classnova/start_nova.sh --name novaboard",
    "pm2 save",
    "pm2 status"
]

for cmd in cmds:
    run_ssh_command(target_ip, user, password, cmd)
