import subprocess

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
    result = subprocess.run(['expect', '-c', expect_script], capture_output=True, text=True)
    print(result.stdout)

target_ip = "172.18.161.85"
user = "classnova"
password = "hari1388"

run_scp(target_ip, user, password, "/Users/chepuriharikiran/Desktop/github/classnova/start_nova.sh", "/home/classnova/start_nova.sh")
run_scp(target_ip, user, password, "/Users/chepuriharikiran/Desktop/github/classnova/kiosk.sh", "/home/classnova/kiosk.sh")

# Now chmod and restart
def run_ssh_command(ip, user, password, command):
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

run_ssh_command(target_ip, user, password, "chmod +x /home/classnova/start_nova.sh /home/classnova/kiosk.sh")
run_ssh_command(target_ip, user, password, "pkill -f node; pkill -f electron; pkill -f kiosk.sh; nohup /home/classnova/kiosk.sh > /home/classnova/kiosk_startup.log 2>&1 &")
