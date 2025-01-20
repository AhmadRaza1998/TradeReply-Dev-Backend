import { Container } from "react-bootstrap";
import CommonHeading from "@/Components/UI/CommonHeading";
import {
  GreenCheckIcon,
  InfoIcon,
  SettingIcon,
  SolidSettingIcon,
} from "@/Components/img/svgIcons/SvgIcon";
import StatusChart from "@/Components/common/Home/StatusChart";
import "../../../css/Home/TradeStatus.scss";
import HomeLayout from "@/Layouts/HomeLayout";

const statusdata = [
  {
    icon: <InfoIcon />,
    title: "Website",
    text: "Outage",
    class: "redGradient",
  },
  {
    icon: <GreenCheckIcon />,
    title: "Broker Integrations",
    text: "Operational",
    class: "greenGradient",
  },
  {
    icon: <SettingIcon />,
    title: "Alerts",
    text: "Maintainence",
    class: "yellowGradient",
  },
  {
    icon: <GreenCheckIcon />,
    title: "Widgets",
    text: "Operational",
    class: "greenGradient",
  },
  {
    icon: <GreenCheckIcon />,
    title: "Data Feeds",
    text: "Operational",
    class: "greenGradient",
  },
  {
    icon: <GreenCheckIcon />,
    title: "Log In / Sign Up",
    text: "Operational",
    class: "greenGradient",
  },
];

const TradeStatus = () => {
  return (
    <HomeLayout>
      <div className="trade_status">
        <Container>
          <div className="trade_status_content py-100">
            <CommonHeading title="TradeReply Status" centered />
          </div>
          <div className="trade_status_box">
            {statusdata.map((item, index) => {
              return (
                // <div className={`trade_status_box_card ${<InfoIcon/> === item.icon ? "redGradient" : "redGradient" || <GreenCheckIcon /> === item.icon ? "greenGradient" : "greenGradient" || <SettingIcon /> === item.icon ? "yellowGradient" : "yellowGradient"}`} key={index}>
                <div
                  className={`trade_status_box_card ${item.class}`}
                  key={index}
                >
                  <div className="trade_status_box_card_icon">
                    {item.icon}
                    {/* {item === "redGradient" ? <InfoIcon /> : <GreenCheckIcon /> || <SettingIcon />} */}
                  </div>
                  <div className="trade_status_box_card_content">
                    <h4>{item.title}</h4>
                    <h4>{item.text}</h4>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <StatusChart />
          </div>

          <div className="service_updates">
            <CommonHeading heading="Service Updates" />
            <div className="service_updates_card">
              <div className="service_updates_card_icon">
                <SolidSettingIcon />
              </div>
              <div className="service_updates_card_content">
                <h4>Schedule Maintainence</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ultrices dictum nulla, at luctus nisl molestie vel. Maecenas
                  in vulputate metus. Quisque nec ipsum venenatis, blandit
                  libero at, dignissim tortor. Praesent vitae risus orci. In
                  condimentum euismod purus, vitae pretium libero sagittis ut.
                  Aliquam volutpat enim non quam laoreet congue. Phasellus sed
                  imperdiet elit. Morbi nec maximus tellus.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default TradeStatus;
