import { Col, Container, Row } from "react-bootstrap";
import CommonButton from "@/Components/UI/CommonButton";
import { CheckGradientIcon } from "@/Components/img/svgIcons/SvgIcon";
import "../../../css/Home/TradeBrand.scss";
import HomeLayout from "@/Layouts/HomeLayout";

const imglogo = "/images/tradereply-trading-dashboard-logo.svg";
const imglogo1 = "/images/tradereply-trading-performance-logo.svg";
const mologo1 = "/images/tradereply-black-logo.svg";
const mologo2 = "/images/tradereply-white-black-logo.svg";
const mologo3 = "/images/tradereply-white-cyan-logo.svg";
const mologo4 = "/images/tradereply-cyan-black-logo.svg";
const ourlogo1 = "/images/tradereply-square-logo-white.svg";
const ourlogo2 = "/images/tradereply-square-logo-black.svg";
const ourlogo3 = "/images/tradereply-square-logo-white-cyan.svg";

const TradeBrand = () => {
  const trademarkdata = [
    {
      text: "Explicit written authorization is required for the use of TradeReply brand assets.",
    },
    {
      text: "Always use a capital 'T' and 'R' when referencing TradeReply. For example: 'Log and analyze your trades with TradeReply'.",
    },
    {
      text: "Do not modify or distort the TradeReply brand assets in any way. Do not attempt to recreate, redesign, or create variations or derivatives from the TradeReply brand assets.",
    },
    {
      text: "Do not incorporate the TradeReply brand assets into your own product, service names, logos, social media handles, trademarks, or company names.",
    },
    {
      text: "Make certain that the use of TradeReply brand assets does not create any confusion about our sponsorship, affiliation, or endorsement of your company, product, or services.",
    },
    {
      text: "The TradeReply brand assets are our exclusive property, and any goodwill generated from their use accrues to TradeReply. When using brand assets on a webpage, please include embedded hyperlinks to our homepage (www.tradereply.com).",
    },
    {
      text: "TradeReply brand assets must be used respectfully and in accordance with our Terms of Service. Do not associate our brand assets to illicit or illegal activities, and avoid any use that could damage our products, services, reputation, or goodwill.",
    },
  ];
  return (
    <HomeLayout>
      <div className="trade_brand py-100">
        <Container>
          <div className="trade_brand_inner">
            <div className="trade_brand_heading text-center">
              <h1>Utilizing the TradeReply Brand</h1>
              <h5 className="my-4 py-2">
                These guidelines will ensure proper use of our brand.
              </h5>
              <div className="text-center">
                <CommonButton title="Download Assets" />
              </div>

              <h5 className="mt-4 pt-2">
                By using our brand assets, you accept our Trademark Usage
                Guidelines and understand that a violation of these terms will
                result in the termination or permission to use our brand assets.
              </h5>
            </div>
            <div className="divider"></div>
            <div className="trade_brand_content text-center text-md-start">
              <h4>The Official TradeReply Logo</h4>
              <h5 className="my-4 py-2">
                The TradeReply logo represents our strongest emblem. It
                signifies our commitment to quality, trust, and integrity. It
                should remain the most uniform element in all our
                communications.
              </h5>

              <Row className="px-lg-5">
                <Col xs={6} className="mt-4">
                  <div className="trade_brand_content_logo">
                    <img src={imglogo} alt="TradeReply main logo - primary brand emblem" />
                    <h5 className="mt-4">
                      This is the main TradeReply logo. It should be used like
                      this whenever possible.
                    </h5>
                  </div>
                </Col>
                <Col xs={6} className="mt-4">
                  <div className="trade_brand_content_logo">
                    <img src={imglogo1} alt="TradeReply alternative logo - optimized for white backgrounds" />
                    <h5 className="mt-4">
                      This version is an alternative if you are using the logo
                      on a white background.
                    </h5>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="divider"></div>
            <div className="trade_brand_content text-center text-md-start">
              <h4>Monotone Logos</h4>
              <h5 className="my-4 py-2">
                Sufficient contrast is necessary for the logo to be distinct
                from the background and to comply with ADA Accessibility
                Guidelines. Thus, a white logo on a white background is
                inappropriate. Suitable color combinations include the
                TradeReply white and blue, as well as black and blue.
              </h5>

              <Row>
                <Col xs={6} className="mt-4">
                  <div className="trade_brand_content_logo text-center">
                    <img src={mologo1} alt="TradeReply black logo - monochrome version" />
                    <img className="mt-4" src={mologo2} alt="TradeReply white and black logo - high contrast version" />
                  </div>
                </Col>
                <Col xs={6} className="mt-4">
                  <div className="trade_brand_content_logo text-center">
                    <img src={mologo3} alt="TradeReply white and cyan logo - alternative monochrome version" />
                    <img className="mt-4" src={mologo4} alt="TradeReply cyan and black logo - high contrast variation" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="divider"></div>
            <div className="trade_brand_content text-center text-md-start">
              <h4>Our Icon</h4>
              <h5 className="my-4 py-2">
                The iconic &apos;TR&apos; icon from the TradeReply logo can be
                used in situations where our main logo will not fit or be
                legible.
              </h5>

              <Row>
                <Col xs={4}>
                  <div className="trade_brand_content_logo text-center">
                    <img src={ourlogo1} alt="TradeReply square icon logo - white version" />
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="trade_brand_content_logo text-center">
                    <img src={ourlogo2} alt="TradeReply square icon logo - black version" />
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="trade_brand_content_logo text-center">
                    <img src={ourlogo3} alt="TradeReply square icon logo - white and cyan version" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="divider"></div>
            <div className="trade_brand_content">
              <h4>Trademark Usage Guidelines</h4>
              <h5 className="my-4 py-2">
                These guidelines define the correct usage and visual
                presentation of TradeReply brand assets. By using our brand
                assets, you accept and agree to follow these guidelines.
                Non-compliance may lead to the alteration or revocation of your
                permission to use any TradeReply brand assets. TradeReply
                reserves the right to modify these guidelines at any time.
              </h5>

              <ul className="trade_brand_content_list">
                {trademarkdata?.map((item, index) => (
                  <li key={index}>
                    <span>{<CheckGradientIcon />}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="divider"></div>
            <div className="trade_brand_content text-center">
              <h4>Need Additional Assistance?</h4>
              <h4 className="my-4 pb-2 py-md-2">Let Us Know Your Details</h4>
              <div className="text-center">
                <CommonButton title="Contact us" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default TradeBrand;
