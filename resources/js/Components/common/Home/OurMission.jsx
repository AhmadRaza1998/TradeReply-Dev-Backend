import { Container } from "react-bootstrap";
import CommonHeading from "@/Components/UI/CommonHeading";
import "../../../../css/Home/OurMission.scss";

const OurMission = () => {
  return (
    <>
      <section className="our_mission">
        <Container>
          <div className="our_mission_content">
            <CommonHeading heading="Our Mission" centered />
            <p>
              At TradeReply, our mission is to empower traders with personalized
              performance analytics to optimize their strategies. Our platform
              focuses on real-time KPIs, customizable dashboards, and
              interactive tools, prioritizing trader performance over market
              analyses. Join TradeReply to enhance your trading journey with
              tailored insights and cutting-edge analytics.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurMission;
