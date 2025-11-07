# ☁️ Google Cloud Run - Auto Deploy on Git Push

## Complete Setup Guide for Continuous Deployment

### Step 1: Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Setup Cloud Run with GitHub Integration

#### Option A: Using Google Cloud Console (Easiest)

1. Go to https://console.cloud.google.com/run
2. Click **"CREATE SERVICE"**
3. Select **"Continuously deploy from a repository"**
4. Click **"SET UP WITH CLOUD BUILD"**
5. Select **"GitHub"** as source repository
6. Click **"Authenticate"** and connect your GitHub account
7. Select your repository
8. Select branch: **main**
9. Build Type: **Dockerfile**
10. Service settings:
    - Region: **us-central1**
    - CPU allocation: **CPU is only allocated during request processing**
    - Memory: **512 MiB**
    - Port: **3000**
    - Authentication: **Allow unauthenticated invocations**
11. Click **"CREATE"**

#### Option B: Using gcloud CLI

```bash
# 1. Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable sourcerepo.googleapis.com

# 2. Connect GitHub repository
gcloud alpha builds connections create github YOUR_CONNECTION_NAME \
  --region=us-central1

# 3. Link your repository
gcloud alpha builds repositories create YOUR_REPO_NAME \
  --remote-uri=https://github.com/YOUR_USERNAME/YOUR_REPO.git \
  --connection=YOUR_CONNECTION_NAME \
  --region=us-central1

# 4. Create Cloud Build trigger
gcloud builds triggers create github \
  --name=portfolio-trigger \
  --repository=projects/YOUR_PROJECT_ID/locations/us-central1/connections/YOUR_CONNECTION_NAME/repositories/YOUR_REPO_NAME \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml \
  --region=us-central1
```

### Step 3: Verify Setup

```bash
# Check triggers
gcloud builds triggers list

# View builds
gcloud builds list
```

## How It Works

1. **Push code to GitHub** → Triggers Cloud Build
2. **Cloud Build** → Builds Docker image from Dockerfile
3. **Cloud Run** → Deploys new revision automatically
4. **New URL** → Service is live with latest code

## Test Auto-Deploy

```bash
# Make a change
echo "# Updated" >> README.md

# Push to GitHub
git add .
git commit -m "Test auto-deploy"
git push

# Watch build progress
gcloud builds list --ongoing

# Check new revision
gcloud run revisions list --service=portfolio --region=us-central1
```

## View Service

```bash
# Get service URL
gcloud run services describe portfolio --region=us-central1 --format='value(status.url)'

# View all revisions
gcloud run revisions list --service=portfolio --region=us-central1

# View logs
gcloud run services logs read portfolio --region=us-central1
```

## Rollback to Previous Revision

```bash
# List revisions
gcloud run revisions list --service=portfolio --region=us-central1

# Route traffic to specific revision
gcloud run services update-traffic portfolio \
  --to-revisions=REVISION_NAME=100 \
  --region=us-central1
```

## Manage Revisions

```bash
# Delete old revisions
gcloud run revisions delete REVISION_NAME --region=us-central1

# Set max revisions to keep
gcloud run services update portfolio \
  --max-instances=10 \
  --region=us-central1
```

## Troubleshooting

### Build Fails
```bash
# View build logs
gcloud builds log BUILD_ID

# Check trigger
gcloud builds triggers describe portfolio-trigger --region=us-central1
```

### Service Not Updating
```bash
# Check latest build
gcloud builds list --limit=5

# Verify trigger is active
gcloud builds triggers list
```

### Manual Trigger Build
```bash
# Trigger build manually
gcloud builds triggers run portfolio-trigger --region=us-central1 --branch=main
```

## Cost

**Free Tier:**
- 2 million requests/month
- 360,000 GB-seconds/month
- 180,000 vCPU-seconds/month
- 1 GB network egress/month

**Your portfolio will stay FREE! 🎉**

---

**Need help? Email: shrivastav.aasheesh88@gmail.com**
