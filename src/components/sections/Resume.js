const Resume = () => {
  return (
    <section className="resume-section main-section flex-column-mobile" id="resume">
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Resume
            </span>
          </span>
        </h3>
      </div>

      <div className="resume-content">
        {/* EDUCATION */}
        <div className="resume-block">
          <h3 className="resume-block-title">
            <i className="fa fa-graduation-cap" /> Education
          </h3>
          <div className="resume-items">
            <div className="resume-item">
              <h4>Master of Computer Applications (M.C.A)</h4>
              <p className="resume-date"><i className="fa fa-calendar" /> 2017</p>
              <p className="resume-institution">Dr. A.K.T. University, Lucknow</p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Computer Applications (B.C.A)</h4>
              <p className="resume-date"><i className="fa fa-calendar" /> 2014</p>
              <p className="resume-institution">M.J.P.R University, Bareilly</p>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="resume-block">
          <h3 className="resume-block-title">
            <i className="fa fa-certificate" /> Certifications
          </h3>
          <div className="resume-items">
            <div className="resume-item">
              <h4>AWS Certified SysOps Administrator - Associate</h4>
              <p className="cert-id">ID: KKZ91CYK8E1E1DSL</p>
            </div>
            <div className="resume-item">
              <h4>AWS Certified Solutions Architect - Associate</h4>
              <p className="cert-id">ID: ZHQSB6S20MQ4QL37</p>
            </div>
            <div className="resume-item">
              <h4>AWS Certified Cloud Practitioner</h4>
              <p className="cert-id">ID: L697ER91YJVQQ6KD</p>
            </div>
            <div className="resume-item">
              <h4>Microsoft Certified: Azure Administrator Associate</h4>
              <p className="cert-id">ID: EB1840-28B02A</p>
            </div>
            <div className="resume-item">
              <h4>Microsoft Certified: Azure Fundamentals</h4>
              <p className="cert-id">ID: F6E79X-D5D16F</p>
            </div>
          </div>
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="resume-block full-width">
          <h3 className="resume-block-title">
            <i className="fa fa-code" /> Technical Skills
          </h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Cloud Platforms</h4>
              <ul>
                <li>AWS (EC2, S3, VPC, IAM, RDS, Lambda)</li>
                <li>Microsoft Azure</li>
                <li>CloudWatch, CloudTrail, CloudFront</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Operating Systems</h4>
              <ul>
                <li>Windows Server (2016, 2019, 2022)</li>
                <li>Linux (Ubuntu, CentOS, Kali)</li>
                <li>Windows 7/8/10/11</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools & Technologies</h4>
              <ul>
                <li>Docker, Kubernetes</li>
                <li>Jenkins, Terraform, Ansible</li>
                <li>Apache, LAMP Stack</li>
                <li>Shell Scripting, Python</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Databases & Services</h4>
              <ul>
                <li>MySQL, SQL Server, RDS</li>
                <li>Active Directory, Azure AD</li>
                <li>DNS, DHCP, ADFS, GPO</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img alt="" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};
export default Resume;
