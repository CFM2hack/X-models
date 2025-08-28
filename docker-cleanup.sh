#!/bin/bash

echo "Starting Docker cleanup..."

# Remove all stopped containers
echo "Removing stopped containers..."
docker container prune -f

# Remove all dangling (untagged) images
echo "Removing dangling images..."
docker image prune -f

# Optionally, remove all unused images (unreferenced)
# WARNING: This deletes images without containers
# Uncomment the next line if you want full cleanup
# docker image prune -a -f

# Remove all unused volumes
echo "Removing unused volumes..."
docker volume prune -f

echo "Docker cleanup complete."
