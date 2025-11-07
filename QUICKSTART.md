# ⚡ Quick Start - Auto Deploy on Git Push

## 🎯 Goal
Setup automatic Cloud Run deployment that builds and deploys on every git push.

## 📋 Prerequisites
- Google Cloud account (free tier available)
- GitHub account
- Git installed

## 🚀 Setup (5 Minutes)

### Step 1: Push to GitHub

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Create GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Setup Cloud Run Auto-Deploy

1. Go to https://console.cloud.google.com/run
2. Click **"CREATE SERVICE"**
3. Select **"Continuously deploy from a repository"**
4. Click **"SET UP WITH CLOUD BUILD"**
5. Select **GitHub** and authenticate
6. Choose your repository
7. Branch: **main**
8. Build Type: **Dockerfile**
9. Service settings:
   - Region: **us-central1**
   - Memory: **512 MiB**
   - Port: **3000**
   - Allow unauthenticated: **Yes**
10. Click **"CREATE"**

### Step 3: Wait for First Build

Cloud Build will automatically:
1. Clone your repository
2. Build Docker image from Dockerfile
3. Deploy to Cloud Run
4. Create first revision

Check progress at: https://console.cloud.google.com/cloud-build/builds

### Step 4: Get Your URL

```bash
gcloud run services describe portfolio --region=us-central1 --format='value(status.url)'
```

Or find it in Cloud Run console.

## 🎉 Done!

Your portfolio is live! Now every time you push to GitHub, it automatically deploys.

## 🔄 Deploy Updates

```bash
# Make changes
echo "Updated" >> pages/index.js

# Push to GitHub
git add .
git commit -m "Update portfolio"
git push

# ✨ Automatically builds and deploys new revision!
```

## 📊 Monitor Deployments

```bash
# View builds
gcloud builds list

# View revisions
gcloud run revisions list --service=portfolio --region=us-central1

# View logs
gcloud run services logs read portfolio --region=us-central1
```

## 🔙 Rollback

```bash
# List revisions
gcloud run revisions list --service=portfolio --region=us-central1

# Rollback to previous revision
gcloud run services update-traffic portfolio \
  --to-revisions=REVISION_NAME=100 \
  --region=us-central1
```

## 🧪 Test Locally

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Or test with Docker
docker-compose up
```

## 💡 Tips

- Each git push creates a new revision
- Old revisions are kept for rollback
- Zero downtime deployments
- Automatic HTTPS
- Free tier covers most personal portfolios

## 🆘 Troubleshooting

**Build fails:**
```bash
gcloud builds log BUILD_ID
```

**Service not updating:**
- Check Cloud Build triggers: https://console.cloud.google.com/cloud-build/triggers
- Verify GitHub connection

**Port issues:**
- Ensure Dockerfile exposes port 3000
- Cloud Run service configured for port 3000

## 💰 Cost

**Free Tier:**
- 2 million requests/month
- 360,000 GB-seconds/month
- Your portfolio stays FREE! 🎉

---

**Need help? Email: shrivastav.aasheesh88@gmail.com**
