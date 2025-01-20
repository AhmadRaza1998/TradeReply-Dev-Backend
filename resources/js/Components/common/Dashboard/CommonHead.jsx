import { Col, Row } from "react-bootstrap";
import CommonSearch from "@/Components/UI/CommonSearch";
import "../../../../css/dashboard/CommonHead.scss";

const CommonHead = () => {
  return (
    <>
      <div className="common_head">
        <Row>
          <Col md={3} xs={12}>
            <div className="commom_tradeacct">
              <h6>Trade Account</h6>
              <p>acct-123</p>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="common_head_search">
              <CommonSearch icon={true} placeholder="Search & Explore" />
            </div>
          </Col>
          <Col md={3} xs={12}>
            <div className="common_head_datebox">
              <h5>Last 28 days</h5>
              <h6>May 14- Jun 10 , 2024</h6>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CommonHead;
