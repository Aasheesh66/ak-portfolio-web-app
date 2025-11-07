# 🚀 Quick Start Guide - Portfolio with Admin Panel

## ⚡ Fast Setup (5 Minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start MongoDB
```bash
# Windows
net start MongoDB

# Linux/Mac
sudo systemctl start mongod

# Or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### Step 3: Seed Database
```bash
npm run seed
```

This will create:
- ✅ Admin user (username: `admin`, password: `admin123`)
- ✅ Sample profile data
- ✅ Sample projects
- ✅ Sample experiences

### Step 4: Start Development Server
```bash
npm run dev
```

### Step 5: Access the Application

**Public Portfolio:** http://localhost:3000

**Admin Panel:** http://localhost:3000/admin/login
- Username: `admin`
- Password: `admin123`

---

## 🎨 What's New?

### ✨ Admin Panel Features
- 🔐 Secure authentication with NextAuth.js
- 👤 Profile management (name, title, contact info)
- 💼 Projects CRUD operations
- 📋 Experience/Education timeline management
- 🎯 Real-time updates on frontend
- 📱 Responsive admin dashboard

### 🛠️ Technical Stack
- **Frontend:** Next.js 13, React 18, SWR
- **Backend:** Next.js API Routes
- **Database:** MongoDB
- **Authentication:** NextAuth.js
- **Styling:** CSS-in-JS, Professional gradients

### 🎨 Design Improvements
- Modern gradient color scheme (Purple to Blue)
- Clean, professional admin interface
- Smooth transitions and animations
- Mobile-responsive design
- Production-ready UI components

---

## 📁 New File Structure

```
portfolio/
├── lib/
│   └── mongodb.js              # Database connection
├── pages/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth].js  # Authentication
│   │   ├── profile.js          # Profile API
│   │   ├── projects.js         # Projects API
│   │   ├── experiences.js      # Experiences API
│   │   └── init-admin.js       # Admin initialization
│   └── admin/
│       ├── login.js            # Admin login page
│       └── dashboard.js        # Admin dashboard
├── scripts/
│   └── seed-data.js            # Database seeding
└── .env.local                  # Environment variables
```

---

## 🔧 Configuration

### Environment Variables (.env.local)
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
NEXTAUTH_SECRET=dev-secret-key-change-in-production
NEXTAUTH_URL=http://localhost:3000
```

### Change Admin Password
1. Login to admin panel
2. Go to MongoDB:
   ```bash
   mongosh
   use portfolio
   db.users.find()
   ```
3. Update password using bcrypt hash

---

## 📊 Admin Panel Usage

### Managing Profile
1. Login to admin panel
2. Click "Profile" in sidebar
3. Update fields
4. Click "Update Profile"
5. Changes reflect immediately on public site

### Managing Projects
1. Click "Projects" in sidebar
2. Fill project form
3. Add image URL and project link
4. Set display order (lower numbers appear first)
5. Click "Add Project"
6. Delete projects using "Delete" button

### Managing Experience
1. Click "Experience" in sidebar
2. Fill experience/education form
3. Set type: "experience" or "education"
4. Set display order
5. Click "Add Experience"

---

## 🚀 Production Deployment

### Option 1: Vercel + MongoDB Atlas (Recommended)

1. **Setup MongoDB Atlas**
   - Create account at https://mongodb.com/cloud/atlas
   - Create cluster (free tier available)
   - Get connection string

2. **Deploy to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

3. **Set Environment Variables**
   ```bash
   vercel env add MONGODB_URI
   vercel env add NEXTAUTH_SECRET
   vercel env add NEXTAUTH_URL
   ```

4. **Seed Production Database**
   - Update `scripts/seed-data.js` with Atlas URI
   - Run: `node scripts/seed-data.js`

### Option 2: Docker Deployment

```bash
# Build image
docker build -t portfolio-admin .

# Run with MongoDB
docker-compose up -d
```

---

## 🔒 Security Checklist

- [ ] Change default admin password
- [ ] Generate strong NEXTAUTH_SECRET: `openssl rand -base64 32`
- [ ] Use HTTPS in production
- [ ] Set proper CORS policies
- [ ] Enable MongoDB authentication
- [ ] Use environment variables for secrets
- [ ] Regular database backups

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Check MongoDB status
# Windows: sc query MongoDB
# Linux: sudo systemctl status mongod

# Restart MongoDB
# Windows: net stop MongoDB && net start MongoDB
# Linux: sudo systemctl restart mongod
```

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Admin Login Not Working
1. Verify MongoDB is running
2. Run seed script again: `npm run seed`
3. Check browser console for errors
4. Verify .env.local exists

---

## 📚 API Documentation

### Public Endpoints (No Auth Required)
- `GET /api/profile` - Get profile data
- `GET /api/projects` - Get all projects
- `GET /api/experiences` - Get all experiences

### Protected Endpoints (Auth Required)
- `PUT /api/profile` - Update profile
- `POST /api/projects` - Create project
- `PUT /api/projects` - Update project
- `DELETE /api/projects?id={id}` - Delete project
- `POST /api/experiences` - Create experience
- `PUT /api/experiences` - Update experience
- `DELETE /api/experiences?id={id}` - Delete experience

---

## 💡 Tips

1. **Images:** Store images in `/public/assets/` folder
2. **Order:** Lower order numbers appear first
3. **Backup:** Export MongoDB data regularly
4. **Testing:** Test on mobile devices
5. **Performance:** Optimize images before upload

---

## 📞 Support

**Developer:** Aasheesh Kumar
**Email:** shrivastav.aasheesh88@gmail.com
**Documentation:** See ADMIN-SETUP.md for detailed guide

---

**🎉 Your professional portfolio with admin panel is ready!**
