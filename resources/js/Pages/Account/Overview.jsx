import { Col, Row } from "react-bootstrap";
import SidebarHeading from "@/Components/common/Account/SidebarHeading";
import "../../../css/account/AccountLayout.scss";
import CommonBlackCard from "@/Components/common/Account/CommonBlackCard";
import {
  CheckIcon,
  PlusIcon,
  RightArrowIcon,
} from "@/Components/img/svgIcons/SvgIcon";
import CommonTable from "@/Components/UI/CommonTable";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import AccountLayout from "@/Layouts/AccountLayout";
import { useState } from "react";
const AccountOverview = () => {
  const recentdata = [
    {
      date: "Apr 30, 2024",
      plan: "Essential Plan - 1 month",
      price: "$ 14.99",
    },
    {
      date: "Apr 30, 2024",
      plan: "Essential Plan - 1 month",
      price: "$ 14.99",
    },
    {
      date: "Apr 30, 2024",
      plan: "Essential Plan - 1 month",
      price: "$ 14.99",
    },
  ];
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  const value = 67;
  return (
    <>
      <AccountLayout>
        <div className="account_overview">
          <SidebarHeading title="Account Overview" />
          <Row className="mb-4 mb-lg-4">
            <Col md={6} xs={12} className="d-flex">
              <CommonBlackCard
                title="Your Information"
                Linktext="Account Details"
                Linkicon={<RightArrowIcon />}
                className="account_card"
              >
                <div className="account_card_list">
                  <ul>
                    <li>
                      <span>Name </span> A**** M****
                    </li>
                    <li>
                      <span>Name </span> a**********@yahooo.com
                    </li>
                    <li>
                      <span>Phone Number </span>{" "}
                      <button className="add_phone_number" type="button">
                        Add Phone Number
                      </button>
                    </li>
                  </ul>
                </div>
              </CommonBlackCard>
            </Col>

            <Col md={6} xs={12} className="d-flex mt-4 mt-md-0">
              <CommonBlackCard
                title="Security Checkup"
                Linktext="Security"
                Linkicon={<RightArrowIcon />}
                className="account_card"
              >
                <div className="account_card_checkup d-flex">
                  <div className="account_card_checkup_verify">
                    <div className="mb-3 d-flex align-items-center">
                      <CheckIcon />
                      <h6 className="ps-4">Check Up</h6>
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <CheckIcon />
                      <h6 className="ps-4">Check Up</h6>
                    </div>
                    <div className="d-flex align-items-center">
                      <button className="add_number" type="button">
                        <PlusIcon /> Add phone number
                      </button>
                    </div>
                  </div>
                  <div className="account_card_checkup_chart">
                    <CircularProgressbarWithChildren value={value}>
                      <div className="CircularProgressbar_text">
                        <h6>{value}%</h6>
                        <h6 className="text-uppercase">Complete</h6>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </CommonBlackCard>
            </Col>
          </Row>
          <Row className="mb-4 mb-lg-4">
            <Col md={6} xs={12} className="d-flex">
              <CommonBlackCard
                title="TradeReply Credits"
                Linktext="Payment Methods"
                Linkicon={<RightArrowIcon />}
                className="account_card"
              >
                <div className="account_card_payments">
                  <h6 className="green_text">$ 0.00</h6>
                </div>
              </CommonBlackCard>
            </Col>

            <Col md={6} xs={12} className="d-flex mt-4 mt-md-0">
              <CommonBlackCard title="Redeem a code" className="account_card">
                <div className="account_card_redeem d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter code"
                  />
                  <button className="btn-style" type="button">
                    Redeem Code
                  </button>
                </div>
              </CommonBlackCard>
            </Col>
          </Row>
          <Row className="mb-4 mb-lg-4">
            <Col xs={12}>
              <CommonBlackCard
                title="Subscriptions"
                Linktext="Subscriptions"
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
          <Row className="">
            <Col xs={12}>
              <CommonBlackCard
                title="Recent Purchases"
                Linktext="Transaction History"
                Linkicon={<RightArrowIcon />}
                className="account_card account_card_table"
              >
                <div className="account_card_table">
                  <CommonTable fields={false} className="simple_table">
                    {recentdata?.map((item, index) => (
                      <tr key={index}>
                        <td className="lightgrey_text">{item?.date}</td>
                        <td className="blue_text">{item?.plan}</td>
                        <td>{item?.price}</td>
                        <td>Complete</td>
                      </tr>
                    ))}
                  </CommonTable>
                </div>
              </CommonBlackCard>
            </Col>
          </Row>
        </div>
      </AccountLayout>
    </>
  );
};

export default AccountOverview;
