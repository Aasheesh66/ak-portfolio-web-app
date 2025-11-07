# Aasheesh Kumar - Professional Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-13.1.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](https://www.docker.com/)
[![Cloud Run](https://img.shields.io/badge/Cloud%20Run-Ready-4285F4)](https://cloud.google.com/run)

> Modern, clean single-page portfolio with automatic Cloud Run deployment on git push

## ✨ Features

- 🎨 Modern, clean design
- 📱 Fully responsive
- ⚡ Fast and lightweight
- 🐳 Dockerized
- ☁️ Auto-deploy on git push
- 🔄 Revision management

## 🚀 Quick Deploy to Cloud Run

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Setup Auto-Deploy (One-Time)

**Using Google Cloud Console (Recommended):**

1. Go to https://console.cloud.google.com/run
2. Click **CREATE SERVICE**
3. Select **"Continuously deploy from a repository"**
4. Click **SET UP WITH CLOUD BUILD**
5. Connect your **GitHub** account
6. Select your repository and branch: **main**
7. Build Type: **Dockerfile**
8. Region: **us-central1**
9. Memory: **512 MiB**
10. Port: **3000**
11. Authentication: **Allow unauthenticated**
12. Click **CREATE**

### Step 3: Deploy (Automatic)

```bash
# Make changes to your code
# Then push to GitHub

git add .
git commit -m "Update portfolio"
git push

# ✨ Cloud Run automatically builds and deploys new revision!
```

## 🔄 Manage Revisions

```bash
# View all revisions
gcloud run revisions list --service=portfolio --region=us-central1

# Rollback to previous revision
gcloud run services update-traffic portfolio \
  --to-revisions=REVISION_NAME=100 \
  --region=us-central1
```

## 🧪 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🐳 Test with Docker

```bash
# Using Docker Compose
docker-compose up -d

# Or using Docker
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🎨 Customization

Edit `pages/index.js` to update:
- Personal information
- Skills
- Experience
- Projects
- Social links

## 📁 Project Structure

```
portfolio/
├── pages/
│   ├── index.js          # Main page
│   └── _app.js           # App wrapper
├── styles/
│   └── globals.css       # Global styles
├── Dockerfile            # Docker configuration
├── cloudbuild.yaml       # Cloud Build config
└── docker-compose.yml    # Local development
```

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 📦 Docker Image: ~150MB
- 🚀 First Load: < 1s
- 📱 Mobile Optimized

## 💰 Cost

**Google Cloud Run Free Tier:**
- 2 million requests/month
- 360,000 GB-seconds/month
- **Your portfolio will stay FREE!** 🎉

## 📚 Documentation

- **CLOUD-RUN-SETUP.md** - Detailed setup guide
- **DOCKER.md** - Docker commands reference

## 📞 Contact

**Aasheesh Kumar**
- 📧 Email: shrivastav.aasheesh88@gmail.com
- 📱 Phone: +91-8218615729
- 📍 Location: Gurgaon, India

---

**Built with ❤️ by Aasheesh Kumar | Senior Cloud Engineer**

**🎉 Just push to GitHub and your portfolio automatically deploys!**
