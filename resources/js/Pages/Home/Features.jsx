import { Col, Container, Row } from "react-bootstrap";
import AnswerTrades from "@/Components/common/Home/AnswerTrades";
import Testimonials from "@/Components/common/Home/Testimonials";
import CommonButton from "@/Components/UI/CommonButton";
import { CheckIcon } from "@/Components/img/svgIcons/SvgIcon";
import useNavigate from "@/Hooks/useNavigate";
import HomeLayout from "@/Layouts/HomeLayout";
import "../../../css/Home/Features.scss";

const stockimg = "/images/tradereply-stock-analysis.png";
const logimg = "/images/tradereply-log-trades.png";
const whyimg = "/images/tradereply-70-percent-rule.png";
const buildimg = "/images/tradereply-trading-strategies.png";
const dashboardimg = "/images/tradereply-portfolio-analysis.png";

const Features = () => {
  const navigate = useNavigate();
  const listitem = [
    {
      features: [
        "On-the-Go Learning Support",
        "Multiple Trade Accounts",
        "Dynamic Dashboards",
        "Strategy Building",
        "Chart & KPI Widgets",
        "Advanced Filters",
        "Analytics Presets",
      ],
    },
    {
      features: [
        "Autosync Brokers",
        "CSV Trade Import",
        "Widget Customization",
        "Marketplace Access",
        "Upload Chart Images",
        "Heatmaps",
        "Trade Tagging",
      ],
    },
    {
      features: [
        "Advanced Dimensions",
        "Trade Calculators",
        "Intuitive Trade Building",
        "Accurate Dates & Times",
        "Fast Web Servers",
        "Social Networking",
        "Drill Down Metrics",
      ],
    },
  ];
  return (
    <HomeLayout>
      <div className="py-100 features">
        <Container>
          <div className="features_inner">
            <section className="text-center features_stock">
              <h1>
                Stock Trade Analy<span className="blue_text">sis</span>
              </h1>
              <div className="mt-5 pt-xl-4">
                <img src={stockimg} alt="TradeReply: Stock and Crypto Trading Analysis" />
              </div>
            </section>
            <section className="features_yourTrade py-100">
              <AnswerTrades />
            </section>
            <section className="text-center features_logSync">
              <div className="features_heading">
                <h2>Log & Sync Trades</h2>
                <h4 className="mt-4">
                  Effortlessly log and sync all your trades ensuring accurate
                  records and up-to-date performance metrics across all your
                  accounts.
                </h4>
              </div>
              <div className="mt-5 pt-xl-4">
                <img src={logimg} alt="Seamlessly log and sync trades for accurate records and real-time performance tracking across all accounts" />
              </div>
            </section>
            <section className="text-center features_whyUse py-100">
              <div className="features_heading">
                <h2>Why Use TradeReply?</h2>
                <h4 className="mt-4">
                  70% of traders who use data analytics are{" "}
                  <span className="green_text">successful</span> <br />
                  70% of traders who do NOT use data analytics{" "}
                  <span className="red_text">fail</span>
                </h4>
              </div>
              <div className="mt-5 pt-xl-4">
                <img src={whyimg} alt="70% of traders succeed with data analytics, while 70% of those without it fail—TradeReply empowers smarter trading decisions" />
              </div>
            </section>
            <section className="features_testimonial">
              <Testimonials />
              <div className="mt-0 text-center">
                <CommonButton
                  onClick={() => navigate("pricing")}
                  title="Optimize Trading"
                  className="px-xl-5"
                />
              </div>
            </section>
            <section className="text-center features_BuildTrade py-100">
              <div className="features_heading">
                <h2>Build Trading Strategies</h2>
                <h4 className="mt-4">
                  Create and optimize trading strategies using advanced tools
                  and historical data for effective, data-driven plans tailored
                  to your goals.
                </h4>
              </div>
              <div className="mt-5 pt-xl-4">
                <img src={buildimg} alt="Build and optimize trading strategies with advanced tools and historical data for data-driven success" />
              </div>
            </section>
            <section className="text-center features_Personalized py-100">
              <div className="features_heading">
                <h2>Personalized Dashboards</h2>
                <h4 className="mt-4">
                  Add KPI widgets, and filter by metrics, strategies, trades,
                  tickers, accounts, and more for customized trading dashboards.
                </h4>
              </div>
              <div className="mt-5 pt-xl-4">
                <img src={dashboardimg} alt="Customize trading dashboards with KPI widgets, filters for metrics, strategies, trades, tickers, and accounts" />
              </div>
            </section>
            <section className="features_transformsec">
              <Row>
                {listitem?.map((item, index) => {
                  return (
                    <Col md={4} xs={12} key={index}>
                      <ul>
                        {item?.features?.map((item) => {
                          return (
                            <li key={item}>
                              <CheckIcon /> {item}
                            </li>
                          );
                        })}
                      </ul>
                    </Col>
                  );
                })}
              </Row>
              <div className="features_heading mt-5 pt-xl-5 text-center">
                <h2>Ready to Transform Your Trading?</h2>
                <h4 className="mt-4">
                  Harness the power of advanced analytics and personalized
                  dashboards to revolutionize your trading experience.
                </h4>
                <div className="mt-4 mt-md-5">
                  <CommonButton
                    onClick={() => navigate("register")}
                    title="Join Free, Upgrade Anytime"
                    className="px-xl-5 green-btn"
                  />
                </div>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Features;
