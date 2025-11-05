const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-section">
          <img src="assets/ak.jpeg" alt="Aasheesh Kumar" className="profile-img" />
          <h2 className="profile-name">Aasheesh Kumar</h2>
          <p className="profile-subtitle">Senior Cloud Engineer</p>
          <div className="social-links">
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter" /></a>
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook" /></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
            <a href="#" aria-label="Skype"><i className="fa-brands fa-skype" /></a>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></a>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#home"><i className="fa fa-home" /> Home</a></li>
            <li><a href="#about"><i className="fa fa-user" /> About</a></li>
            <li><a href="#portfolio"><i className="fa fa-file-text" /> Resume</a></li>
            <li><a href="#portfolio"><i className="fa fa-briefcase" /> Portfolio</a></li>
            <li><a href="#contact"><i className="fa fa-server" /> Services</a></li>
            <li><a href="#contact"><i className="fa fa-envelope" /> Contact</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
