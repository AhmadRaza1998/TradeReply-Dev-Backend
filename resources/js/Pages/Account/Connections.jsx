import { Col, Row } from "react-bootstrap";
import SidebarHeading from "@/Components/common/Account/SidebarHeading";
import CommonBlackCard from "@/Components/common/Account/CommonBlackCard";
import AccountLayout from "@/Layouts/AccountLayout";
import CommonTable from "@/Components/UI/CommonTable";
import CommonTooltip from "@/Components/UI/CommonTooltip";
import {
  CrossIcon,
  PlusIcon,
  SolidInfoIcon,
} from "@/Components/img/svgIcons/SvgIcon";
import "../../../css/account/Connections.scss";

const Connections = () => {
  const recentdata = [
    {
      socialname: "Apple ",
      status: "Not Connected",
    },
    {
      socialname: "Facebook ",
      status: "Not Connected",
    },
    {
      socialname: "Facebook ",
      status: "Not Connected",
    },
  ];

  const tradedata = [
    {
      name: "Trade-123  ",
      status: "Connected January 2, 2016",
    },
    {
      name: "Primary Trading",
      status: "Connected January 16, 2016",
    },
  ];

  const brokerdata = [
    {
      name: "Interactive Brokers",
      status: "Connected",
      support: "AutoSync, Stocks, Crypto",
      id: "Interactive Brokers Account ID 3292423 Synced",
      link: "https://www.interactivebrokers.com/",
    },
    {
      name: "Coinbase",
      status: "Connected",
      support: "AutoSync, Stocks, Crypto",
      id: "Coinbase Account ID 342421 Synced",
      link: "https://www.coinbase.com/",
    },
    {
      name: "Trade Account",
      status: "Not Connected",
      support: "AutoSync, Stocks, Crypto",
    },
    {
      name: "Trade Account",
      status: "Not Connected",
      support: "AutoSync, Stocks, Crypto",
    },
    {
      name: "Trade Account",
      status: "Not Connected",
      support: "AutoSync, Stocks, Crypto",
    },
    {
      name: "Trade Account",
      status: "Not Connected",
      support: "AutoSync, Stocks, Crypto",
    },
    {
      name: "Trade Account",
      status: "Not Connected",
      support: "AutoSync, Stocks, Crypto",
    },
    {
      name: "Trade Account",
      status: "Not Connected",
      support: "AutoSync, Stocks, Crypto",
    },
  ];

  return (
    <AccountLayout>
      <div className="connections_sec">
        <SidebarHeading title="Connections" />

        <Row>
          <Col xs={12} className="mb-4 mb-lg-4">
            <CommonBlackCard
              title="Connected Accounts"
              text="Connect your other accounts to access additional features, including logging in to your TradeReply.com account with those other account credentials."
              className="account_card"
            >
              <div className="account_card_table">
                <CommonTable fields={false} className="simple_table">
                  {recentdata?.map((item, index) => (
                    <tr key={index}>
                      <td className="grey_text">{item?.socialname}</td>
                      <td>{item?.status}</td>
                      <td>
                        {item?.status === "Not Connected" ? (
                          <button className="blue_text_btn d-flex align-items-center">
                            <PlusIcon /> Connect
                          </button>
                        ) : (
                          <button className="blue_text_btn d-flex align-items-center">
                            <CrossIcon /> Remove
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </CommonTable>
              </div>
            </CommonBlackCard>
          </Col>
          <Col xs={12} className="mb-4 mb-lg-4">
            <CommonBlackCard
              title="Trade Accounts"
              text="Manage the accounts you trade with on TradeReply.com"
              Linktext="Add a new Trade Account"
              editicon={<PlusIcon />}
              className="account_card"
            >
              <div className="account_card_table">
                <CommonTable fields={false} className="simple_table">
                  {tradedata?.map((item, index) => (
                    <tr key={index}>
                      <td className="grey_text">{item?.name}</td>
                      <td>{item?.status}</td>
                      <td>
                        {item?.Connected === "Connected" ? (
                          <button className="blue_text_btn d-flex align-items-center">
                            <PlusIcon /> Connect
                          </button>
                        ) : (
                          <button className="blue_text_btn d-flex align-items-center">
                            <CrossIcon /> Remove
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </CommonTable>
              </div>
            </CommonBlackCard>
          </Col>
          <div className="brokers_tablesec_inner">
            <CommonTooltip
              className="d-flex align-items-center mb-3 justify-content-end"
              content="Manual entry lets you input trading data using a form builder or upload via Template or Broker CSV files. AutoSync connects directly to your broker via API, automatically updating your data in real-time with limited manual effort."
              position="top-left"
            >
              <SolidInfoIcon />
              <h6 className="mb-0 ms-3">Sync Options: Manual vs. AutoSync</h6>
            </CommonTooltip>
          </div>
          <Col xs={12}>
            <CommonBlackCard
              title="Brokers & Integrations"
              text="Connect your TradeReply.com account to your brokers and trading platforms to automatically sync your trades, ensuring all your trading data is seamlessly integrated for comprehensive analysis and performance tracking."
              className="account_card"
              subtext="Missing an integration? Submit a request here"
              searcbar={true}
              tradeacct={true}
              submit={true}
            >
              <div className="account_card_table">
                <CommonTable fields={false} className="simple_table">
                  {brokerdata?.map((item, index) => (
                    <tr key={index}>
                      <td className="grey_text">{item?.name}</td>
                      <td>{item?.status}</td>
                      <td>
                        <p className="grey_text font-weight-600">
                          {item?.link}
                        </p>
                        <p className="font-weight-600 my-2">{item?.id}</p>
                        <span className="grey_text">Supported:</span>{" "}
                        {item?.support}
                      </td>
                      <td>
                        {item?.status === "Not Connected" ? (
                          <button className="blue_text_btn d-flex align-items-center">
                            <PlusIcon /> Connect
                          </button>
                        ) : (
                          <button className="blue_text_btn d-flex align-items-center">
                            <CrossIcon /> Remove
                          </button>
                        )}
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

export default Connections;
