# Deployment Guide

## 🚀 Production Deployment Checklist

### Pre-Deployment
- [ ] Update personal information in all sections
- [ ] Replace profile image (public/assets/vk.png)
- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Test Docker build: `docker-compose up`
- [ ] Verify all links work
- [ ] Check mobile responsiveness

### Environment Setup
```bash
# Copy environment file
cp .env.example .env

# Edit as needed
NODE_ENV=production
PORT=3000
```

## 🐳 Docker Deployment

### Option 1: Docker Compose (Recommended)
```bash
# Start
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f portfolio

# Stop
docker-compose down
```

### Option 2: Docker CLI
```bash
# Build
docker build -t aasheesh-portfolio:latest .

# Run
docker run -d -p 3000:3000 --name portfolio aasheesh-portfolio:latest

# Stop
docker stop portfolio
docker rm portfolio
```

## ☁️ Cloud Deployment

### AWS ECS Fargate

1. **Create ECR Repository**
```bash
aws ecr create-repository --repository-name aasheesh-portfolio
```

2. **Build and Push**
```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com

docker build -t aasheesh-portfolio .
docker tag aasheesh-portfolio:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/aasheesh-portfolio:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/aasheesh-portfolio:latest
```

3. **Create ECS Task Definition**
```json
{
  "family": "aasheesh-portfolio",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "containerDefinitions": [{
    "name": "portfolio",
    "image": "<account-id>.dkr.ecr.us-east-1.amazonaws.com/aasheesh-portfolio:latest",
    "portMappings": [{
      "containerPort": 3000,
      "protocol": "tcp"
    }]
  }]
}
```

4. **Create ECS Service**
```bash
aws ecs create-service \
  --cluster default \
  --service-name aasheesh-portfolio \
  --task-definition aasheesh-portfolio \
  --desired-count 1 \
  --launch-type FARGATE
```

### AWS EC2

```bash
# SSH to EC2
ssh -i key.pem ec2-user@<ip>

# Install Docker
sudo yum update -y
sudo yum install docker -y
sudo service docker start

# Pull and run
docker pull <your-image>
docker run -d -p 80:3000 <your-image>
```

### Azure Container Instances

```bash
# Login
az login

# Create resource group
az group create --name portfolio-rg --location eastus

# Create container
az container create \
  --resource-group portfolio-rg \
  --name aasheesh-portfolio \
  --image <registry>.azurecr.io/aasheesh-portfolio \
  --dns-name-label aasheesh-portfolio \
  --ports 3000
```

### Google Cloud Run

```bash
# Build and push
gcloud builds submit --tag gcr.io/<project-id>/aasheesh-portfolio

# Deploy
gcloud run deploy aasheesh-portfolio \
  --image gcr.io/<project-id>/aasheesh-portfolio \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

## 🔧 Post-Deployment

### Health Check
```bash
curl http://localhost:3000
```

### Monitor Logs
```bash
# Docker
docker logs -f <container-id>

# Docker Compose
docker-compose logs -f
```

### Update Deployment
```bash
# Rebuild
docker-compose build

# Restart
docker-compose up -d
```

## 🌐 Domain Setup

### Add Custom Domain

1. **Update DNS Records**
```
Type: A
Name: @
Value: <server-ip>

Type: CNAME
Name: www
Value: yourdomain.com
```

2. **SSL Certificate (Let's Encrypt)**
```bash
# Install certbot
sudo apt install certbot

# Get certificate
sudo certbot certonly --standalone -d yourdomain.com
```

3. **Nginx Reverse Proxy**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📊 Monitoring

### Container Stats
```bash
docker stats
```

### Resource Usage
```bash
docker system df
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build and push
        run: |
          docker build -t aasheesh-portfolio .
          docker push <registry>/aasheesh-portfolio
```

## 🆘 Troubleshooting

### Container won't start
```bash
docker logs <container-id>
```

### Port conflict
```bash
# Find process using port
lsof -i :3000
# Kill process
kill -9 <PID>
```

### Out of memory
```bash
# Increase Docker memory limit
docker run -m 1g -p 3000:3000 aasheesh-portfolio
```

## 📞 Support

For deployment issues, contact:
- Email: shrivastav.aasheesh88@gmail.com
- Phone: +91-8218615729
