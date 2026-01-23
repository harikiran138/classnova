#!/bin/bash
echo "Setting up secure tunnel to Raspberry Pi..."
echo "You will be asked for the password (hari1388) one last time."
echo ""
echo "Once the tunnel is open, keep this terminal window OPEN."
echo "Then go to: http://localhost:6080/vnc.html"
echo ""

ssh -L 6080:localhost:6080 -N classnova@172.18.161.85
