import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');
  
  const { data: profile, mutate: mutateProfile } = useSWR('/api/profile', fetcher);
  const { data: projects, mutate: mutateProjects } = useSWR('/api/projects', fetcher);
  const { data: experiences, mutate: mutateExperiences } = useSWR('/api/experiences', fetcher);

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login');
  }, [status, router]);

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) return null;

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    mutateProfile();
    alert('Profile updated successfully');
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    mutateProjects();
    e.target.reset();
    alert('Project added successfully');
  };

  const handleExperienceSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    await fetch('/api/experiences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    mutateExperiences();
    e.target.reset();
    alert('Experience added successfully');
  };

  const deleteProject = async (id) => {
    if (!confirm('Delete this project?')) return;
    await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
    mutateProjects();
  };

  const deleteExperience = async (id) => {
    if (!confirm('Delete this experience?')) return;
    await fetch(`/api/experiences?id=${id}`, { method: 'DELETE' });
    mutateExperiences();
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <h2>Admin Panel</h2>
        <div className="nav-links">
          <a href="/" target="_blank">View Site</a>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      </nav>

      <div className="dashboard-content">
        <aside className="sidebar">
          <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
            Profile
          </button>
          <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>
            Projects
          </button>
          <button className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>
            Experience
          </button>
        </aside>

        <main className="main-content">
          {activeTab === 'profile' && (
            <div className="section">
              <h2>Profile Settings</h2>
              <form onSubmit={handleProfileUpdate}>
                <input name="name" placeholder="Full Name" defaultValue={profile?.name} required />
                <input name="title" placeholder="Job Title" defaultValue={profile?.title} required />
                <input name="email" type="email" placeholder="Email" defaultValue={profile?.email} required />
                <input name="phone" placeholder="Phone" defaultValue={profile?.phone} required />
                <input name="location" placeholder="Location" defaultValue={profile?.location} required />
                <input name="experience" placeholder="Years of Experience" defaultValue={profile?.experience} required />
                <textarea name="about" placeholder="About" defaultValue={profile?.about} rows="4" required />
                <button type="submit">Update Profile</button>
              </form>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="section">
              <h2>Add New Project</h2>
              <form onSubmit={handleProjectSubmit}>
                <input name="title" placeholder="Project Title" required />
                <input name="client" placeholder="Client" required />
                <input name="duration" placeholder="Duration" required />
                <input name="tools" placeholder="Tools (comma separated)" required />
                <textarea name="description" placeholder="Description" rows="3" required />
                <input name="image" placeholder="Image URL" required />
                <input name="link" placeholder="Project Link" />
                <input name="order" type="number" placeholder="Display Order" defaultValue="0" />
                <button type="submit">Add Project</button>
              </form>

              <h2>Existing Projects</h2>
              <div className="items-list">
                {projects?.map((project) => (
                  <div key={project._id} className="item-card">
                    <h3>{project.title}</h3>
                    <p>{project.client}</p>
                    <button onClick={() => deleteProject(project._id)} className="delete-btn">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="section">
              <h2>Add New Experience</h2>
              <form onSubmit={handleExperienceSubmit}>
                <input name="title" placeholder="Job Title" required />
                <input name="company" placeholder="Company" required />
                <input name="period" placeholder="Period (e.g., Jan 2020 - Dec 2022)" required />
                <input name="type" placeholder="Type (experience/education)" defaultValue="experience" required />
                <textarea name="description" placeholder="Description" rows="3" />
                <input name="order" type="number" placeholder="Display Order" defaultValue="0" />
                <button type="submit">Add Experience</button>
              </form>

              <h2>Existing Experiences</h2>
              <div className="items-list">
                {experiences?.map((exp) => (
                  <div key={exp._id} className="item-card">
                    <h3>{exp.title}</h3>
                    <p>{exp.company} - {exp.period}</p>
                    <button onClick={() => deleteExperience(exp._id)} className="delete-btn">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      <style jsx>{`
        .admin-dashboard {
          min-height: 100vh;
          background: #f5f7fa;
        }
        .admin-nav {
          background: white;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .admin-nav h2 {
          margin: 0;
          color: #667eea;
        }
        .nav-links {
          display: flex;
          gap: 15px;
        }
        .nav-links a, .nav-links button {
          padding: 8px 20px;
          border-radius: 6px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
        }
        .nav-links a {
          background: #667eea;
          color: white;
        }
        .nav-links button {
          background: #e74c3c;
          color: white;
        }
        .dashboard-content {
          display: flex;
          min-height: calc(100vh - 80px);
        }
        .sidebar {
          width: 250px;
          background: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .sidebar button {
          padding: 12px 20px;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.3s;
        }
        .sidebar button:hover {
          background: #f0f0f0;
        }
        .sidebar button.active {
          background: #667eea;
          color: white;
        }
        .main-content {
          flex: 1;
          padding: 40px;
        }
        .section {
          background: white;
          padding: 30px;
          border-radius: 12px;
          margin-bottom: 30px;
        }
        .section h2 {
          margin: 0 0 20px;
          color: #333;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          max-width: 600px;
        }
        input, textarea {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
        }
        button[type="submit"] {
          padding: 12px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
        }
        button[type="submit"]:hover {
          background: #5568d3;
        }
        .items-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .item-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }
        .item-card h3 {
          margin: 0 0 10px;
          font-size: 16px;
        }
        .item-card p {
          margin: 0 0 15px;
          font-size: 14px;
          color: #666;
        }
        .delete-btn {
          padding: 8px 16px;
          background: #e74c3c;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
