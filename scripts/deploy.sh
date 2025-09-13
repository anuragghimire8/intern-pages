#!/bin/bash
aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 524291824362.dkr.ecr.eu-central-1.amazonaws.com
# Go to the project directory
cd /home/ubuntu/intern

# # Stop existing containers
docker-compose down

# Pull the latest image
 docker-compose pull

# Start the container with the new image
docker-compose up -d