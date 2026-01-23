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

# 1. Check RealVNC logs (common on RPi)
run_ssh_command(target_ip, user, password, "sudo cat /var/log/vncserver-x11.log | tail -n 20")

# 2. Check X11 logs
run_ssh_command(target_ip, user, password, "cat /home/classnova/.vnc/*.log | tail -n 20")

# 3. Check systemd status of vnc
run_ssh_command(target_ip, user, password, "systemctl status vncserver-x11-serviced.service")

# 4. Try to connect to 5900 locally on the Pi using python socket to verify it accepts connections
verify_socket_script = """
import socket
import sys
try:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(2)
    s.connect(('127.0.0.1', 5900))
    print('SUCCESS: Connected to 127.0.0.1:5900')
    # Read banner
    banner = s.recv(1024)
    print(f'BANNER: {banner}')
    s.close()
except Exception as e:
    print(f'FAILURE: {e}')
"""
# Save this mini script to a file on Pi and run it
# We'll just run it as a one-liner command for simplicity if possible, but writing file is safer for escaping
run_ssh_command(target_ip, user, password, f"echo \\"{verify_socket_script}\\" > check_vnc_socket.py && python3 check_vnc_socket.py")
