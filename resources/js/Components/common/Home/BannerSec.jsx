import { Container } from "react-bootstrap";
import CommonSearch from "@/Components/UI/CommonSearch";
import "../../../../css/Home/BannerSec.scss";

const BannerSec = () => {
  return (
    <section className="banner_sec">
      <Container>
        <div className="banner_sec_content">
          <h1>Empowering Traders with Performance Analytics.</h1>
        </div>
      </Container>
      <div className="banner_sec_search">
        <CommonSearch
          label="Crypto & Stock Trading KPIs"
          placeholder="Explore Key Terms & Concepts"
          icon={true}
        />
      </div>
      <div className="banner_sec_overlayimg">
        <div>
          <img
            className="d-none d-md-block"
            src="/images/tradereply-optimize-trades.png"
            alt="TradeReply analytics suite: Optimize crypto and stock trading strategies with real-time insights and data-driven metrics."
            height={555}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSec;
