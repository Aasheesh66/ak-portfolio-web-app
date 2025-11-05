const Services = () => {
  return (
    <section className="services main-section flex-column-mobile" id="services">
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Services
            </span>
          </span>
        </h3>
      </div>

      <div className="services-content">
        <div className="service-item animated-layer fade-in-up-animation fadeInUp wow">
          <div className="service-icon">
            <i className="devicon-amazonwebservices-original" />
          </div>
          <h4>AWS Cloud Solutions</h4>
          <p>Expert in EC2, VPC, S3, IAM, RDS, CloudWatch, Auto Scaling, and Load Balancing. Build and optimize AWS infrastructure for performance and cost.</p>
        </div>

        <div className="service-item animated-layer fade-in-up-animation fadeInUp wow">
          <div className="service-icon">
            <i className="fa fa-shield-alt" />
          </div>
          <h4>Cloud Security</h4>
          <p>Implementation of GuardDuty, WAF, CloudTrail, AWS Backup, and security best practices. IAM policies, security groups, and compliance management.</p>
        </div>

        <div className="service-item animated-layer fade-in-up-animation fadeInUp wow">
          <div className="service-icon">
            <i className="devicon-azure-plain" />
          </div>
          <h4>Azure Administration</h4>
          <p>Azure AD management, resource provisioning, Intune licensing, and hybrid cloud solutions. Microsoft certified Azure Administrator.</p>
        </div>

        <div className="service-item animated-layer fade-in-up-animation fadeInUp wow">
          <div className="service-icon">
            <i className="fa fa-network-wired" />
          </div>
          <h4>Network & Infrastructure</h4>
          <p>VPC design, subnets, routing tables, VPC peering, Transit Gateways. DNS, DHCP, Active Directory, and enterprise networking solutions.</p>
        </div>

        <div className="service-item animated-layer fade-in-up-animation fadeInUp wow">
          <div className="service-icon">
            <i className="devicon-docker-plain" />
          </div>
          <h4>DevOps & Automation</h4>
          <p>CI/CD pipelines, Docker containerization, Kubernetes orchestration, Infrastructure as Code with Terraform, and deployment automation.</p>
        </div>

        <div className="service-item animated-layer fade-in-up-animation fadeInUp wow">
          <div className="service-icon">
            <i className="fa fa-database" />
          </div>
          <h4>Database Management</h4>
          <p>RDS setup and optimization, MySQL, SQL Server administration, backup strategies, and database migration to cloud platforms.</p>
        </div>
      </div>
      <img alt="" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};
export default Services;
