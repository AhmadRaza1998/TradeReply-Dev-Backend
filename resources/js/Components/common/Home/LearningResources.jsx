import { Container } from "react-bootstrap";
import NavLink from "@/Components/UI/NavLink";
import CommonHeading from "@/Components/UI/CommonHeading";
import "../../../../css/Home/LearningResources.scss";

const LearningResources = () => {
  return (
    <>
      <section className="learning_resources">
        <Container>
          <div className="learning_resources_heading">
            <CommonHeading heading="Learning Resources" />
            <p>
              Explore our Comprehensive industry definitions and guides to
              enhance your trading knowledge.
            </p>
          </div>
          <div className="learning_resources_content">
            <div className="learning_resources_content_col">
              <NavLink
                href="/education"
                className="learning_resources_content_card"
              >
                <img src="images/education_img.jpg" alt="img" />
                <h3>Education</h3>
              </NavLink>
            </div>
            <div className="learning_resources_content_col">
              <NavLink href="/blog" className="learning_resources_content_card">
                <img src="/images/education_img2.jpg" alt="img" />
                <h3>Blog</h3>
              </NavLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LearningResources;
