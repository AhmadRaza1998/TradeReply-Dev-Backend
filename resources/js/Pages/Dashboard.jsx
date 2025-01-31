import DashboardLayout from "@/Layouts/DashboardLayout";
import { Col, Container, Row } from "react-bootstrap";
import AdminHeading from "@/Components/common/Dashboard/AdminHeading";
import CommonHead from "@/Components/common/Dashboard/CommonHead";
import {
  PlusIcon,
  SettingIcon,
  TradeIcon,
} from "@/Components/img/svgIcons/SvgIcon";
import "../../css/dashboard/Dashboard.scss";

const overviewbox = [
  {
    text: "Success Score: 97%",
    score: true,
  },
  {
    text: "Evaluation : 50%",
    evaluation: true,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="dashboard">
        <Container>
          <CommonHead />
          <div className="trade_head justify-content-center mb-0 py-40">
            <AdminHeading heading="Account Overview" centered />
            <button className="setting_btn" type="button">
              <SettingIcon />
            </button>
          </div>
          <Row className="dashboard_card gx-xl-5">
            {overviewbox.map((item, index) => (
              <Col lg={4} sm={6} md={4} xs={12} key={index} className="d-flex">
                <div
                  className={`overview_box w-100 ${item?.score ? "scorebox darkbox" : ""} ${item?.evaluation ? "evalbox darkbox" : ""}`}
                >
                  {item?.score && (
                    <div className="overview_box_fillbox">
                      <span className="mt-3">
                        <TradeIcon />
                      </span>
                      <h4 className="my-3">{item?.text}</h4>
                      <figure>
                        <img src="/images/tradereply-for-crypto-traders.png" alt="TradeReply visual analytics – Gain insights with interactive charts and trading metrics" />
                      </figure>
                    </div>
                  )}
                  {item?.evaluation && (
                    <div className="overview_box_fillbox">
                      <h4 className="mb-4">{item?.text}</h4>
                      <figure>
                        <img src="/images/tradereply-trade-metrics.png" alt="TradeReply trading tools – Analyze, track, and optimize your trades with real-time insights" />
                      </figure>
                    </div>
                  )}
                  {!item?.score && !item?.evaluation && (
                    <button type="button" className="overview_box_icon">
                      <PlusIcon />
                    </button>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </DashboardLayout>
  );
}
