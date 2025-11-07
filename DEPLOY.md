# 🚀 Deploy to Google Cloud Run from GitHub

## Quick Deploy (2 Minutes)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy from GitHub

```bash
# Login to gcloud
gcloud auth login

# Set project
gcloud config set project YOUR_PROJECT_ID

# Enable APIs
gcloud services enable run.googleapis.com cloudbuild.googleapis.com

# Deploy directly from GitHub
gcloud run deploy portfolio \
  --source=https://github.com/YOUR_USERNAME/YOUR_REPO \
  --region=us-central1 \
  --allow-unauthenticated \
  --memory=512Mi \
  --port=3000
```

### Step 3: Get URL

```bash
gcloud run services describe portfolio --region=us-central1 --format='value(status.url)'
```

## 🎉 Done!

Your portfolio is live at: `https://portfolio-xxx.run.app`

## Update Deployment

```bash
# After pushing changes to GitHub
gcloud run deploy portfolio \
  --source=https://github.com/YOUR_USERNAME/YOUR_REPO \
  --region=us-central1
```

## Alternative: Using Cloud Console

1. Go to https://console.cloud.google.com/run
2. Click "CREATE SERVICE"
3. Select "Continuously deploy from a repository"
4. Connect your GitHub repository
5. Select branch: `main`
6. Build type: Dockerfile
7. Click "CREATE"

## Automatic Deployments

Set up Cloud Build trigger for automatic deployments on git push:

```bash
gcloud builds triggers create github \
  --repo-name=YOUR_REPO \
  --repo-owner=YOUR_USERNAME \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml
```

Now every push to `main` branch will automatically deploy!

---

**Need help? Email: shrivastav.aasheesh88@gmail.com**
