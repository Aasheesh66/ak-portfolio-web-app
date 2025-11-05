const Home = () => {
  return (
    <section className="home image" id="home">
      <div className="home-content">
        <h1 className="home-title">Aasheesh Kumar</h1>
        <h2 className="home-subtitle">Senior Cloud Engineer</h2>
        <p className="home-description">
          Resilient Cloud Engineer with 6.6+ years of AWS Cloud experience. Specialized in EC2, VPC, IAM, CloudWatch, RDS, and cloud infrastructure optimization.
        </p>
        <div className="home-buttons">
          <a href="#about" className="custom-btn"><span>About Me</span></a>
          <a href="#contact" className="custom-btn custom-btn-outline"><span>Hire Me</span></a>
        </div>
      </div>
    </section>
  );
};
export default Home;
