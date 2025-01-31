import { Col, Container, Row } from "react-bootstrap";
import CommonHeading from "@/Components/UI/CommonHeading";
import {
  DashboardIcon,
  DynamicIcon,
  FilterIcon,
  RoketIcon,
} from "@/Components/img/svgIcons/SvgIcon";
import "../../../../css/Home/AnswerTrades.scss";
import { Link } from "@inertiajs/react";

const AnswerTrades = () => {
  const tradedata = [
    {
      icon: <RoketIcon />,
      title: "100+ Metrics",
      content:
        "Comprehensive metrics for detailed trade performance analysis and insights.",
    },
    {
      icon: <FilterIcon />,
      title: "Advanced Filtering",
      content:
        "Customize data views with multi-dimensional filtering options.",
    },
    {
      icon: <DashboardIcon />,
      title: "Flexible Dashboards",
      content:
        "Multiple accounts & dashboards tailored to individual strategies and goals.",
    },
    {
      icon: <DynamicIcon />,
      title: "Dynamic Visuals",
      content:
        "Use interactive graphs for in-depth trading performance analysis.",
    },
  ];
  return (
    <>
      <section className="answer_trades">
        <Container>
          <div className="answer_trades_heading">
            <CommonHeading heading="Answer Your Trades." centered />
            <h3>#TradeReply</h3>
          </div>
          <div className="answer_trades_logoicon text-center">
            <img src="/images/tradereply-trading-tools.svg" alt="TradeReply trading tools logo, representing analytics and strategy optimization" />
          </div>
          <div className="answer_trades_contentbox">
            <Row>
              {tradedata.map((item, index) => (
                <Col xs={12} sm={6} lg={3} key={index}>
                  <div className="answer_trades_contentbox_content text-center">
                    <span>{item.icon}</span>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="text-center">
            <Link className="green-btn btn-style" href="/pricing">
              Join Free, Upgrade Anytime
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AnswerTrades;
