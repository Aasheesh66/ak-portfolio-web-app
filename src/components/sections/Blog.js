import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Blogs
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="https://www.clouddevopshub.com/blog/the-ultimate-guide-to-devsecops-strengthening-security-in-your-devops-pipeline" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/devsecop.webp" alt="" />
              </span>
              <div className="content">
                <span className="category">DevSecOps</span>
                <span className="title">
                 The Ultimate Guide to DevSecOps: Strengthening Security in Your DevOps Pipeline
                </span>
                <p>
                 DevSecOps stands for Development, Security, and Operations. It is the practice of integrating ...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>9 Apr 2025</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>17 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="https://www.clouddevopshub.com/blog/ultimate-guide-to-docker-images" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/docker2.png" alt="" />
              </span>
              <div className="content">
                <span className="category">devops</span>
                <span className="title">
                 The Ultimate Guide to Docker Images: Creation, Containers, Advantages, Disadvantages, and Real-Time Use Cases
                </span>
                <p>
                  A Docker image is a file used to execute code in a Docker container. Docker images act as a set of instructions...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>7 Apr 2025</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>34 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="https://www.clouddevopshub.com/blog/infrastructure-as-code-iac-aws-cdk-vs-terraform-which-one-is-right-for-you" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/AWS.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">Devops</span>
                <span className="title">
                 AWS Cloud Development Kit (CDK) vs. Terraform
                </span>
                <p>
                  Infrastructure as Code (IaC) has transformed the way we manage cloud resources by automating provisioning...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>10 Apr 2025</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>10 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
