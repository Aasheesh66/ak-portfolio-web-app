# Aasheesh Kumar - Professional Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-13.1.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](https://www.docker.com/)

> Modern, clean single-page portfolio for Senior Cloud Engineer with 6.6+ years of AWS experience.

## ✨ Features

- 🎨 Modern, clean design inspired by professional portfolios
- 📱 Fully responsive (Desktop, Tablet, Mobile)
- ⚡ Fast and lightweight (No database required)
- 🐳 Docker ready
- ☁️ Google Cloud Run optimized
- 🚀 Easy to customize

## 🛠️ Tech Stack

- **Framework:** Next.js 13.1.5
- **UI Library:** React 18.2.0
- **Icons:** React Icons
- **Styling:** CSS-in-JS
- **Deployment:** Docker, Google Cloud Run

## 🏃 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build
npm run build

# Start
npm start
```

## 🐳 Docker Deployment

### Using Docker Compose (Easiest)

```bash
# Build and run
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

### Using Docker CLI

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -d -p 3000:3000 --name portfolio portfolio

# View logs
docker logs -f portfolio
```

Access at: http://localhost:3000

**See [DOCKER.md](DOCKER.md) for detailed Docker deployment guide**

## ☁️ Google Cloud Run Deployment from GitHub

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy from GitHub Repository

```bash
# Login and setup
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
gcloud services enable run.googleapis.com cloudbuild.googleapis.com

# Deploy directly from GitHub
gcloud run deploy portfolio \
  --source=https://github.com/YOUR_USERNAME/YOUR_REPO \
  --region=us-central1 \
  --allow-unauthenticated \
  --memory=512Mi \
  --port=3000
```

### Step 3: Setup Auto-Deploy (Optional)

```bash
# Create Cloud Build trigger for automatic deployments
gcloud builds triggers create github \
  --repo-name=YOUR_REPO \
  --repo-owner=YOUR_USERNAME \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml
```

Now every push to `main` branch automatically deploys!

**See [DEPLOY.md](DEPLOY.md) for detailed guide**

## 🎨 Customization

Edit `pages/index.js` to update:

- **Personal Information:** Name, title, contact details
- **Skills:** Add/remove skills in the skills array
- **Experience:** Update work history
- **Projects:** Add your projects
- **Social Links:** Update GitHub, LinkedIn, Twitter links

## 📁 Project Structure

```
portfolio/
├── pages/
│   ├── index.js          # Main page
│   └── _app.js           # App wrapper
├── styles/
│   └── globals.css       # Global styles
├── public/               # Static assets
├── Dockerfile            # Docker configuration
├── cloudbuild.yaml       # Cloud Build config
└── package.json          # Dependencies
```

## 🌐 Deployment Options

### Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### AWS ECS
```bash
docker build -t portfolio .
docker tag portfolio:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio
```

### Azure Container Instances
```bash
az container create \
  --resource-group portfolio-rg \
  --name portfolio \
  --image <registry>.azurecr.io/portfolio \
  --ports 3000
```

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 📦 Docker Image: ~150MB
- 🚀 First Load: < 1s
- 📱 Mobile Optimized

## 🔒 Security

- ✅ No database (static content)
- ✅ No authentication required
- ✅ Non-root Docker user
- ✅ Production-ready build

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 💰 Cost

**Google Cloud Run Free Tier:**
- 2 million requests/month
- 360,000 GB-seconds/month
- Your portfolio will likely stay FREE! 🎉

## 📞 Contact

**Aasheesh Kumar**
- 📧 Email: shrivastav.aasheesh88@gmail.com
- 📱 Phone: +91-8218615729
- 📍 Location: Gurgaon, India

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ by Aasheesh Kumar | Senior Cloud Engineer**
