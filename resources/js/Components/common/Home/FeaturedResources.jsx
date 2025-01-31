import { Col, Container, Row } from "react-bootstrap";
import CommonHeading from "@/Components/UI/CommonHeading";
import CommonButton from "@/Components/UI/CommonButton";
import NavLink from "@/Components/UI/NavLink";

const FeaturedResources = () => {
  return (
    <>
      <section className="featured_resources py-100">
        <Container>
          <div className="featured_resources_heading">
            <CommonHeading heading="Featured Resources" centered />
          </div>
          <Row className="align-items-center gx-xl-5">
            <Col lg={6} sm={12}>
              <div className="featured_resources_content">
                <h3>Profit Deviation</h3>
                <p>
                  Profit deviation measures the variability or dispersion of
                  profit from the expected or average profit. It helps traders
                  understand the consistency and reliability of their trading
                  strategies by showing...
                </p>
                <CommonButton
                  title="Link to Full Content"
                  className="green-btn"
                />
              </div>
            </Col>
            <Col lg={6} sm={12} className="text-center mt-5 mt-lg-0">
              <div className="featured_resources_img">
                <img src="/images/tradereply-for-crypto-traders.png" alt="TradeReply analytics suite: Optimize your trading with real-time insights" />
              </div>
            </Col>
          </Row>
          <div className="mt-4 mt-md-5 pt-md-3 pt-xl-5 text-center">
            <NavLink href="/education" className="btn-style ">
              {" "}
              Explore Resources
            </NavLink>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FeaturedResources;
