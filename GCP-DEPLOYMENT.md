# 🚀 Google Cloud Run Deployment from Git Repository

## 📋 Prerequisites

1. Google Cloud account
2. MongoDB Atlas account (for database)
3. Git repository (GitHub, GitLab, or Bitbucket)
4. gcloud CLI installed

## 🔧 Setup Steps

### 1. Install gcloud CLI

**Windows:**
```bash
# Download from: https://cloud.google.com/sdk/docs/install
```

**Linux/Mac:**
```bash
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

### 2. Initialize gcloud

```bash
# Login
gcloud auth login

# Set project
gcloud config set project YOUR_PROJECT_ID

# Enable required APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

### 3. Setup MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Create database user
4. Whitelist all IPs: `0.0.0.0/0`
5. Get connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

### 4. Generate Secrets

```bash
# Generate NextAuth secret
openssl rand -base64 32
```

## 🚀 Deployment Methods

### Method 1: Direct from Git Repository (Recommended)

```bash
# Deploy directly from GitHub
gcloud run deploy portfolio \
  --source=https://github.com/YOUR_USERNAME/YOUR_REPO \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated \
  --memory=512Mi \
  --cpu=1 \
  --port=3000 \
  --set-env-vars="NODE_ENV=production,MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio,NEXTAUTH_SECRET=your-secret-here,NEXTAUTH_URL=https://portfolio-xxx.run.app"
```

### Method 2: Using Cloud Build from Git

```bash
# Connect repository
gcloud builds submit --config=cloudbuild.yaml

# Or submit from GitHub
gcloud builds submit \
  --config=cloudbuild.yaml \
  https://github.com/YOUR_USERNAME/YOUR_REPO
```

### Method 3: Local Build and Deploy

```bash
# Build locally
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/portfolio

# Deploy
gcloud run deploy portfolio \
  --image gcr.io/YOUR_PROJECT_ID/portfolio \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated \
  --memory=512Mi \
  --cpu=1 \
  --port=3000 \
  --set-env-vars="NODE_ENV=production,MONGODB_URI=YOUR_MONGODB_URI,NEXTAUTH_SECRET=YOUR_SECRET,NEXTAUTH_URL=https://portfolio-xxx.run.app"
```

## 🔐 Setting Environment Variables

### Option 1: During Deployment
```bash
gcloud run deploy portfolio \
  --set-env-vars="MONGODB_URI=xxx,NEXTAUTH_SECRET=xxx,NEXTAUTH_URL=xxx"
```

### Option 2: Update Existing Service
```bash
gcloud run services update portfolio \
  --region=us-central1 \
  --update-env-vars="MONGODB_URI=xxx,NEXTAUTH_SECRET=xxx,NEXTAUTH_URL=xxx"
```

### Option 3: Using Secrets Manager (Most Secure)

```bash
# Create secrets
echo -n "mongodb+srv://..." | gcloud secrets create mongodb-uri --data-file=-
echo -n "your-secret" | gcloud secrets create nextauth-secret --data-file=-

# Deploy with secrets
gcloud run deploy portfolio \
  --image gcr.io/YOUR_PROJECT_ID/portfolio \
  --region=us-central1 \
  --set-secrets="MONGODB_URI=mongodb-uri:latest,NEXTAUTH_SECRET=nextauth-secret:latest" \
  --set-env-vars="NEXTAUTH_URL=https://portfolio-xxx.run.app"
```

## 📝 Complete Deployment Script

Create `deploy-gcp.sh`:

