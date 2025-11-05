const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Aasheesh has excellent technical skills in AWS cloud services. His expertise in EC2, VPC, and Auto Scaling helped optimize our cloud infrastructure significantly. He's a reliable team player with strong problem-solving abilities."
              </span>
              <span className="person">Technical Manager</span>
              <span className="job">Pentagon Systems</span>
            </p>
            <img src="assets/testimonials/reddy.png" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Aasheesh demonstrated exceptional skills in cloud migration and AWS services management. His work on VPC setup and load balancing was outstanding. He consistently delivered quality results within deadlines."
              </span>
              <span className="person">Project Lead</span>
              <span className="job">Genpact India</span>
            </p>
            <img src="assets/testimonials/aman.png" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Aasheesh provided excellent technical support for our IT infrastructure. His knowledge of Active Directory, Azure AD, and system administration was invaluable. He's professional and always willing to help."
              </span>
              <span className="person">IT Manager</span>
              <span className="job">Wipro Ltd.</span>
            </p>
            <img src="assets/testimonials/dhar.png" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
