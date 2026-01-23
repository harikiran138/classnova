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

# 1. Look for any python process running app.py or similar in NovaBoard_Deployed
run_ssh_command(target_ip, user, password, "ps aux | grep -i python")
run_ssh_command(target_ip, user, password, "ps aux | grep -i flask")

# 2. Try to start the backend manually if it's missing
# Assuming it's in NovaBoard_Deployed and uses a venv?
# Earlier logs showed: /Users/chepuriharikiran/.pyenv/... wait, that was local log! 
# The log from the Pi showed: /Users/chepuriharikiran/... 
# WAIT. The log snippet "NovaBoard Backend running on port 5001" followed by a path like "/Users/chepuriharikiran/..."
# That path looks like a MAC path, not a Linux Pi path (/home/classnova).
# DID I READ A LOCAL LOG MISTAKENLY?
# Let's re-examine Step 320 output carefully.
# Step 320 output said: "spawn ssh ... tail -n 20 ... backend.log".
# And the output contained: "/Users/chepuriharikiran/.pyenv/..."
# This implies the log file on the Pi contains logs from when it was developed on a Mac!
# So the backend MIGHT NOT BE RUNNING AT ALL on the Pi, and I'm reading stale logs moved over with the repo.

# Correct action: Check if backend is actually running NOW.
# If not, try to start it.
run_ssh_command(target_ip, user, password, "cd /home/classnova/NovaBoard_Deployed && ls -F")
# Look for a way to start backend. maybe `python3 app.py` or similar?
# I'll check `package.json` scripts remotely to see how it starts backend (concurrently?).
run_ssh_command(target_ip, user, password, "cat /home/classnova/NovaBoard_Deployed/package.json")
