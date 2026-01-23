import subprocess

def run_ssh_command(ip, user, password, command, use_sudo=False):
    print(f"\n=== CMD: {command} ===")
    
    # Simple expect for normal commands
    script_body = f"""
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
    """
    
    # Enhanced expect for sudo
    if use_sudo:
        script_body = f"""
        expect {{
            "password:" {{
                send "{password}\\r"
                exp_continue
            }}
            "password for {user}:" {{
                send "{password}\\r"
                exp_continue
            }}
             "yes/no" {{
                send "yes\\r"
                exp_continue
            }}
            timeout {{ exit 2 }}
            eof {{ exit 0 }}
        }}
        """

    expect_script = f"""
    set timeout 300
    spawn ssh -o StrictHostKeyChecking=no {user}@{ip} "{command}"
    {script_body}
    catch wait result
    exit [lindex $result 3]
    """
    result = subprocess.run(['expect', '-c', expect_script], capture_output=True, text=True)
    print(result.stdout)
    if result.returncode != 0:
        print(f"Error executing command: {command}")

target_ip = "172.18.161.85"
user = "classnova"
password = "hari1388"

# 1. Inspect package.json scripts again (head)
run_ssh_command(target_ip, user, password, "head -n 50 /home/classnova/NovaBoard_Deployed/excalidraw-app/package.json")

# 2. Install PM2
# usage of sudo might be needed for -g
run_ssh_command(target_ip, user, password, "echo 'Installing PM2...' && sudo npm install -g pm2", use_sudo=True)

# 3. Request Build (this might take long, timeout is set to 300s above)
# We set NODE_OPTIONS to use swap/memory
build_cmd = "cd /home/classnova/NovaBoard_Deployed/excalidraw-app && export NODE_OPTIONS='--max-old-space-size=2048' && npm run build:app"
# Note: 'build:app' is a guess based on previous convo summaries. If it fails, I'll see the error.
# If previous scripts showed 'build', I'd use that. 'electron:build' is also possible.
# I'll try 'npm run build' if 'build:app' is not found, but I can't do conditional easily in one go.
# Let's try to just run 'npm run build' which is standard.
# BUT wait, the previous summary said "Complete the `yarn build:app`". 
# Ah, it uses YARN?
# Let's check if yarn.lock exists or package-lock.json. 
# The list_dir of local repo showed `package-lock.json` AND `bun.lockb`. No `yarn.lock` in the root list (wait, list_dir output from Step 4).
# Step 4 list_dir showed `package-lock.json`. So it uses NPM.
# The user's summary mentioning `yarn` might be from a different context or user Habit.
# I will use `npm run build`.

run_ssh_command(target_ip, user, password, build_cmd)
