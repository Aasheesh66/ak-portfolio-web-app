# 🐳 Docker Production Deployment Guide

## 📋 Overview

This guide covers production-ready Docker deployment with MongoDB, Nginx reverse proxy, and cloud deployment options.

## 🏗️ Architecture

```
Internet → Nginx (Port 80/443) → Portfolio App (Port 3000) → MongoDB (Port 27017)
```

## 🚀 Quick Production Deployment

### 1. Set Environment Variables

```bash
export NEXTAUTH_SECRET=$(openssl rand -base64 32)
export NEXTAUTH_URL=https://your-domain.com
export MONGO_ROOT_USER=admin
export MONGO_ROOT_PASSWORD=$(openssl rand -base64 16)
```

### 2. Deploy with Docker Compose

```bash
# Production deployment
docker-compose -f docker-compose.prod.yml up -d

# Check status
docker-compose -f docker-compose.prod.yml ps

# View logs
docker-compose -f docker-compose.prod.yml logs -f
```

### 3. Seed Database

```bash
docker-compose -f docker-compose.prod.yml exec portfolio npm run seed
```

### 4. Access Application

- **Application:** http://localhost (via Nginx)
- **Direct:** http://localhost:3000
- **Admin:** http://localhost/admin/login

## 📦 Docker Files Explained

### Dockerfile (Development)
- Multi-stage build
- Optimized for development
- Hot reload support

### Dockerfile.prod (Production)
- Optimized production build
- Security hardened
- Health checks included
- Minimal image size

### docker-compose.yml (Development)
- MongoDB + App
- Development environment
- Volume mounts for hot reload

### docker-compose.prod.yml (Production)
- MongoDB + App + Nginx
- Production environment
- Health checks
- Restart policies
- Persistent volumes

## 🔧 Configuration

### MongoDB Configuration

**With Authentication:**
```yaml
environment:
  - MONGO_INITDB_ROOT_USERNAME=admin
  - MONGO_INITDB_ROOT_PASSWORD=secure_password
  - MONGODB_URI=mongodb://admin:secure_password@mongodb:27017/portfolio?authSource=admin
```

**Without Authentication (Development):**
```yaml
environment:
  - MONGODB_URI=mongodb://mongodb:27017/portfolio
```

### Nginx Configuration

Edit `nginx.conf` for custom settings:
- SSL/TLS certificates
- Custom domain
- Rate limiting
- Caching

## 🌐 Cloud Deployment

### AWS EC2

```bash
# 1. Launch EC2 instance (Ubuntu 22.04)
# 2. SSH to instance
ssh -i key.pem ubuntu@<ec2-ip>

# 3. Install Docker
sudo apt update
sudo apt install docker.io docker-compose -y
sudo systemctl start docker
sudo usermod -aG docker ubuntu

# 4. Clone repository
git clone <your-repo>
cd portfolio

# 5. Set environment variables
export NEXTAUTH_SECRET=$(openssl rand -base64 32)
export NEXTAUTH_URL=http://<ec2-public-ip>

# 6. Deploy
docker-compose -f docker-compose.prod.yml up -d

# 7. Seed database
docker-compose -f docker-compose.prod.yml exec portfolio npm run seed
```

### AWS ECS Fargate

```bash
# 1. Build and push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com

docker build -f Dockerfile.prod -t portfolio:latest .
docker tag portfolio:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest

# 2. Use Terraform
cd terraform
terraform init
terraform apply
```

### Azure Container Instances

```bash
# 1. Login
az login

# 2. Create resource group
az group create --name portfolio-rg --location eastus

# 3. Create container registry
az acr create --resource-group portfolio-rg --name portfolioregistry --sku Basic

# 4. Build and push
az acr build --registry portfolioregistry --image portfolio:latest -f Dockerfile.prod .

# 5. Deploy
az container create \
  --resource-group portfolio-rg \
  --name portfolio-app \
  --image portfolioregistry.azurecr.io/portfolio:latest \
  --dns-name-label portfolio-app \
  --ports 3000 \
  --environment-variables \
    NODE_ENV=production \
    MONGODB_URI=<uri> \
    NEXTAUTH_SECRET=<secret> \
    NEXTAUTH_URL=<url>
```

