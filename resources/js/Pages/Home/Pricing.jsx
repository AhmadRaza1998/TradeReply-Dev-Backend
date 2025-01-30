import { Col, Container, Row } from "react-bootstrap";
import CommonButton from "@/Components/UI/CommonButton";
import { Link } from "@inertiajs/react";
import { CheckIcon, RedCrossIcon } from "@/Components/img/svgIcons/SvgIcon";
import useNavigate from "@/Hooks/useNavigate";
import Switch from "@/Components/UI/Switch";
import FaqCard from "@/Components/common/Home/FaqCard";
import HomeLayout from "@/Layouts/HomeLayout";
import "../../../css/Home/Pricing.scss";

const Pricing = () => {
  const navigate = useNavigate();
  const priceTabel = [
    {
      title: "Essential",
      price: "12.95",
      priceyear: "155.40",
      discount: "Savings: $24 annually",
      features: [
        "No ads",
        "2 Trade Accounts",
        "5 Dashboards",
        "5 Strategy Builds",
        "10 KPI Widget Types",
        "5 Widget Filters",
        "5 Dashboard Presets",
        "Sync Brokers",
        "CSV Trade Import",
        "Widget Customization",
        "Marketplace Access",
        "Upload Chart Images",
        "Heatmaps",
        "Advanced Dimensions",
        "Market Seller Priviliges",
        "Custom KPI Strategies",
      ],
    },
    {
      title: "Plus",
      price: "24.95",
      priceyear: "299.40",
      discount: "Savings: $60 annually",
      features: [
        "No ads",
        "2 Trade Accounts",
        "5 Dashboards",
        "5 Strategy Builds",
        "10 KPI Widget Types",
        "5 Widget Filters",
        "5 Dashboard Presets",
        "Sync Brokers",
        "CSV Trade Import",
        "Widget Customization",
        "Marketplace Access",
        "Upload Chart Images",
        "Heatmaps",
        "Advanced Dimensions",
        "Market Seller Priviliges",
        "Custom KPI Strategies",
      ],
    },
    {
      title: "Premium",
      price: "39.95",
      priceyear: "479.40",
      discount: "Savings: $120 annually",
      features: [
        "No ads",
        "2 Trade Accounts",
        "5 Dashboards",
        "5 Strategy Builds",
        "10 KPI Widget Types",
        "5 Widget Filters",
        "5 Dashboard Presets",
        "Sync Brokers",
        "CSV Trade Import",
        "Widget Customization",
        "Marketplace Access",
        "Upload Chart Images",
        "Heatmaps",
        "Advanced Dimensions",
        "Market Seller Priviliges",
        "Custom KPI Strategies",
      ],
    },
  ];
  return (
    <HomeLayout>
      <div className="pricing">
        <section className="pricing_banner">
          <Container>
            <Row className="gx-xl-5 align-items-center">
              <Col md={7} xs={12} xl={8}>
                <div className="pricing_banner_content">
                  <h1>Join Free, Upgrade Anytime</h1>
                  <p>
                    Enjoy powerful insights with our free analytics suite.
                    Upgrade anytime for additional premium features.
                  </p>
                </div>
              </Col>
              <Col md={5} xs={12} xl={4}>
                <div className="pricing_banner_forever">
                  <h3>$0 forever</h3>
                  <div>
                    <CommonButton
                      onClick={() => navigate("register")}
                      title="Join Free"
                      className="gradient-btn my-3 my-md-4"
                    />
                  </div>
                  <h4>No Credit Card Required</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pricing_table">
          <Container>
            <div className="pricing_table_switch d-flex align-items-center justify-content-center">
              <p>Monthly</p>
              <Switch />
              <p>Yearly</p>
            </div>
            <Row>
              {priceTabel.map((item, index) => {
                return (
                  <Col
                    lg={4}
                    xs={12}
                    key={index}
                    className="px-md-0 pricing_table_col"
                  >
                    <div className="pricing_table_box">
                      <div className="pricing_table_box_heading">
                        <h3>{item.title}</h3>
                        <h2>
                          ${item.price}
                          <span>/month</span>
                        </h2>
                        <p>
                          ${item.priceyear}
                          <span>/year</span>
                        </p>
                        <p>( {item.discount} )</p>
                        <CommonButton
                          onClick={() => navigate("register")}
                          title="Try Free for 30 Days"
                          className="green-btn free_for"
                        />
                        <p>
                          No Trial Needed? <Link href="register">Pay Now</Link>
                        </p>
                      </div>
                      <ul>
                        {item?.features?.map((item) => {
                          return (
                            <li key={item}>
                              <span>
                                {item === "Heatmaps" ||
                                item === "Advanced Dimensions" ||
                                item === "Market Seller Priviliges" ||
                                item === "Custom KPI Strategies" ? (
                                  <RedCrossIcon />
                                ) : (
                                  <CheckIcon />
                                )}
                              </span>
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
        <div className="py-100">
          <Container>
            <FaqCard />
          </Container>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Pricing;