```bash
#!/bin/bash

# Configuration
PROJECT_ID="your-project-id"
SERVICE_NAME="portfolio"
REGION="us-central1"
MONGODB_URI="mongodb+srv://user:pass@cluster.mongodb.net/portfolio"
NEXTAUTH_SECRET=$(openssl rand -base64 32)

# Set project
gcloud config set project $PROJECT_ID

# Get service URL (if exists)
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format='value(status.url)' 2>/dev/null)

# If service doesn't exist, use placeholder
if [ -z "$SERVICE_URL" ]; then
  SERVICE_URL="https://$SERVICE_NAME-xxx.run.app"
fi

# Deploy
gcloud run deploy $SERVICE_NAME \
  --source=. \
  --region=$REGION \
  --platform=managed \
  --allow-unauthenticated \
  --memory=512Mi \
  --cpu=1 \
  --port=3000 \
  --min-instances=0 \
  --max-instances=10 \
  --set-env-vars="NODE_ENV=production,MONGODB_URI=$MONGODB_URI,NEXTAUTH_SECRET=$NEXTAUTH_SECRET,NEXTAUTH_URL=$SERVICE_URL"

# Get final URL
FINAL_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format='value(status.url)')

echo "✅ Deployment complete!"
echo "🌐 Service URL: $FINAL_URL"
echo "🔐 Admin Panel: $FINAL_URL/admin/login"
echo ""
echo "⚠️  Update NEXTAUTH_URL if needed:"
echo "gcloud run services update $SERVICE_NAME --region=$REGION --update-env-vars=NEXTAUTH_URL=$FINAL_URL"
```

Make executable and run:
```bash
chmod +x deploy-gcp.sh
./deploy-gcp.sh
```

## 🌐 Custom Domain Setup

```bash
# Map custom domain
gcloud run domain-mappings create \
  --service=portfolio \
  --domain=your-domain.com \
  --region=us-central1

# Get DNS records to configure
gcloud run domain-mappings describe \
  --domain=your-domain.com \
  --region=us-central1
```

## 🔄 Update Deployment

```bash
# Redeploy from source
gcloud run deploy portfolio \
  --source=. \
  --region=us-central1

# Or trigger from git
gcloud builds submit --config=cloudbuild.yaml
```

## 📊 Monitoring and Logs

```bash
# View logs
gcloud run services logs read portfolio --region=us-central1

# Follow logs
gcloud run services logs tail portfolio --region=us-central1

# View service details
gcloud run services describe portfolio --region=us-central1
```

## 🗄️ Seed Database

After deployment, seed the database:

```bash
# Get service URL
SERVICE_URL=$(gcloud run services describe portfolio --region=us-central1 --format='value(status.url)')

# Call init-admin endpoint
curl -X POST $SERVICE_URL/api/init-admin

# Or use Cloud Shell
gcloud run services proxy portfolio --region=us-central1 &
curl -X POST http://localhost:8080/api/init-admin
```

## 💰 Cost Optimization

```bash
# Set minimum instances to 0 (scale to zero)
gcloud run services update portfolio \
  --region=us-central1 \
  --min-instances=0

# Set maximum instances
gcloud run services update portfolio \
  --region=us-central1 \
  --max-instances=5

# Set CPU allocation (only during requests)
gcloud run services update portfolio \
  --region=us-central1 \
  --cpu-throttling
```

## 🔒 Security Best Practices

1. **Use Secret Manager for sensitive data**
2. **Enable authentication if needed**
3. **Use custom domain with SSL**
4. **Whitelist MongoDB Atlas IPs**
5. **Regular security updates**

## 🆘 Troubleshooting

### Build Fails
```bash
# Check build logs
gcloud builds list
gcloud builds log BUILD_ID
```

### Service Not Accessible
```bash
# Check service status
gcloud run services describe portfolio --region=us-central1

# Check IAM permissions
gcloud run services get-iam-policy portfolio --region=us-central1
```

### MongoDB Connection Issues
```bash
# Test connection
gcloud run services proxy portfolio --region=us-central1 &
curl http://localhost:8080/api/profile
```

### Environment Variables Not Set
```bash
# List current env vars
gcloud run services describe portfolio --region=us-central1 --format='value(spec.template.spec.containers[0].env)'

# Update env vars
gcloud run services update portfolio \
  --region=us-central1 \
  --update-env-vars="KEY=VALUE"
```

## 📋 Quick Reference

```bash
# Deploy from current directory
gcloud run deploy portfolio --source=. --region=us-central1

# Deploy from GitHub
gcloud run deploy portfolio --source=https://github.com/user/repo --region=us-central1

# Update environment variables
gcloud run services update portfolio --update-env-vars="KEY=VALUE" --region=us-central1

# View logs
gcloud run services logs tail portfolio --region=us-central1

# Delete service
gcloud run services delete portfolio --region=us-central1
```

## 📞 Support

- Email: shrivastav.aasheesh88@gmail.com
- GCP Documentation: https://cloud.google.com/run/docs

---

**🎉 Your portfolio is now live on Google Cloud Run!**
