# 🔄 Development Workflow

## Daily Workflow

### 1. Make Changes Locally

```bash
# Edit files
code pages/index.js

# Test locally
npm run dev
# Visit http://localhost:3000
```

### 2. Test with Docker (Optional)

```bash
docker-compose up
# Visit http://localhost:3000
```

### 3. Commit and Push

```bash
git add .
git commit -m "Update: description of changes"
git push
```

### 4. Automatic Deployment

- Cloud Build automatically triggers
- Builds Docker image
- Deploys to Cloud Run
- Creates new revision
- Routes traffic to new revision

### 5. Verify Deployment

```bash
# Check build status
gcloud builds list --limit=1

# View new revision
gcloud run revisions list --service=portfolio --region=us-central1 --limit=1

# Get service URL
gcloud run services describe portfolio --region=us-central1 --format='value(status.url)'
```

## Deployment Flow

```
Local Changes
    ↓
git push
    ↓
GitHub Repository
    ↓
Cloud Build Trigger
    ↓
Build Docker Image (Dockerfile)
    ↓
Push to Container Registry
    ↓
Deploy to Cloud Run
    ↓
New Revision Created
    ↓
Traffic Routed to New Revision
    ↓
Live! 🎉
```

## Revision Management

### View All Revisions

```bash
gcloud run revisions list --service=portfolio --region=us-central1
```

### Rollback to Previous Revision

```bash
# Get revision name
gcloud run revisions list --service=portfolio --region=us-central1

# Route 100% traffic to specific revision
gcloud run services update-traffic portfolio \
  --to-revisions=portfolio-00001-abc=100 \
  --region=us-central1
```

### Split Traffic Between Revisions

```bash
# 50% to new, 50% to old (canary deployment)
gcloud run services update-traffic portfolio \
  --to-revisions=portfolio-00002-xyz=50,portfolio-00001-abc=50 \
  --region=us-central1
```

### Delete Old Revisions

```bash
gcloud run revisions delete portfolio-00001-abc --region=us-central1
```

## Monitoring

### View Logs

```bash
# Real-time logs
gcloud run services logs tail portfolio --region=us-central1

# Recent logs
gcloud run services logs read portfolio --region=us-central1 --limit=50
```

### View Metrics

```bash
# Service details
gcloud run services describe portfolio --region=us-central1

# Build history
gcloud builds list --limit=10
```

### Check Service Health

```bash
# Get service URL
SERVICE_URL=$(gcloud run services describe portfolio --region=us-central1 --format='value(status.url)')

# Test endpoint
curl $SERVICE_URL
```

## Best Practices

### Commit Messages

```bash
# Good commit messages
git commit -m "Add: new project to portfolio"
git commit -m "Update: contact information"
git commit -m "Fix: mobile responsive layout"
git commit -m "Improve: page load performance"
```

### Before Pushing

1. Test locally: `npm run dev`
2. Test Docker build: `docker build -t portfolio .`
3. Check for errors: `npm run lint`
4. Review changes: `git diff`

### After Deployment

1. Check build succeeded
2. Visit live URL
3. Test on mobile
4. Check browser console for errors

## Troubleshooting

### Build Fails

```bash
# View build logs
gcloud builds list --limit=1
gcloud builds log BUILD_ID

# Common issues:
# - Dockerfile syntax error
# - Missing dependencies in package.json
# - Build timeout (increase in cloudbuild.yaml)
```

### Deployment Fails

```bash
# Check service status
gcloud run services describe portfolio --region=us-central1

# View error logs
gcloud run services logs read portfolio --region=us-central1 --limit=100

# Common issues:
# - Port mismatch (ensure port 3000)
# - Memory limit exceeded
# - Container crashes on startup
```

### Rollback Needed

```bash
# Quick rollback to previous revision
gcloud run revisions list --service=portfolio --region=us-central1
gcloud run services update-traffic portfolio \
  --to-revisions=PREVIOUS_REVISION=100 \
  --region=us-central1
```

## Emergency Procedures

### Stop Receiving Traffic

```bash
# Route traffic to a stable revision
gcloud run services update-traffic portfolio \
  --to-revisions=STABLE_REVISION=100 \
  --region=us-central1
```

### Delete Service

```bash
gcloud run services delete portfolio --region=us-central1
```

### Redeploy from Scratch

```bash
# Delete service
gcloud run services delete portfolio --region=us-central1

# Trigger new deployment
git commit --allow-empty -m "Redeploy"
git push
```

## Tips

- **Small commits**: Push frequently with small changes
- **Test locally**: Always test before pushing
- **Monitor builds**: Watch first few deployments
- **Keep revisions**: Don't delete recent revisions
- **Use branches**: Test major changes in feature branches

---

**Happy Deploying! 🚀**
