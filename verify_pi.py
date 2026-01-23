import subprocess
import sys

def run_remote_command(ip, user, password, command):
    print(f"Running '{command}' on {user}@{ip}...")
    
    # Create an expect script dynamically
    expect_script = f"""
    set timeout 20
    spawn ssh {user}@{ip} "{command}"
    expect {{
        "password:" {{
            send "{password}\\r"
            expect {{
                "Permission denied" {{ exit 1 }}
                eof {{ exit 0 }}
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
    
    try:
        # Run expect script
        p = subprocess.run(['expect', '-c', expect_script], capture_output=True, text=True)
        
        if p.returncode == 0:
            # Filter out the SSH login noise if possible, but usually expect captures everything
            # We'll just print the stdout
            print(f"\n--- Output of '{command}' ---")
            # The output usually contains the password prompt and everything, so it might be messy.
            # But it proves connection.
            print(p.stdout)
            return True
        else:
            print(f"Failed to run command. Exit code: {p.returncode}")
            print("Output:", p.stdout)
            print("Error:", p.stderr)
            return False
            
    except Exception as e:
        print(f"Error: {e}")
        return False

target_ip = "172.18.161.85"
user = "classnova"
password = "hari1388"

# 1. Check OS Info
if run_remote_command(target_ip, user, password, "uname -a && cat /etc/os-release"):
    print("\n✅ Verification Successful! Connected to Raspberry Pi.")
else:
    print("\n❌ Verification Failed.")
