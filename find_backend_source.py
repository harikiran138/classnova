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

# 1. Inspect packages folder to find backend
run_ssh_command(target_ip, user, password, "ls -F /home/classnova/NovaBoard_Deployed/packages/")

# 2. Try to locate app.py or similar
run_ssh_command(target_ip, user, password, "find /home/classnova/NovaBoard_Deployed/packages -name 'app.py' -o -name 'wsgi.py'")

# 3. Try to start it if found (blind guess for now, will refine after seeing ls)
