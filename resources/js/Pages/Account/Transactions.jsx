import { Col, Nav, Row, Tab } from "react-bootstrap";

import SidebarHeading from "@/Components/common/Account/SidebarHeading";
import AccountLayout from "@/Layouts/AccountLayout";
import CommonTable from "@/Components/UI/CommonTable";
import CustomPagination from "@/Components/UI/CustomPagination";

const TransactionHistory = () => {
  const fields = ["Date", "Purchase", "Total", "Status", "Order Id"];
  const paymentdata = [
    {
      date: "Apr 30, 2024",
      name: "TradeReply Essential Subscription - 1 month",
      price: "14.99",
      id: "US991234784",
    },
    {
      date: "Apr 30, 2024",
      name: "TradeReply Essential Subscription - 1 month",
      price: "14.99",
      id: "US991234784",
    },
    {
      date: "Apr 30, 2024",
      name: "TradeReply Essential Subscription - 1 month",
      price: "14.99",
      id: "US991234784",
    },
  ];
  return (
    <AccountLayout>
      <div className="account_transaction_history">
        <SidebarHeading title="Transaction History" />

        <Row>
          <Col lg={12} xs={12} className="mb-4 mb-lg-4">
            <Tab.Container id="left-tabs-example" defaultActiveKey="purchases">
              <Nav variant="pills" className="borderTabs">
                <Nav.Item>
                  <Nav.Link eventKey="purchases">Purchases</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="refer">Refer a Friend claims</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="purchases">
                  <div className="common_blackcard">
                    <div className="account_card">
                      <div className="account_card_table">
                        <CommonTable fields={fields} className="simple_table">
                          {paymentdata?.map((item, index) => (
                            <tr key={index}>
                              <td className="grey_text">{item.date}</td>
                              <td>{item.name}</td>
                              <td>${item.price}</td>
                              <td>Complete</td>
                              <td className="blue_text">{item.id}</td>
                            </tr>
                          ))}
                        </CommonTable>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <CustomPagination />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="refer">
                  You have not referred any friends
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </div>
    </AccountLayout>
  );
};

export default TransactionHistory;
