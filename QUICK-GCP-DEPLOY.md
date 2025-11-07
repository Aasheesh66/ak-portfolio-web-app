# ⚡ Quick Google Cloud Run Deployment (5 Minutes)

## Prerequisites
- Google Cloud account
- MongoDB Atlas account (free tier)
- gcloud CLI installed

## Step-by-Step Deployment

### 1. Setup MongoDB Atlas (2 minutes)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up / Login
3. Create FREE cluster
4. Create database user:
   - Username: `admin`
   - Password: (generate strong password)
5. Network Access → Add IP: `0.0.0.0/0` (allow all)
6. Copy connection string:
   ```
   mongodb+srv://admin:PASSWORD@cluster.mongodb.net/portfolio
   ```

### 2. Install gcloud CLI (if not installed)

**Windows:**
- Download: https://cloud.google.com/sdk/docs/install

**Linux/Mac:**
```bash
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

### 3. Initialize gcloud

```bash
# Login
gcloud auth login

# Create or select project
gcloud projects create portfolio-app-123 --name="Portfolio"
gcloud config set project portfolio-app-123

# Enable APIs
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

### 4. Deploy Application

**Option A: Using Automated Script (Easiest)**

```bash
# Make script executable
chmod +x deploy-gcp.sh

# Run deployment
./deploy-gcp.sh
```

**Option B: Manual Deployment**

```bash
# Deploy from current directory
gcloud run deploy portfolio \
  --source=. \
  --region=us-central1 \
  --allow-unauthenticated \
  --memory=512Mi \
  --port=3000 \
  --set-env-vars="NODE_ENV=production,MONGODB_URI=mongodb+srv://admin:PASSWORD@cluster.mongodb.net/portfolio,NEXTAUTH_SECRET=$(openssl rand -base64 32),NEXTAUTH_URL=https://portfolio-xxx.run.app"
```

**Option C: Deploy from GitHub**

```bash
gcloud run deploy portfolio \
  --source=https://github.com/YOUR_USERNAME/YOUR_REPO \
  --region=us-central1 \
  --allow-unauthenticated
```

### 5. Get Service URL

```bash
gcloud run services describe portfolio \
  --region=us-central1 \
  --format='value(status.url)'
```

### 6. Initialize Admin User

```bash
# Get your service URL
SERVICE_URL=$(gcloud run services describe portfolio --region=us-central1 --format='value(status.url)')

# Create admin user
curl -X POST $SERVICE_URL/api/init-admin
```

### 7. Access Your Portfolio

```
Public Site: https://portfolio-xxx.run.app
Admin Panel: https://portfolio-xxx.run.app/admin/login

Default Credentials:
Username: admin
Password: admin123
```

## 🎉 Done!

Your portfolio is now live on Google Cloud Run!

## Common Commands

```bash
# View logs
gcloud run services logs tail portfolio --region=us-central1

# Update environment variables
gcloud run services update portfolio \
  --region=us-central1 \
  --update-env-vars="KEY=VALUE"

# Redeploy
gcloud run deploy portfolio --source=. --region=us-central1

# Delete service
gcloud run services delete portfolio --region=us-central1
```

## Troubleshooting

**Build fails:**
```bash
gcloud builds list
gcloud builds log BUILD_ID
```

**Can't access service:**
```bash
gcloud run services describe portfolio --region=us-central1
```

**MongoDB connection error:**
- Check MongoDB Atlas IP whitelist
- Verify connection string
- Check username/password

## Cost

Google Cloud Run free tier includes:
- 2 million requests/month
- 360,000 GB-seconds/month
- 180,000 vCPU-seconds/month

Your portfolio will likely stay within free tier! 🎉

## Next Steps

1. ✅ Login to admin panel
2. ✅ Change default password
3. ✅ Update your profile
4. ✅ Add your projects
5. ✅ Setup custom domain (optional)

---

**Need help? Email: shrivastav.aasheesh88@gmail.com**
