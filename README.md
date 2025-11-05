# Aasheesh Kumar - Professional Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-13.1.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](https://www.docker.com/)

> Modern, responsive portfolio website for a Senior Cloud Engineer with 6.6+ years of AWS experience.

## 🚀 Features

- ✨ Modern sidebar navigation with profile section
- 🎨 Professional blue gradient color scheme
- 📱 Fully responsive design (Desktop, Tablet, Mobile)
- 🐳 Docker containerized for easy deployment
- ⚡ Optimized Next.js build with standalone output
- 🎯 Smooth animations and transitions
- 📊 Portfolio showcase with project details
- 💼 Professional experience timeline
- 📧 Contact section with social links

## 🛠️ Tech Stack

- **Framework:** Next.js 13.1.5
- **UI Library:** React 18.2.0
- **Styling:** Custom CSS with gradients
- **Icons:** Font Awesome, Devicon
- **Animations:** WOW.js, Swiper
- **Containerization:** Docker

## 📋 Prerequisites

- Node.js 18+ (for local development)
- Docker & Docker Compose (for containerized deployment)
- npm or yarn

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
# Build for production
npm run build

# Start production server
npm start
```

### Docker Deployment (Recommended)

```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop container
docker-compose down
```

### Manual Docker Build

```bash
# Build image
docker build -t aasheesh-portfolio .

# Run container
docker run -p 3000:3000 aasheesh-portfolio
```

## 📁 Project Structure

```
vikasCloud-portfolio/
├── pages/                  # Next.js pages
│   ├── index.js           # Main page
│   ├── _app.js            # App wrapper
│   └── _document.js       # Document structure
├── src/
│   ├── components/        # React components
│   │   ├── Sidebar.js     # Fixed sidebar navigation
│   │   ├── Header.js      # Top header
│   │   └── sections/      # Page sections
│   └── SalimovHead.js     # Head component
├── public/
│   ├── assets/            # Images and media
│   └── css/               # Stylesheets
│       ├── style.css      # Main styles
│       ├── sidebar.css    # Sidebar styles
│       └── skins/         # Color themes
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose config
└── next.config.js         # Next.js configuration
```

## 🎨 Customization

### Update Personal Information

Edit the following files:
- `src/components/sections/Home.js` - Name and title
- `src/components/sections/About.js` - Personal details, experience
- `src/components/sections/Contact.js` - Contact information
- `src/components/Sidebar.js` - Profile image and social links

### Change Color Scheme

Modify: `public/css/skins/professional-blue.css`

Primary colors:
- `#0EA5E9` - Sky Blue (Primary)
- `#3B82F6` - Bright Blue (Secondary)
- `#06B6D4` - Cyan (Accent)

### Update Profile Image

Replace: `public/assets/vk.png` with your image

## 🌐 Deployment Options

### AWS ECS
```bash
# Push to ECR
docker tag aasheesh-portfolio:latest <account-id>.dkr.ecr.<region>.amazonaws.com/aasheesh-portfolio
docker push <account-id>.dkr.ecr.<region>.amazonaws.com/aasheesh-portfolio
```

### Azure Container Instances
```bash
docker tag aasheesh-portfolio <registry>.azurecr.io/aasheesh-portfolio
docker push <registry>.azurecr.io/aasheesh-portfolio
```

### Google Cloud Run
```bash
docker tag aasheesh-portfolio gcr.io/<project-id>/aasheesh-portfolio
docker push gcr.io/<project-id>/aasheesh-portfolio
```

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 📦 Docker Image Size: ~50MB (Alpine-based)
- 🚀 First Load: < 2s
- 📱 Mobile Optimized

## 🔒 Security

- ✅ Non-root Docker user
- ✅ No sensitive data in code
- ✅ Environment variables support
- ✅ Production-ready build

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### Port already in use
```bash
# Change port in docker-compose.yml
ports:
  - "3001:3000"
```

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

## 📞 Contact

**Aasheesh Kumar**
- 📧 Email: shrivastav.aasheesh88@gmail.com
- 📱 Phone: +91-8218615729
- 📍 Location: Gurgaon, India - 122001

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Font Awesome for icons
- Devicon for technology icons

---

**Built with ❤️ by Aasheesh Kumar | Senior Cloud Engineer**
