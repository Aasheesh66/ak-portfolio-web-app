const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Vikas</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://themeforest.net/user/Codeefly/portfolio"
          >
            CloudDevOpsHub
          </a>
        </span>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/clouddevopshub/">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/clouddevopshub/">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@CloudDevOpsHub">
              <i className="fa-brands fa-youtube" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/people/Clouddevopshub/100080218245041/">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
