# Aasheesh Kumar - Professional Portfolio with Admin Panel

[![Next.js](https://img.shields.io/badge/Next.js-13.1.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.3.0-green)](https://www.mongodb.com/)
[![NextAuth](https://img.shields.io/badge/NextAuth-4.24.5-purple)](https://next-auth.js.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](https://www.docker.com/)

> Production-ready portfolio website with full-featured admin panel for content management. Built for Senior Cloud Engineer with 6.6+ years of AWS experience.

## 🚀 Features

### Public Portfolio
- ✨ Modern sidebar navigation with profile section
- 🎨 Professional gradient color scheme (Purple to Blue)
- 📱 Fully responsive design (Desktop, Tablet, Mobile)
- 🎯 Smooth animations and transitions
- 📊 Dynamic portfolio showcase with project details
- 💼 Professional experience timeline
- 📧 Contact section with social links
- ⚡ Real-time content updates from database

### Admin Panel (NEW!)
- 🔐 Secure authentication with NextAuth.js
- 👤 Profile management (name, title, contact info, social links)
- 💼 Projects CRUD operations (Create, Read, Update, Delete)
- 📋 Experience/Education timeline management
- 🎯 Real-time preview of changes
- 📱 Responsive admin dashboard
- 🎨 Modern, professional UI design
- 🔄 Easy content management without code changes

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 13.1.5
- **UI Library:** React 18.2.0
- **Data Fetching:** SWR (React Hooks for Data Fetching)
- **Styling:** CSS-in-JS, Custom CSS with gradients
- **Icons:** Font Awesome, Devicon
- **Animations:** WOW.js, Swiper

### Backend
- **API:** Next.js API Routes
- **Database:** MongoDB 6.3.0
- **Authentication:** NextAuth.js 4.24.5
- **Password Hashing:** bcryptjs

### DevOps
- **Containerization:** Docker
- **Deployment:** Vercel, AWS, Azure, GCP compatible

## 📋 Prerequisites

- Node.js 18+ (for local development)
- MongoDB 6.0+ (local or MongoDB Atlas)
- Docker & Docker Compose (optional, for containerized deployment)
- npm or yarn

## 🏃 Quick Start

### ⚡ Fast Setup (5 Minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start MongoDB (Windows)
net start MongoDB

# 3. Seed database with sample data
npm run seed

# 4. Run development server
npm run dev

# 5. Access the application
# Public Portfolio: http://localhost:3000
# Admin Panel: http://localhost:3000/admin/login
# Default credentials: admin / admin123
```

**📚 For detailed setup instructions, see [QUICKSTART.md](QUICKSTART.md)**

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Access at http://localhost:3000
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

### 🔥 Easy Way: Use Admin Panel (Recommended)

1. Login to admin panel: `http://localhost:3000/admin/login`
2. Update profile, projects, and experiences through the UI
3. Changes reflect immediately on the public site
4. No code changes required!

### 🛠️ Advanced: Direct Code Editing

**Update Personal Information:**
- Use Admin Panel (recommended)
- Or edit MongoDB collections directly
- Or modify seed data in `scripts/seed-data.js`

**Change Color Scheme:**

Modify: `public/css/skins/professional-blue.css`

Admin Panel colors (in component styles):
- `#667eea` - Purple (Primary)
- `#764ba2` - Deep Purple (Secondary)
- Gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

**Update Profile Image:**

Replace: `public/assets/ak.jpeg` with your image

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

- ✅ Secure authentication with NextAuth.js
- ✅ Password hashing with bcryptjs
- ✅ Protected API routes
- ✅ Environment variables for secrets
- ✅ Non-root Docker user
- ✅ No sensitive data in code
- ✅ Production-ready build
- ⚠️ Change default admin credentials in production!

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
npm run seed     # Seed database with sample data
```

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Check if MongoDB is running
# Windows: sc query MongoDB
# Linux: sudo systemctl status mongod

# Start MongoDB
# Windows: net start MongoDB
# Linux: sudo systemctl start mongod
```

### Admin Login Not Working
```bash
# Re-run seed script
npm run seed

# Or create admin manually
curl -X POST http://localhost:3000/api/init-admin
```

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

## 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Fast setup guide (5 minutes)
- **[ADMIN-SETUP.md](ADMIN-SETUP.md)** - Detailed admin panel documentation
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Production deployment guide

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- NextAuth.js for authentication
- MongoDB for the database
- Font Awesome for icons
- Devicon for technology icons

---

**Built with ❤️ by Aasheesh Kumar | Senior Cloud Engineer**

**🎉 Now with full-featured Admin Panel for easy content management!**
