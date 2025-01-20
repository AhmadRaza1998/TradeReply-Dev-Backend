import { Col, Row } from "react-bootstrap";
import SidebarHeading from "@/Components/common/Account/SidebarHeading";
import AccountLayout from "@/Layouts/AccountLayout";
import CommonBlackCard from "@/Components/common/Account/CommonBlackCard";
import {
  CheckIcon,
  CrossIcon,
  PaymentIcon,
} from "@/Components/img/svgIcons/SvgIcon";
import CommonTable from "@/Components/UI/CommonTable";
import "../../../css/account/PaymentMethods.scss";

const PaymentMethods = () => {
  const paymentdata = [
    {
      name: "Visa 1734 ",
      text: "Payment Method",
    },
    {
      name: "Rupay 1734 ",
      text: "Payment Method",
    },
  ];
  return (
    <AccountLayout>
      <div className="payment_methods">
        <SidebarHeading title="Payment Methods" />

        <Row>
          <Col lg={12} xs={12} className="d-flex mb-4 mb-lg-4">
            <CommonBlackCard
              title="TradeReply.com credits"
              className="account_card"
            >
              <div className="account_card_list">
                <div className="d-md-flex align-items-center justify-content-between">
                  <ul>
                    <li>
                      <span className="text-white">Standard Credits</span>{" "}
                      <span>$0.00</span>
                    </li>
                    <li>
                      <span className="text-white">Refer a friend Credits</span>{" "}
                      <span>$0.00</span>
                    </li>
                    <li>
                      <span className="text-white">Total Credits</span>{" "}
                      <span>$0.00</span>
                    </li>
                  </ul>
                  <div className="payment_icon mt-4 mt-md-0">
                    <button type="button" className="blue_text_btn">
                      <PaymentIcon /> Redeem a code
                    </button>
                  </div>
                </div>
              </div>
            </CommonBlackCard>
          </Col>
          <Col lg={12} xs={12} className="d-flex mb-4 mb-lg-4">
            <CommonBlackCard
              title="Your Payment Methods"
              className="account_card"
            >
              <div className="account_card_table">
                <CommonTable fields={false} className="simple_table">
                  {paymentdata?.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center green_text">
                          <span className="me-2">
                            <CheckIcon />
                          </span>{" "}
                          Default
                        </div>
                      </td>
                      <td>
                        <h6>{item?.name}</h6>
                        <p className="grey_text mt-2">{item?.text}</p>
                      </td>
                      <td>
                        <button className="blue_text_btn d-flex align-items-center">
                          <CrossIcon /> Remove
                        </button>
                      </td>
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

export default PaymentMethods;
