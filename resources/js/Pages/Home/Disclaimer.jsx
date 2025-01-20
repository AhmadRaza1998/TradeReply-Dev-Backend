import { Container } from "react-bootstrap";
import HomeLayout from "@/Layouts/HomeLayout";
import "../../../css/Home/PrivacyPolicy.scss";

const Disclaimer = () => {
  return (
    <HomeLayout>
      <div className="commonPolicy">
        <Container>
          <h1>Disclaimer: No Investment Advice</h1>
          <p>
            Trading in leveraged products involves significant risk, and you may
            lose more than your initial deposit. The opinions, discussions,
            messages, news, research, analyses, prices, and other information
            provided on this Website are intended solely for educational and
            entertainment purposes as general market information and portfolio
            analysis and do not constitute investment advice. This Website
            should not be a substitute for comprehensive independent market
            research prior to making trading decisions, and we do not recommend
            relying on portfolio analysis alone to make trading decisions. All
            opinions, market data, recommendations, website features, analytics
            measurements or other content may change without notice. TradeReply
            LLC. is not responsible for any loss or damage, including loss of
            profit, resulting from the use of or reliance on such information.
          </p>
          <p>
            Additionally, our Website may encounter issues that could affect the
            accuracy of reporting, such as malfunctioning widgets, incorrect
            metric calculations, faulty localization settings, data conversion
            issues, or data integrity loss during the import or trade-building
            processes. We advise against relying solely on technical and
            portfolio analysis for trading decisions and caution against making
            hasty trading decisions. Importantly, please consider that when
            doing analysis that past performance is not indicative of future
            performance.
          </p>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Disclaimer;
