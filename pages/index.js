import Head from 'next/head';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
  const skills = ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Python', 'Linux', 'CI/CD', 'Azure', 'GCP'];
  
  const projects = [
    {
      title: 'AWS Infrastructure Management',
      description: 'Managing AWS cloud environments with EC2, VPC, ELB, Auto Scaling, RDS, and CloudWatch',
      tech: ['AWS', 'EC2', 'VPC', 'CloudWatch'],
      link: '#'
    },
    {
      title: 'Cloud Migration & Optimization',
      description: 'Built and operated AWS Cloud environments with VPC, Subnets, Security Groups, Load Balancing',
      tech: ['AWS', 'VPC', 'ELB', 'Route53'],
      link: '#'
    },
    {
      title: 'DevOps Pipeline Implementation',
      description: 'Implemented CI/CD pipelines using Jenkins, Docker, and Kubernetes for automated deployments',
      tech: ['Jenkins', 'Docker', 'Kubernetes', 'Git'],
      link: '#'
    }
  ];

  const experience = [
    {
      title: 'Senior Cloud Engineer',
      company: 'Pentagon System & Services Pvt. Ltd.',
      period: 'May 2023 - Present',
      description: 'Leading cloud infrastructure projects and DevOps implementations'
    },
    {
      title: 'Cloud Engineer',
      company: 'Genpact India Pvt. Ltd.',
      period: 'Jan 2021 - Dec 2022',
      description: 'Managed AWS cloud environments and automation'
    },
    {
      title: 'Cloud Support Engineer',
      company: 'Mahindra Finance Pvt. Ltd.',
      period: 'Oct 2019 - Dec 2020',
      description: 'Provided cloud infrastructure support and maintenance'
    }
  ];

  return (
    <>
      <Head>
        <title>Aasheesh Kumar - Senior Cloud Engineer</title>
        <meta name="description" content="Senior Cloud Engineer with 6.6+ years of experience in AWS, DevOps, and Cloud Infrastructure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="name">Aasheesh Kumar</h1>
            <h2 className="title">Senior Cloud Engineer</h2>
            <p className="subtitle">6.6+ Years of Experience in AWS, DevOps & Cloud Infrastructure</p>
            
            <div className="contact-info">
              <a href="mailto:shrivastav.aasheesh88@gmail.com" className="contact-item">
                <FaEnvelope /> shrivastav.aasheesh88@gmail.com
              </a>
              <a href="tel:+918218615729" className="contact-item">
                <FaPhone /> +91-8218615729
              </a>
              <span className="contact-item">
                <FaMapMarkerAlt /> Gurgaon, India
              </span>
            </div>

            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Experienced Cloud Engineer specializing in AWS, Azure, and GCP with expertise in DevOps, CI/CD, 
            and Infrastructure as Code. Proven track record of designing and implementing scalable cloud 
            solutions, automating infrastructure, and optimizing cloud costs. Passionate about leveraging 
            cutting-edge technologies to solve complex problems.
          </p>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag">{skill}</div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-period">{exp.period}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 Aasheesh Kumar. All rights reserved.</p>
        </footer>
      </main>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          color: #333;
        }

        .hero {
          text-align: center;
          padding: 60px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 20px;
          margin-bottom: 60px;
        }

        .hero-content {
          padding: 40px 20px;
        }

        .name {
          font-size: 3.5rem;
          font-weight: 700;
          margin: 0 0 10px;
        }

        .title {
          font-size: 1.8rem;
          font-weight: 400;
          margin: 0 0 10px;
          opacity: 0.95;
        }

        .subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
          margin: 0 0 30px;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin: 30px 0;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
        }

        .contact-item:hover {
          opacity: 0.8;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }

        .social-links a {
          color: white;
          font-size: 1.8rem;
          transition: transform 0.3s;
        }

        .social-links a:hover {
          transform: scale(1.2);
        }

        .section {
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 30px;
          color: #667eea;
          position: relative;
          padding-bottom: 15px;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .skill-tag {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .timeline {
          position: relative;
          padding-left: 30px;
          border-left: 3px solid #667eea;
        }

        .timeline-item {
          margin-bottom: 40px;
          position: relative;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -36px;
          top: 0;
          width: 12px;
          height: 12px;
          background: #667eea;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px #667eea;
        }

        .timeline-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 5px;
          color: #333;
        }

        .timeline-company {
          font-size: 1.05rem;
          color: #667eea;
          margin: 0 0 5px;
          font-weight: 500;
        }

        .timeline-period {
          font-size: 0.9rem;
          color: #888;
          margin: 0 0 10px;
        }

        .timeline-description {
          color: #666;
          line-height: 1.6;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: white;
          border: 2px solid #f0f0f0;
          border-radius: 15px;
          padding: 30px;
          transition: all 0.3s;
        }

        .project-card:hover {
          border-color: #667eea;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
          transform: translateY(-5px);
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 15px;
          color: #333;
        }

        .project-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-tag {
          background: #f0f0f0;
          color: #667eea;
          padding: 6px 14px;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .footer {
          text-align: center;
          padding: 40px 0;
          color: #888;
          border-top: 1px solid #e0e0e0;
          margin-top: 60px;
        }

        @media (max-width: 768px) {
          .name {
            font-size: 2.5rem;
          }

          .title {
            font-size: 1.4rem;
          }

          .contact-info {
            flex-direction: column;
            gap: 15px;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
