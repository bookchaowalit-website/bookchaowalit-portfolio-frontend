#!/bin/bash

echo "======================================"
echo "Fixing File Watch Limit for Next.js"
echo "======================================"
echo ""
echo "Current limit:"
cat /proc/sys/fs/inotify/max_user_watches
echo ""
echo "Increasing to 524,288..."
echo ""

# Temporarily increase limit (current session)
sudo sysctl fs.inotify.max_user_watches=524288

# Make it permanent
echo "fs.inotify.max_user_watches=524288" | sudo tee /etc/sysctl.d/99-inotify.conf
sudo sysctl -p /etc/sysctl.d/99-inotify.conf

echo ""
echo "✓ Done! New limit:"
cat /proc/sys/fs/inotify/max_user_watches
echo ""
echo "You can now run: npm run dev"
