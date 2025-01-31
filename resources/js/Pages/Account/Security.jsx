import { Col, Row } from "react-bootstrap";
import SidebarHeading from "@/Components/common/Account/SidebarHeading";
import CommonBlackCard from "@/Components/common/Account/CommonBlackCard";
import AccountLayout from "@/Layouts/AccountLayout";
import {
  CheckIcon,
  CrossIcon,
  EditIcon,
  LogoutIcon,
} from "@/Components/img/svgIcons/SvgIcon";
import CommonTable from "@/Components/UI/CommonTable";
import "../../../css/account/Security.scss";

const Security = () => {
  const recentdata = [
    {
      site: "Tradereply.com Website",
      sitepc: "Windows PC",
      date: "Jun 16, 2024 2:06 PM",
      city: "Miami , United States",
    },
    {
      site: "Tradereply.com Website",
      sitepc: "Android",
      date: "May 5, 2024 2:06 PM",
      city: "Florida , United States",
    },
    {
      site: "Tradereply.com Website",
      sitepc: "Windows PC",
      date: "Jun 16, 2024 2:06 PM",
      city: "Miami , United States",
    },
    {
      site: "Tradereply.com Website",
      sitepc: "Windows PC",
      date: "Jun 16, 2024 2:06 PM",
      city: "Miami , United States",
    },
  ];

  return (
    <AccountLayout>
      <div className="security_sec">
        <SidebarHeading title="Security" />

        <Row>
          <Col lg={12} xs={12} className="d-flex mb-4 mb-lg-4">
            <CommonBlackCard
              title="Password"
              Linktext="Update"
              editicon={<EditIcon />}
              className="account_card pullcontent"
              text="We recommend updating your password periodically to prevent unauthorized access."
            >
              <div className="account_card_list">
                <ul>
                  <li>
                    <span>Password </span> Last Updated Mar 28, 2024
                  </li>
                </ul>
              </div>
            </CommonBlackCard>
          </Col>
          <Col lg={12} xs={12} className="d-flex mb-4 mb-lg-4">
            <CommonBlackCard
              title="2-Step Verification"
              text="Prevent unauthorized logins by setting up 2-step verification."
              Linktext="Update"
              editicon={<EditIcon />}
              className="account_card pullcontent"
            >
              <div className="account_card_list">
                <ul>
                  <li>
                    <span>Status </span>
                    <div className="d-flex align-items-center">
                      <CheckIcon />
                      <span className="green_text ms-3">Active</span>
                    </div>
                  </li>
                  <li>
                    <span>Restore Code </span>
                    <button className="restore_code add_number" type="button">
                      Get Restore Code
                    </button>
                  </li>
                </ul>
                <div className="divider"></div>
                <div className="step_verification d-flex align-items-center justify-content-between">
                  <div className="step_verification_content">
                    <h6>Always Require 2-step verification for login</h6>
                    <p className="mt-2">
                      If enabled, 2-step verification will be prompted on every
                      login.
                    </p>
                    <p>
                      If disabled, your device will be remembered for 30 days
                      and will not prompt you until the period is over.
                    </p>
                  </div>
                  <div className="step_verification_off d-flex align-items-center">
                    <CrossIcon /> <span className="ms-2">Off</span>
                  </div>
                </div>
              </div>
            </CommonBlackCard>
          </Col>
          <Col lg={12} xs={12} className="d-flex mb-4 mb-lg-4">
            <CommonBlackCard
              title="Secret Question"
              Linktext="Update"
              editicon={<EditIcon />}
              className="account_card pullcontent "
            >
              <div className="account_card_list">
                <ul>
                  <li>
                    <span>Secret Question </span> What was the first car you
                    owned?
                  </li>
                </ul>
              </div>
            </CommonBlackCard>
          </Col>
          <Col xs={12}>
            <CommonBlackCard
              title="Recent Purchases"
              Linktext="Logout from all the devices"
              Linkicon={<LogoutIcon />}
              className="account_card"
            >
              <div className="account_card_table">
                <div className="table_heading">
                  <p className="font-weight-600">
                    Notice anything suspicious?{" "}
                    <span className="blue_text">
                      Update your password to secure your account.
                    </span>
                  </p>
                </div>
                <CommonTable fields={false} className="simple_table">
                  {recentdata?.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          className="simple_table_imgIcon"
                          src={"/images/icons/tradereply-blue-global.svg"}
                          alt=""
                        />
                      </td>
                      <td>
                        <h6>{item?.site}</h6>
                        <p className="blue_text"> {item?.sitepc}</p>
                      </td>
                      <td>{item?.date}</td>
                      <td>{item?.city}</td>
                    </tr>
                  ))}
                </CommonTable>
              </div>
            </CommonBlackCard>
          </Col>
        </Row>
      </div>
    </AccountLayout>
  );
};

export default Security;
