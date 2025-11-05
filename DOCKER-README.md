# Docker Deployment Guide

## Build and Run with Docker

### Using Docker directly:
```bash
# Build the image
docker build -t aasheesh-portfolio .

# Run the container
docker run -p 3000:3000 aasheesh-portfolio
```

### Using Docker Compose (Recommended):
```bash
# Build and start
docker-compose up -d

# Stop
docker-compose down

# View logs
docker-compose logs -f
```

## Access Application
Open browser: http://localhost:3000

## Docker Commands Reference
```bash
# List running containers
docker ps

# Stop container
docker stop <container-id>

# Remove container
docker rm <container-id>

# Remove image
docker rmi aasheesh-portfolio
```
