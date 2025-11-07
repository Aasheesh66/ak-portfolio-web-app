# 🚀 Deploy to Google Cloud Run - Quick Guide

## Prerequisites

1. Google Cloud account
2. gcloud CLI installed

## Step 1: Install gcloud CLI

**Windows:**
Download from: https://cloud.google.com/sdk/docs/install

**Linux/Mac:**
```bash
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

## Step 2: Initialize gcloud

```bash
# Login
gcloud auth login

# Set project (or create new)
gcloud config set project YOUR_PROJECT_ID

# Enable APIs
gcloud services enable run.googleapis.com cloudbuild.googleapis.com
```

## Step 3: Deploy

### Option A: Deploy from Local Directory (Recommended)

```bash
gcloud run deploy portfolio \
  --source=. \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated \
  --memory=512Mi \
  --cpu=1 \
  --port=3000
```

### Option B: Deploy from GitHub

```bash
gcloud run deploy portfolio \
  --source=https://github.com/YOUR_USERNAME/YOUR_REPO \
  --region=us-central1 \
  --allow-unauthenticated
```

### Option C: Using Cloud Build

```bash
gcloud builds submit --config=cloudbuild.yaml
```

## Step 4: Get Service URL

```bash
gcloud run services describe portfolio \
  --region=us-central1 \
  --format='value(status.url)'
```

## 🎉 Done!

Your portfolio is now live at: `https://portfolio-xxx.run.app`

## Common Commands

```bash
# View logs
gcloud run services logs tail portfolio --region=us-central1

# Update service
gcloud run deploy portfolio --source=. --region=us-central1

# Delete service
gcloud run services delete portfolio --region=us-central1

# List services
gcloud run services list
```

## Custom Domain

```bash
# Map domain
gcloud run domain-mappings create \
  --service=portfolio \
  --domain=your-domain.com \
  --region=us-central1
```

## Troubleshooting

**Build fails:**
```bash
gcloud builds list
gcloud builds log BUILD_ID
```

**Service not accessible:**
```bash
gcloud run services describe portfolio --region=us-central1
```

## Cost

**Free Tier:**
- 2 million requests/month
- 360,000 GB-seconds/month
- Your portfolio will stay FREE! 🎉

---

**Need help? Email: shrivastav.aasheesh88@gmail.com**
