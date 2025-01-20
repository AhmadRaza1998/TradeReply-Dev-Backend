import { Col, Row } from "react-bootstrap";
import SidebarHeading from "@/Components/common/Account/SidebarHeading";
import CommonBlackCard from "@/Components/common/Account/CommonBlackCard";
import AccountLayout from "@/Layouts/AccountLayout";
import { RightArrowIcon } from "@/Components/img/svgIcons/SvgIcon";

const Subscriptions = () => {
  return (
    <AccountLayout>
      <div className="subscriptions_sec">
        <SidebarHeading title="Subscriptions" />
        <Row className="mb-4 mb-lg-4">
          <Col xs={12}>
            <CommonBlackCard
              title="Subscriptions"
              Linktext="Change Subscription"
              Linkicon={<RightArrowIcon />}
              className="account_card"
            >
              <div className="account_card_subscription">
                <ul className="account_card_subscription_list">
                  <li>
                    <h6>
                      Trade<span className="blue_text">Reply</span>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <span>Essential Plan</span>
                    </h6>
                  </li>
                  <li>
                    <h6 className="yellow_text">SUSPENDED</h6>
                  </li>
                  <li>
                    <h6>MAY 3 , 2024</h6>
                  </li>
                  <li className="d-none d-md-block"></li>
                  <li className="d-none d-md-block"></li>
                  <li>
                    <p>Account Status</p>
                  </li>
                  <li>
                    <p>Renewal</p>
                  </li>
                </ul>
              </div>
            </CommonBlackCard>
          </Col>
        </Row>
      </div>
    </AccountLayout>
  );
};

export default Subscriptions;
