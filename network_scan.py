import socket
import threading
import ipaddress

def check_ssh(ip):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(0.5)
    result = sock.connect_ex((str(ip), 22))
    if result == 0:
        print(f"SSH OPEN: {ip}")
    sock.close()

def scan_subnet(subnet_str):
    print(f"Scanning {subnet_str} for SSH (Port 22)...")
    subnet = ipaddress.ip_network(subnet_str, strict=False)
    threads = []
    for ip in subnet.hosts():
        t = threading.Thread(target=check_ssh, args=(ip,))
        t.start()
        threads.append(t)
        
        # Batch threads to avoid "Too many open files"
        if len(threads) >= 100:
             for t in threads:
                 t.join()
             threads = []
    
    for t in threads:
        t.join()
    print("Scan complete.")

if __name__ == "__main__":
    scan_subnet("172.18.161.0/24")
