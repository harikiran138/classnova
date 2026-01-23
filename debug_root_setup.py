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

# 1. Check for package.json explicitly
run_ssh_command(target_ip, user, password, "ls -l /home/classnova/NovaBoard_Deployed/package.json")

# 2. Test Yarn Start manually to see error
run_ssh_command(target_ip, user, password, "cd /home/classnova/NovaBoard_Deployed/ && yarn start")

# 3. Check internet connectivity (for public backend fallback)
run_ssh_command(target_ip, user, password, "ping -c 3 google.com")

# 4. Check firebase-project contents
run_ssh_command(target_ip, user, password, "ls -F /home/classnova/NovaBoard_Deployed/firebase-project/")
