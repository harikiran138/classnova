import subprocess
import time
import sys
import os

def start_tunnel(ip, user, password):
    print(f"Starting Multi-Port SSH Tunnel to {user}@{ip}...")
    
    # Forward:
    # 6080 (Local) -> 6080 (Remote NoVNC)
    # 3000 (Local) -> 3000 (Remote React App)
    cmd = f"ssh -L 6080:localhost:6080 -L 3000:localhost:3000 -N {user}@{ip}"
    
    expect_script = f"""
    set timeout -1
    spawn {cmd}
    expect {{
        "password:" {{
            send "{password}\\r"
            expect eof
        }}
        "yes/no" {{
            send "yes\\r"
            exp_continue
        }}
        eof {{ exit 1 }}
    }}
    """
    
    try:
        process = subprocess.Popen(['expect', '-c', expect_script], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print("Tunnel process launched! Monitoring...")
        
        # Check if it dies immediately
        time.sleep(3)
        if process.poll() is not None:
             print("Tunnel died immediately.")
             print("STDOUT:", process.stdout.read().decode())
             print("STDERR:", process.stderr.read().decode())
        else:
             print("Tunnel appears to be running.")
             print("Forwarding:")
             print("- localhost:6080 -> Remote NoVNC")
             print("- localhost:3000 -> Remote React App")
             
             # Keep script alive
             while True:
                 time.sleep(10)
                 if process.poll() is not None:
                     print("Tunnel Connection Lost.")
                     break
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    start_tunnel("172.18.161.85", "classnova", "hari1388")
