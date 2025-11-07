# Admin Panel Setup Guide

## Prerequisites

1. **MongoDB Installation**
   - Download and install MongoDB from: https://www.mongodb.com/try/download/community
   - Start MongoDB service:
     ```bash
     # Windows
     net start MongoDB
     
     # Linux/Mac
     sudo systemctl start mongod
     ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

## Initial Setup

### Step 1: Configure Environment Variables

The `.env.local` file has been created with default values. Update if needed:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
NEXTAUTH_SECRET=your-secret-key-change-in-production
NEXTAUTH_URL=http://localhost:3000
```

### Step 2: Create Admin User

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Create admin user by visiting:
   ```
   http://localhost:3000/api/init-admin
   ```
   
   Or use curl:
   ```bash
   curl -X POST http://localhost:3000/api/init-admin
   ```

   **Default Credentials:**
   - Username: `admin`
   - Password: `admin123`

   ⚠️ **IMPORTANT**: Change these credentials in production!

### Step 3: Access Admin Panel

1. Navigate to: `http://localhost:3000/admin/login`
2. Login with the credentials above
3. You'll be redirected to the dashboard

## Admin Panel Features

### 1. Profile Management
- Update personal information
- Edit contact details
- Manage social media links
- Update about section

### 2. Projects Management
- Add new projects
- Edit existing projects
- Delete projects
- Reorder projects (using order field)
- Add project images and links

### 3. Experience Management
- Add work experience
- Add education
- Edit timeline items
- Delete entries
- Reorder timeline (using order field)

## API Endpoints

### Authentication
- `POST /api/auth/signin` - Login
- `POST /api/auth/signout` - Logout
- `POST /api/init-admin` - Create initial admin user

### Profile
- `GET /api/profile` - Get profile data
- `PUT /api/profile` - Update profile (requires auth)

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project (requires auth)
- `PUT /api/projects` - Update project (requires auth)
- `DELETE /api/projects?id={id}` - Delete project (requires auth)

### Experiences
- `GET /api/experiences` - Get all experiences
- `POST /api/experiences` - Create experience (requires auth)
- `PUT /api/experiences` - Update experience (requires auth)
- `DELETE /api/experiences?id={id}` - Delete experience (requires auth)

## Security Best Practices

1. **Change Default Credentials**
   - Immediately change admin password after first login
   - Use strong passwords (min 12 characters)

2. **Environment Variables**
   - Never commit `.env.local` to version control
   - Use strong random strings for `NEXTAUTH_SECRET`
   - Generate secret: `openssl rand -base64 32`

3. **Production Deployment**
   - Use environment variables in your hosting platform
   - Enable HTTPS
   - Set `NEXTAUTH_URL` to your production domain
   - Use MongoDB Atlas or managed database service

## Database Schema

### Users Collection
```javascript
{
  username: String,
  password: String (hashed),
  email: String,
  createdAt: Date
}
```

### Profile Collection
```javascript
{
  name: String,
  title: String,
  email: String,
  phone: String,
  location: String,
  experience: String,
  about: String,
  skills: Array,
  social: {
    twitter: String,
    facebook: String,
    instagram: String,
    linkedin: String,
    skype: String
  },
  updatedAt: Date
}
```

### Projects Collection
```javascript
{
  title: String,
  client: String,
  duration: String,
  tools: String,
  description: String,
  image: String,
  link: String,
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Experiences Collection
```javascript
{
  title: String,
  company: String,
  period: String,
  type: String, // 'experience' or 'education'
  description: String,
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
# Windows
sc query MongoDB

# Linux/Mac
sudo systemctl status mongod
```

### Port Already in Use
```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Clear Database (Development Only)
```javascript
// Connect to MongoDB shell
mongosh

// Switch to portfolio database
use portfolio

// Drop all collections
db.users.drop()
db.profile.drop()
db.projects.drop()
db.experiences.drop()
```

## Production Deployment

### Using MongoDB Atlas

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in production environment

### Using Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add MONGODB_URI
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL
```

### Using Docker

```bash
# Build image
docker build -t portfolio-admin .

# Run with environment variables
docker run -p 3000:3000 \
  -e MONGODB_URI=your_mongodb_uri \
  -e NEXTAUTH_SECRET=your_secret \
  -e NEXTAUTH_URL=your_url \
  portfolio-admin
```

## Support

For issues or questions:
- Email: shrivastav.aasheesh88@gmail.com
- Check MongoDB logs: `/var/log/mongodb/mongod.log`
- Check Next.js logs in terminal

---

**Built with ❤️ by Aasheesh Kumar**
