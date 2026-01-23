import subprocess
import time
import sys

def start_tunnel(ip, user, password):
    print(f"Starting SSH Tunnel to {user}@{ip}...")
    # Map local 6080 to remote 6080 (where websockify is listening)
    # autossh would be better but expect is what we have
    
    cmd = f"ssh -L 6080:localhost:6080 -N {user}@{ip}"
    
    expect_script = f"""
    set timeout -1
    spawn {cmd}
    expect {{
        "password:" {{
            send "{password}\\r"
            # After sending password, we expect the tunnel to just hang open (no output)
            # So we wait forever or until it dies
            expect eof
        }}
        "yes/no" {{
            send "yes\\r"
            exp_continue
        }}
        eof {{ exit 1 }}
    }}
    """
    
    # We want this to run vaguely forever (in background)
    # But for this script, we'll just launch it
    try:
        process = subprocess.Popen(['expect', '-c', expect_script], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print("Tunnel process launched! Monitoring for initial errors...")
        time.sleep(3)
        if process.poll() is not None:
             print("Tunnel died immediately.")
             print(process.stdout.read().decode())
             print(process.stderr.read().decode())
        else:
             print("Tunnel appears to be running.")
             # We keep this script alive to keep the tunnel alive if running as extensive task
             # But here we probably want to detach. 
             # Actually, if I exit, the subprocess might die depending on how it's handled.
             # The user tool 'run_command' puts things in background if I let it.
             while True:
                 time.sleep(10)
                 if process.poll() is not None:
                     print("Tunnel Connection Lost.")
                     break
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    start_tunnel("172.18.161.85", "classnova", "hari1388")
