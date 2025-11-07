# 🐳 Docker Deployment Guide

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and run
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

Access at: http://localhost:3000

### Using Docker CLI

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -d -p 3000:3000 --name portfolio portfolio

# View logs
docker logs -f portfolio

# Stop and remove
docker stop portfolio
docker rm portfolio
```

## Production Deployment

### Deploy to Any Server

```bash
# On your server
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
docker-compose up -d
```

### Push to Docker Hub

```bash
# Build
docker build -t YOUR_USERNAME/portfolio:latest .

# Login
docker login

# Push
docker push YOUR_USERNAME/portfolio:latest

# Run on any server
docker run -d -p 3000:3000 YOUR_USERNAME/portfolio:latest
```

### Deploy to AWS ECS

```bash
# Login to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com

# Build and tag
docker build -t portfolio .
docker tag portfolio:latest ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest

# Push
docker push ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
```

### Deploy to Azure Container Instances

```bash
# Login
az login

# Create resource group
az group create --name portfolio-rg --location eastus

# Create container
az container create \
  --resource-group portfolio-rg \
  --name portfolio \
  --image YOUR_USERNAME/portfolio:latest \
  --dns-name-label portfolio \
  --ports 3000
```

### Deploy to DigitalOcean

```bash
# Create droplet with Docker
# SSH to droplet
ssh root@YOUR_DROPLET_IP

# Run container
docker run -d -p 80:3000 --restart unless-stopped YOUR_USERNAME/portfolio:latest
```

## Docker Commands

```bash
# Build
docker build -t portfolio .

# Run
docker run -d -p 3000:3000 portfolio

# Stop
docker stop CONTAINER_ID

# Remove
docker rm CONTAINER_ID

# View logs
docker logs -f CONTAINER_ID

# List containers
docker ps

# List images
docker images

# Remove image
docker rmi portfolio
```

## Troubleshooting

### Port already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID PID_NUMBER /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Container won't start
```bash
docker logs CONTAINER_ID
```

### Rebuild after changes
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Image Size

- **Size:** ~150MB (Alpine-based)
- **Layers:** Multi-stage build for optimization
- **Security:** Non-root user

---

**Need help? Email: shrivastav.aasheesh88@gmail.com**
