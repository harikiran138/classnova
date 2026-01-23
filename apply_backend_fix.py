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

# Content for the new .env.development
new_env_content = """VITE_APP_BACKEND_V2_GET_URL=https://json.excalidraw.com/api/v2/
VITE_APP_BACKEND_V2_POST_URL=https://json.excalidraw.com/api/v2/post/
VITE_APP_COLLABORATION_SERVER=https://json.excalidraw.com
"""

# Escape newlines for echo
# Actually, simpler to write to a temp file locally and scp it, but I don't have scp in my helper easily.
# I'll use a python one-liner on the remote to write the file safely.

remote_python_script = f"""
with open('/home/classnova/NovaBoard_Deployed/excalidraw-app/.env.development', 'w') as f:
    f.write('''{new_env_content}''')
print('Successfully wrote .env.development')
"""

# Escape quotes for the shell command
remote_python_script_escaped = remote_python_script.replace('"', '\\"')

run_ssh_command(target_ip, user, password, f"python3 -c \\"{remote_python_script_escaped}\\"")

# Verify the change
run_ssh_command(target_ip, user, password, "cat /home/classnova/NovaBoard_Deployed/excalidraw-app/.env.development")
