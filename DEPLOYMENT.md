# 🚀 Production Deployment Guide

## 📋 Pre-Deployment Checklist

- [ ] Update content via admin panel
- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Test Docker: `docker-compose up`
- [ ] Generate NEXTAUTH_SECRET: `openssl rand -base64 32`
- [ ] Setup MongoDB (Atlas or self-hosted)
- [ ] Configure environment variables

## 🔑 Environment Variables

```bash
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb://mongodb:27017/portfolio
NEXTAUTH_SECRET=your-random-secret-here
NEXTAUTH_URL=https://your-domain.com
```

## 🐳 Docker Deployment

### Quick Start (Development)
```bash
docker-compose up -d
docker-compose logs -f
```

### Production Deployment
```bash
# Set environment variables
export NEXTAUTH_SECRET=$(openssl rand -base64 32)
export NEXTAUTH_URL=https://your-domain.com

# Deploy with production compose
docker-compose -f docker-compose.prod.yml up -d

# Seed database
docker-compose -f docker-compose.prod.yml exec portfolio npm run seed

# View logs
docker-compose -f docker-compose.prod.yml logs -f
```

### Using Deployment Script
```bash
chmod +x deploy.sh

# Build and deploy
./deploy.sh all

# Individual commands
./deploy.sh build    # Build image
./deploy.sh deploy   # Deploy with compose
./deploy.sh seed     # Seed database
./deploy.sh logs     # View logs
```

## ☁️ Cloud Deployment

### AWS ECS with Terraform

```bash
cd terraform

# Initialize
terraform init

# Plan
terraform plan \
  -var="vpc_id=vpc-xxx" \
  -var="subnet_ids=[\"subnet-xxx\",\"subnet-yyy\"]" \
  -var="mongodb_uri=mongodb+srv://user:pass@cluster.mongodb.net/portfolio" \
  -var="nextauth_secret=$(openssl rand -base64 32)" \
  -var="nextauth_url=https://your-domain.com"

# Apply
terraform apply

# Get outputs
terraform output ecr_repository_url
terraform output load_balancer_dns
```

### AWS ECS Manual Deployment

```bash
# Login to ECR
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com

# Build and push
docker build -f Dockerfile.prod -t portfolio:latest .
docker tag portfolio:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
```

### AWS EC2

```bash
# SSH to EC2
ssh -i key.pem ec2-user@<ip>

# Install Docker and Docker Compose
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Clone repository
git clone <your-repo>
cd portfolio

# Set environment variables
export NEXTAUTH_SECRET=$(openssl rand -base64 32)
export NEXTAUTH_URL=http://<ec2-public-ip>

# Deploy
docker-compose -f docker-compose.prod.yml up -d
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

### Google Cloud Run (from Git Repository)

**See [GCP-DEPLOYMENT.md](GCP-DEPLOYMENT.md) for detailed guide**

```bash
# Quick deployment from current directory
gcloud run deploy portfolio \
  --source=. \
  --region=us-central1 \
  --allow-unauthenticated \
  --set-env-vars="MONGODB_URI=xxx,NEXTAUTH_SECRET=xxx,NEXTAUTH_URL=xxx"

# Or use automated script
chmod +x deploy-gcp.sh
./deploy-gcp.sh

# Deploy from GitHub directly
gcloud run deploy portfolio \
  --source=https://github.com/YOUR_USERNAME/YOUR_REPO \
  --region=us-central1 \
  --allow-unauthenticated
```

### Kubernetes

```bash
# Update k8s-deployment.yaml with your values

# Apply
kubectl apply -f k8s-deployment.yaml

# Check status
kubectl get pods -n portfolio
kubectl get svc -n portfolio

# Get external IP
kubectl get ingress -n portfolio
```

### Vercel (with MongoDB Atlas)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# MONGODB_URI, NEXTAUTH_SECRET, NEXTAUTH_URL

# Production
vercel --prod
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

### GitHub Actions

The `.github/workflows/deploy.yml` file is already configured.

**Setup:**
1. Add secrets in GitHub repository settings:
   - `SERVER_HOST` - Your server IP
   - `SERVER_USER` - SSH username
   - `SSH_PRIVATE_KEY` - SSH private key

2. Push to main branch to trigger deployment

### Manual CI/CD
```bash
# Build
docker build -f Dockerfile.prod -t portfolio:latest .

# Tag
docker tag portfolio:latest <registry>/portfolio:latest

# Push
docker push <registry>/portfolio:latest

# Deploy on server
ssh user@server 'cd /opt/portfolio && docker-compose -f docker-compose.prod.yml pull && docker-compose -f docker-compose.prod.yml up -d'
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
