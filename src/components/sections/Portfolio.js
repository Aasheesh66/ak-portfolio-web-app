import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Projects
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
  className="img-fluid"
  src="assets/portfolio/micro.jpg"
  alt="External Project"
  style={{
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    borderRadius: "12px", // optional, for rounded corners
    display: "block",
    objectFit: "contain", // ensures the whole image fits without cropping
}}
/>

          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>AWS Infrastructure Management</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Managing AWS cloud environments with EC2, VPC, ELB, Auto Scaling</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Pentagon Systems</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>Ongoing</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Tools :
                  </span>
                  <span>AWS EC2, VPC, ELB, Auto Scaling, RDS, CloudWatch, IAM</span>
                </li>
              </ul>
            </div>
            <a href="https://github.com/GoogleCloudPlatform/microservices-demo" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
        <iframe
  className="youtube-video"
  src="https://www.youtube.com/embed/NhLA7xD3fwI"
  allowFullScreen
  style={{
    width: "100%",
    height: "400px", // You can adjust this to "300px", "500px", etc.
    border: "none",
    borderRadius: "12px", // Optional: for rounded corners
    display: "block",
    maxWidth: "100%",
    objectFit: "contain",
  }}
/>


            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>AWS Backup & Security Implementation</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Implemented AWS Backup service with vault, backup plans<br></br>and policies for EC2 and other services</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Pentagon Systems</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>6 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Tools :
                  </span>
                  <span>AWS Backup, GuardDuty, CloudTrail, WAF, SNS, SES</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
           <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
  className="img-fluid"
  src="assets/portfolio/awsservices.jpg"
  alt="External Project"
  style={{
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    borderRadius: "12px", // optional, for rounded corners
    display: "block",
    objectFit: "contain", // ensures the whole image fits without cropping
}}
/>

            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Cloud Migration & Optimization</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Built and operated AWS Cloud environments with<br></br>VPC, Subnets, Security Groups, Load Balancing</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Genpact India</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>2 years</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Tools :
                  </span>
                  <span>AWS VPC, EC2, S3, Route53, CloudWatch, ELB</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
  className="img-fluid"
  src="assets/portfolio/devsecops2 (2).png"
  alt="External Project"
  style={{
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    borderRadius: "12px", // optional, for rounded corners
    display: "block",
    objectFit: "contain", // ensures the whole image fits without cropping
}}
/>

            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>IT Infrastructure & Support</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Provided support for 1000+ computer systems including<br></br>Desktop, Laptops, Network Printers, and AD management</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Wipro Ltd.</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 year</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Tools :
                  </span>
                  <span>Active Directory, DNS, DHCP, Azure AD, OKTA, Intune</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
