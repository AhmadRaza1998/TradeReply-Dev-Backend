import { Col, Row } from "react-bootstrap";
import SidebarHeading from "@/Components/common/Account/SidebarHeading";
import CommonBlackCard from "@/Components/common/Account/CommonBlackCard";
import AccountLayout from "@/Layouts/AccountLayout";
import { CheckIcon, EditIcon } from "@/Components/img/svgIcons/SvgIcon";
import "../../../css/account/PrivacyAccount.scss";

const PrivacyAccount = () => {
  return (
    <AccountLayout>
      <div className="privacy_sec">
        <SidebarHeading title="Privacy" />

        <Row>
          <Col lg={12} xs={12} className="d-flex mb-4 mb-lg-4">
            <CommonBlackCard
              title="Personal Recommendations"
              Linktext="Update"
              editicon={<EditIcon />}
              className="account_card"
            >
              <div className="account_card_list">
                <div className="step_verification d-md-flex align-items-center justify-content-between">
                  <div className="step_verification_content">
                    <h6>TradeReply Product Recommendations</h6>
                    <p className="mt-2">
                      Allow tailored products and offers recommended to you.
                      Recommendations will be based on trade performance and
                      strategies you create.
                    </p>
                  </div>
                  <div className="step_verification_off d-flex align-items-center">
                    <CheckIcon />{" "}
                    <span className="ms-2 green_text">Enabled</span>
                  </div>
                </div>
              </div>
            </CommonBlackCard>
          </Col>
          <Col lg={12} xs={12} className="d-flex mb-4 mb-lg-4">
            <CommonBlackCard
              title="Communication Preferences"
              Linktext="Update"
              editicon={<EditIcon />}
              className="account_card"
            >
              <div className="account_card_list">
                <div className="step_verification d-md-flex align-items-center justify-content-between">
                  <div className="step_verification_content">
                    <h6>TradeReply.com Mobile Push Notifications</h6>
                    <p className="mt-2">
                      Receive push notifications from the TradeReply.com Mobile
                      App for features like reminders to complete trades,
                      feature updates, and more. Disabling this will not disable
                      TradeReply.com Account and Security notifications.
                    </p>
                  </div>
                  <div className="step_verification_off d-flex align-items-center">
                    <CheckIcon />{" "}
                    <span className="ms-2 green_text">Enabled</span>
                  </div>
                </div>
                <div className="step_verification d-md-flex align-items-center justify-content-between mt-4">
                  <div className="step_verification_content">
                    <h6>TradeReply.com Mobile Push Notifications</h6>
                    <p className="mt-2">
                      Receive push notifications from the TradeReply.com Mobile
                      App for features like reminders to complete trades,
                      feature updates, and more. Disabling this will not disable
                      TradeReply.com Account and Security notifications.
                    </p>
                  </div>
                  <div className="step_verification_off d-flex align-items-center">
                    <CheckIcon />{" "}
                    <span className="ms-2 green_text">Enabled</span>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="step_verification d-md-flex align-items-center justify-content-between">
                  <div className="step_verification_content">
                    <h6>Latest News, Special Offers, Betas, and More</h6>
                    <p className="mt-2">
                      Receive news, event information, and special offers by
                      email from Blizzard Entertainment and its affiliates as
                      well as about third-party products and services.
                    </p>
                  </div>
                  <div className="step_verification_off d-flex align-items-center">
                    <CheckIcon />{" "}
                    <span className="ms-2 green_text">Enabled</span>
                  </div>
                </div>
              </div>
            </CommonBlackCard>
          </Col>
        </Row>
        {/* <h6 className="pt-2">If you are a resident of CA, CO, VA, CT, NV or UT and do not have a Targeted Ads setting, you can modify your settings via our <Link to="#">Customer Support Site</Link> </h6> */}
        <h4>Targeted Ads</h4>
        <h6 className="pt-2">
          TradeReply to target ads to me on partner sites based on data
          TradeReply collects.
        </h6>
      </div>
    </AccountLayout>
  );
};

export default PrivacyAccount;