### Google Cloud Run

```bash
# 1. Build and push
gcloud builds submit --tag gcr.io/<project-id>/portfolio -f Dockerfile.prod

# 2. Deploy
gcloud run deploy portfolio \
  --image gcr.io/<project-id>/portfolio \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars MONGODB_URI=<uri>,NEXTAUTH_SECRET=<secret>,NEXTAUTH_URL=<url> \
  --memory 512Mi \
  --cpu 1
```

### DigitalOcean Droplet

```bash
# 1. Create droplet (Docker marketplace image)
# 2. SSH to droplet
ssh root@<droplet-ip>

# 3. Clone and deploy
git clone <your-repo>
cd portfolio
export NEXTAUTH_SECRET=$(openssl rand -base64 32)
export NEXTAUTH_URL=http://<droplet-ip>
docker-compose -f docker-compose.prod.yml up -d
```

## 🔒 Security Best Practices

### 1. Use Strong Secrets
```bash
# Generate strong secrets
openssl rand -base64 32
```

### 2. Enable MongoDB Authentication
```yaml
environment:
  - MONGO_INITDB_ROOT_USERNAME=admin
  - MONGO_INITDB_ROOT_PASSWORD=<strong-password>
```

### 3. Use SSL/TLS with Nginx
```nginx
server {
    listen 443 ssl;
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
}
```

### 4. Limit Container Resources
```yaml
deploy:
  resources:
    limits:
      cpus: '1'
      memory: 512M
```

### 5. Use Non-Root User
Already configured in Dockerfile.prod

## 📊 Monitoring

### Container Stats
```bash
docker stats
```

### Application Logs
```bash
docker-compose -f docker-compose.prod.yml logs -f portfolio
```

### MongoDB Logs
```bash
docker-compose -f docker-compose.prod.yml logs -f mongodb
```

### Health Checks
```bash
# Check app health
curl http://localhost:3000

# Check via Nginx
curl http://localhost
```

## 🔄 Updates and Maintenance

### Update Application
```bash
# Pull latest code
git pull

# Rebuild and restart
docker-compose -f docker-compose.prod.yml up -d --build

# Or use deployment script
./deploy.sh all
```

### Backup MongoDB
```bash
# Backup
docker-compose -f docker-compose.prod.yml exec mongodb mongodump --out /data/backup

# Copy to host
docker cp portfolio-mongodb-prod:/data/backup ./backup

# Restore
docker-compose -f docker-compose.prod.yml exec mongodb mongorestore /data/backup
```

### Scale Application
```bash
# Scale to 3 instances
docker-compose -f docker-compose.prod.yml up -d --scale portfolio=3
```

## 🆘 Troubleshooting

### Container Won't Start
```bash
# Check logs
docker-compose -f docker-compose.prod.yml logs portfolio

# Check container status
docker-compose -f docker-compose.prod.yml ps
```

### MongoDB Connection Issues
```bash
# Test connection
docker-compose -f docker-compose.prod.yml exec portfolio node -e "const {MongoClient}=require('mongodb');new MongoClient(process.env.MONGODB_URI).connect().then(()=>console.log('Connected')).catch(e=>console.error(e))"
```

### Port Already in Use
```bash
# Find process
netstat -ano | findstr :3000

# Kill process
taskkill /PID <PID> /F
```

### Out of Disk Space
```bash
# Clean up
docker system prune -a --volumes

# Remove unused images
docker image prune -a
```

## 📈 Performance Optimization

### 1. Enable Caching in Nginx
```nginx
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m;
proxy_cache my_cache;
```

### 2. Use Production Build
Already configured in Dockerfile.prod

### 3. Optimize MongoDB
```javascript
// Create indexes
db.projects.createIndex({ order: 1 })
db.experiences.createIndex({ order: 1 })
```

## 📞 Support

For deployment issues:
- Email: shrivastav.aasheesh88@gmail.com
- Check logs: `docker-compose logs`
- Review documentation: README.md, DEPLOYMENT.md

---

**🎉 Your portfolio is now production-ready and deployed!**
