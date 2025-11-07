# 🚀 Manual Deployment Guide

## Deploy to Google Cloud Run from GitHub (No CI/CD)

### Prerequisites
- Google Cloud account
- gcloud CLI installed
- GitHub repository

### Step 1: Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Setup Google Cloud

```bash
# Login
gcloud auth login

# Set project
gcloud config set project YOUR_PROJECT_ID

# Enable APIs
gcloud services enable run.googleapis.com cloudbuild.googleapis.com
```

### Step 3: Deploy from GitHub

```bash
gcloud run deploy portfolio \
  --source=https://github.com/YOUR_USERNAME/YOUR_REPO \
  --region=us-central1 \
  --allow-unauthenticated \
  --memory=512Mi \
  --port=3000
```

### Step 4: Get URL

```bash
gcloud run services describe portfolio --region=us-central1 --format='value(status.url)'
```

## Update Deployment

After pushing changes to GitHub:

```bash
gcloud run deploy portfolio \
  --source=https://github.com/YOUR_USERNAME/YOUR_REPO \
  --region=us-central1
```

## Local Docker Testing

```bash
# Build
docker build -t portfolio .

# Run
docker run -p 3000:3000 portfolio

# Test at http://localhost:3000
```

## Deploy to Other Platforms

### Docker Hub + Any Server

```bash
# Build and push
docker build -t YOUR_USERNAME/portfolio .
docker login
docker push YOUR_USERNAME/portfolio

# On server
docker pull YOUR_USERNAME/portfolio
docker run -d -p 80:3000 --restart unless-stopped YOUR_USERNAME/portfolio
```

### AWS ECS

```bash
# Build and push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com
docker build -t portfolio .
docker tag portfolio:latest ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
docker push ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
```

### Azure Container Instances

```bash
az container create \
  --resource-group portfolio-rg \
  --name portfolio \
  --image YOUR_USERNAME/portfolio \
  --dns-name-label portfolio \
  --ports 3000
```

---

**Need help? Email: shrivastav.aasheesh88@gmail.com**
