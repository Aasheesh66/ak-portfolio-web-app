const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-section">
          <img src="assets/vk.png" alt="Aasheesh Kumar" className="profile-img" />
          <h2 className="profile-name">Aasheesh Kumar</h2>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></a>
            <a href="#" aria-label="GitHub"><i className="fa-brands fa-github" /></a>
            <a href="mailto:shrivastav.aasheesh88@gmail.com" aria-label="Email"><i className="fa-brands fa-google" /></a>
            <a href="https://api.whatsapp.com/send/?phone=918218615729" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" /></a>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#home" className="active"><i className="fa fa-home" /> Home</a></li>
            <li><a href="#about"><i className="fa fa-user" /> About</a></li>
            <li><a href="#portfolio"><i className="fa fa-briefcase" /> Portfolio</a></li>
            <li><a href="#contact"><i className="fa fa-envelope" /> Contact</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
