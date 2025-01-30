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
			  Success in trading isn’t random—it’s analyzed, refined, and earned.
			  At TradeReply, we empower you with deep trading analytics and real-time
			  insights to expose patterns, optimize strategies, and take control of
			  your performance.
			</p>
			<p>
			  With customizable dashboards, hundreds of data connections, and powerful
			  KPIs, you have everything you need to uncover what’s working, fix what’s
			  not, and trade with confidence.
			</p>
			<p>
			  Every trade tells a story. The best traders listen—TradeReply helps you respond.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurMission;
