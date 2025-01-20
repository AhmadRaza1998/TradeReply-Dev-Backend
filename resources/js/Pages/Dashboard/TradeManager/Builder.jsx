import { Col, Container, Row } from "react-bootstrap";
import {
  CheckIcon,
  DropArrowIcon,
  GreyCrossIcon,
  PlusIcon,
  SolidInfoIcon,
  SolidRedArrowIcon,
} from "@/Components/img/svgIcons/SvgIcon";
import CommonButton from "@/Components/UI/CommonButton";
import AdminHeading from "@/Components/common/Dashboard/AdminHeading";
import CommonHead from "@/Components/common/Dashboard/CommonHead";
import CommonTooltip from "@/Components/UI/CommonTooltip";
import DashboardLayout from "@/Layouts/DashboardLayout";
import "../../../../css/dashboard/TradeBuilder.scss";
import Card from "@/Components/common/Dashboard/Card";
import { map } from "lodash";

const Builder = () => {
  return (
    <DashboardLayout>
      <div className="trade_manager trade_builder" id="trade-builder">
        <Container>
          <CommonHead />
          <Row className="trade_head align-items-center pt-40 pb-60">
            <Col md={4} xs={12} className="order-md-1">
              <AdminHeading heading="Trade Builder" centered />
            </Col>
            <Col md={4} xs={12}>
              <div className="trade_head_title">
                <h4>Draft 3</h4>
                <div className="head_draft">
                  {/* <p><RedInfoIcon /> Auto-not-saved</p> */}
                  <p>
                    <CheckIcon /> Auto-saved
                  </p>
                  <p>
                    <GreyCrossIcon /> Unable to save, retrying
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12} className="order-last">
              <div className="trade_head_btns d-sm-flex">
                <CommonButton title="Delete" className="red-btn me-2" />
                <CommonButton title="Publish" className="green-btn" />
                {/* <CommonButton title="Save Draft" className="" /> */}
              </div>
            </Col>
          </Row>
          <div className="trade_builder_card">
            <div className="trade_builder_card_head">
              <AdminHeading heading="Entry" centered />
              <button
                type="button"
                className="trade_builder_card_head_btnArrow"
              >
                <DropArrowIcon />
              </button>
            </div>

            <div className="trade_builder_card_body">
              <Row>
                {map(entrylist, (item, index) => (
                  <Card item={item} key={index} />
                ))}
              </Row>
            </div>

            <div className="trade_builder_card_head mt-4">
              <AdminHeading heading="Overview (Projection)" centered />
            </div>
            <div className="trade_builder_card_body">
              <Row>
                {overviewlist.map((item, index) => (
                  <Col key={index} md={4} sm={6} xs={12}>
                    <div className="trade_builder_card_body_box">
                      <h5 className="blue_bg">
                        {item?.title}
                        <CommonTooltip
                          className="subTooltip"
                          content="Lorem Ipsum is simply dummy text of the printing."
                          position="top-left"
                        >
                          <SolidInfoIcon />
                        </CommonTooltip>
                      </h5>
                      <h4
                        className={`${item?.title === "Account Reserve" ? "" : "bluelight_bg"}`}
                      >
                        {item?.text}
                      </h4>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

            <div className="trade_builder_card_head mt-4">
              <AdminHeading heading="Overview (Post Trade)" centered />
            </div>
            <div className="trade_builder_card_body">
              <Row>
                {overviewPost.map((item, index) => (
                  <Col key={index} md={4} sm={6} xs={12}>
                    <div className="trade_builder_card_body_box">
                      <h5 className="blue_bg">
                        {item?.title}
                        <CommonTooltip
                          className="subTooltip"
                          content="Lorem Ipsum is simply dummy text of the printing."
                          position="top-left"
                        >
                          <SolidInfoIcon />
                        </CommonTooltip>
                      </h5>
                      <h4
                        className={`${item?.title === "Trade Account" ? "bluelight_bg" : "greenlight_bg"}`}
                      >
                        {item?.text}
                      </h4>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="trade_builder_card_body_note mt-4">
              <h5>Notes</h5>
              <div className="note_box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Cras gravida volutpat urna, at aliquet mi finibus
                  ut. Integer vehicula odio ac dui gravida, non elementum dolor
                  dapibus. Nam quis dapibus nunc. Aliquam erat volutpat. Fusce
                  tincidunt urna at nisl tincidunt, in bibendum ipsum bibendum.
                  Curabitur vulputate turpis id justo condimentum, a feugiat
                  neque viverra. Vestibulum tincidunt enim eu urna efficitur,
                  quis hendrerit ligula faucibus. Curabitur tristique ipsum ut
                  fermentum pellentesque. Pellentesque nec arcu vitae lorem
                  malesuada sodales. Fusce tristique ligula magna, at viverra
                  erat dictum at. Curabitur in tortor eget nisi varius gravida.
                  Sed malesuada nulla ac mauris dapibus, sed blandit nisi
                  sollicitudin.
                </p>
                <p>
                  Aenean sed laoreet erat. Nullam vitae massa at lacus vulputate
                  tempor. Curabitur condimentum vehicula justo, at convallis
                  mauris pulvinar vel. Aenean gravida lorem ac venenatis varius.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Curabitur imperdiet libero nec
                  fermentum facilisis. Duis convallis efficitur sapien, eget
                  pretium libero. Aenean quis nulla sit amet augue sagittis
                  tempor a at urna. Sed scelerisque est in elit ullamcorper, id
                  tincidunt dui venenatis. Donec viverra mauris nec odio
                  dignissim, nec facilisis ipsum ullamcorper. Proin eu lectus a
                  mauris egestas venenatis. Phasellus at ipsum vel augue
                  lobortis luctus. Nullam et volutpat turpis. Maecenas non
                  laoreet neque. Aliquam erat volutpat. Sed vitae turpis a nisi
                  blandit bibendum ac eget augue. Integer ac dolor sit amet dui
                  convallis egestas.
                </p>
              </div>
            </div>
          </div>

          <div className="trade_manager_btns my-30">
            <CommonButton
              title="Add Exit"
              onlyIcon={<PlusIcon />}
              className="w-100"
            />
          </div>

          <div className="trade_builder_card greengrandientbg">
            <div className="trade_manager_trade_entry">
              <div className="trade_manager_trade_entry_box">
                <span className="solidArrow green_arrow me-3">
                  <SolidRedArrowIcon />
                </span>
                <Row className="w-100 align-items-center">
                  <Col lg={6} xs={12}>
                    <div className="d-flex align-items-center justify-content-between justify-content-lg-start">
                      <h5>Exit 3</h5>
                      <h5>Entry Date</h5>
                      <h5>Entry Price</h5>
                      <h5>P&L$</h5>
                    </div>
                  </Col>
                  <Col md={6} xs={12} className="d-none d-lg-block">
                    <div className="trade_head_btns d-sm-flex justify-content-end">
                      <CommonButton title="Delete" className="red-btn me-2" />
                      <CommonButton title="Publish" className="green-btn" />
                      {/* <CommonButton title="Save Draft" className="blue_bg" /> */}
                    </div>
                  </Col>
                </Row>
                <span className="solidArrow green_arrow endArrow ms-3">
                  <SolidRedArrowIcon />
                </span>
              </div>
            </div>

            <div className="trade_builder_card_head mt-30">
              <AdminHeading heading="Exit 3 Analysis" centered />
              <button
                type="button"
                className="trade_builder_card_head_btnArrow"
              >
                <DropArrowIcon />
              </button>
            </div>
            <div className="trade_builder_card_body">
              <Row>
                {Exitlist.map((item, index) => (
                  <Col key={index} md={4} sm={6} xs={12}>
                    <div className="trade_builder_card_body_box">
                      <h5 className="blue_bg">
                        {item?.title}
                        <CommonTooltip
                          className="subTooltip"
                          content="Lorem Ipsum is simply dummy text of the printing."
                          position="top-left"
                        >
                          <SolidInfoIcon />
                        </CommonTooltip>
                      </h5>
                      <h4
                        className={`
                                                ${item?.title === "Account Reserve" ? "bluelight_bg" : ""} 
                                                ${item?.title === "Account Available" ? "bluelight_bg" : ""} 
                                                ${item?.title === "Account Size" ? "bluelight_bg" : ""}`}
                      >
                        {item?.text}
                      </h4>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="trade_builder_card_head mt-4">
              <AdminHeading heading="Exit 3 Overview (Projection)" centered />
            </div>
            <div className="trade_builder_card_body">
              <Row>
                {overviewlist.map((item, index) => (
                  <Col key={index} md={4} sm={6} xs={12}>
                    <div className="trade_builder_card_body_box">
                      <h5 className="blue_bg">
                        {item?.title}
                        <CommonTooltip
                          className="subTooltip"
                          content="Lorem Ipsum is simply dummy text of the printing."
                          position="top-left"
                        >
                          <SolidInfoIcon />
                        </CommonTooltip>
                      </h5>
                      <h4
                        className={`${item?.title === "Account Reserve" ? "" : "bluelight_bg"}`}
                      >
                        {item?.text}
                      </h4>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

            <div className="trade_builder_card_head mt-4">
              <AdminHeading heading="Exit 3 Overview (Post Trade)" centered />
            </div>
            <div className="trade_builder_card_body">
              <Row>
                {ExitoverviewPost.map((item, index) => (
                  <Col key={index} md={4} sm={6} xs={12}>
                    <div className="trade_builder_card_body_box">
                      <h5 className="blue_bg">
                        {item?.title}
                        <CommonTooltip
                          className="subTooltip"
                          content="Lorem Ipsum is simply dummy text of the printing."
                          position="top-left"
                        >
                          <SolidInfoIcon />
                        </CommonTooltip>
                      </h5>
                      <h4
                        className={`${item?.title === "FULL PROFIT %" ? "bluelight_bg" : "greenlight_bg"}`}
                      >
                        {item?.text}
                      </h4>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="trade_builder_card_body_note mt-4">
              <h5>Notes</h5>
              <div className="note_box"></div>
            </div>
            <div className="trade_manager_btns mt-4">
              <CommonButton title="Upload Market chart" className="w-100" />
            </div>
          </div>
          <div className="trade_manager_trade_entry mt-30">
            {entrydata.map((item, index) => (
              <div
                key={index}
                className={`trade_manager_trade_entry_box Redgrandient ${index === 1 ? "greengrandient" : ""}`}
              >
                <span className="solidArrow red_arrow me-3">
                  <SolidRedArrowIcon />
                </span>
                <div className="d-flex trade_manager_trade_entry_box_headtext align-items-center w-100 justify-content-between">
                  <h5>{item?.tarde}</h5>
                  <h5>{item?.entrydate}</h5>
                  <h5>{item?.exiddate}</h5>
                  <h5>{item?.ticker}</h5>
                  <h5>{item?.entryprice}</h5>
                  <h5>{item?.exitprice}</h5>
                  <h5>{item?.position}</h5>
                  <h5>{item?.pl}</h5>
                </div>
                <span className="solidArrow red_arrow endArrow ms-3">
                  <SolidRedArrowIcon />
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </DashboardLayout>
  );
};

export default Builder;

const entrylist = [
  { title: "Account Reserve one", text: "$50.00", type: "1" },
  { title: "Account Available", text: "$402.76", type: "2" },
  { title: "Account Size", text: "$452.76", type: "1" },
  { title: "Entry Date", text: "11/7/2021" },
  { title: "Token", text: "fet" },
  { title: "long", text: "acct-123" },
  { title: "# of exits", text: "3" },
  { title: "order type", text: "m-market" },
  { title: "leverage", text: "1X" },
  { title: "entry $", text: "$3.080" },
  { title: "STOP LOSS $", text: "$2.830" },
  { title: "TARGET $", text: "$4.500" },
  { title: "ACCOUNT RISK %", text: "4.30%" },
  { title: "QTY", text: "43.4747" },
  { title: "POSTION $", text: "$133.90" },
  { title: "ASSET TYPE", text: "CRYPTO" },
  { title: "ASSET TYPE", text: "CRYPTO" },
  { title: "ASSET TYPE", text: "CRYPTO" },
];
const overviewlist = [
  { title: "iNVESTMENT %", text: "52.98%" },
  { title: "MAX RISK %", text: "8.12%" },
  { title: "STOP RISK %", text: "8.12%" },
  { title: "ACCOUNT RISK $", text: "-$10.87" },
  { title: "RISK/SHARE $", text: "$0.250" },
  { title: "REWARD %", text: "46.10%" },
  { title: "REWARD $", text: "$61.73" },
  { title: "R:r", text: "$61.73" },
  { title: "EST ACT VALUE", text: "$314.49" },
];

const overviewPost = [
  { title: "OUTCOME", text: "WIN" },
  { title: "P&l $", text: "$200.00" },
  { title: "P&l %", text: "79.13%" },
  { title: "fULL PROFIT", text: "YES" },
  { title: "DEV PROFIT $", text: "$0.00" },
  { title: "dEV PROFIT %", text: "0.00%" },
  { title: "dEV PROFIT %", text: "0.00%" },
  { title: "FULL PROFIT %", text: "100.00%" },
  { title: "FULL PROFIT $", text: "$61.73" },
  { title: "Trade Account", text: "acct-123" },
  { title: "Trade Account", text: "acct-123" },
  { title: "Trade Account", text: "acct-123" },
];

const Exitlist = [
  { title: "Account Reserve", text: "$50.00" },
  { title: "Account Available", text: "$402.76" },
  { title: "Account Size", text: "$452.76" },
  { title: "Entry Date", text: "11/7/2021" },
  { title: "Exit Date", text: "11/9/2021" },
  { title: "Token", text: "fet" },
  { title: "position", text: "long" },
  { title: "order type", text: "m-market" },
  { title: "leverage", text: "1X" },
  { title: "entry $", text: "$3.080" },
  { title: "STOP LOSS $", text: "$2.830" },
  { title: "TARGET $", text: "$4.500" },
  { title: "ACCOUNT RISK %", text: "4.30%" },
  { title: "QTY", text: "43.4747" },
  { title: "POSTION $", text: "$133.90" },
  { title: "ACCOUNT RISK %", text: "4.30%" },
  { title: "QTY", text: "43.4747" },
  { title: "POSTION $", text: "$133.90" },
];

const ExitoverviewPost = [
  { title: "OUTCOME", text: "WIN" },
  { title: "P&l $", text: "$200.00" },
  { title: "P&l %", text: "79.13%" },
  { title: "fULL PROFIT", text: "YES" },
  { title: "DEV PROFIT $", text: "$0.00" },
  { title: "dEV PROFIT %", text: "0.00%" },
  { title: "dEV PROFIT %", text: "0.00%" },
  { title: "FULL PROFIT %", text: "100.00%" },
  { title: "FULL PROFIT $", text: "$61.73" },
  { title: "FULL PROFIT MISSED $", text: "$0.00" },
  { title: "RESERVE $ (25 %)", text: "$50.00" },
  { title: "TIME IN TRADE", text: "2 DAYS" },
];

const entrydata = [
  {
    tarde: "EXIT 2",
    entrydate: "Entry Date",
    ticker: "Ticker",
    entryprice: "Entry Price",
    exitprice: "Exit Price",
    position: "Position",
    pl: "P&L$",
  },
  {
    tarde: "EXIT 1",
    entrydate: "Entry Date",
    ticker: "Ticker",
    entryprice: "Entry Price",
    exitprice: "Exit Price",
    position: "Position",
    pl: "P&L$",
  },
];
