import { Col, Container, Row } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import { Logo } from "../img/svgIcons/SvgIcon";
import "../../../css/common/Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="site_footer">
        <div className="site_footer_inner">
          <Container>
            <Row className="gx-xl-5">
              <Col md={4} sm={12} xs={12}>
                <div className="site_footer_content">
                  <div className="site_footer_logo">
                    <Link href="/">
                      <Logo />
                    </Link>
                  </div>
                  <p>
                    TradeReply is an advanced analytics suite designed
					for crypto and stock traders to input historical trading
					data and leverage powerful visuals, graphs, and metrics to
					optimize and develop effective trade strategies with real-time
					insights.
                  </p>
                </div>
              </Col>
              <Col md={8} sm={12} xs={12}>
                <Row>
                  <Col md={4} sm={4} xs={6}>
                    <div className="site_footer_links">
                      <h4>Company</h4>
                      <ul>
                        <li>
                          <Link href="#">Contact</Link>
                        </li>
                        <li>
                          <Link href="/brand-assets">Brand Assets</Link>
                        </li>
                        <li>
                          <Link href="/accessibility">Accessibility</Link>
                        </li>
                        <li>
                          <Link href="/privacy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/cookies">Cookies Policy</Link>
                        </li>
                        <li>
                          <Link href="/terms">Terms & Conditions</Link>
                        </li>
                        <li>
                          <Link href="/disclaimer">Disclaimer</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={4} sm={4} xs={6}>
                    <div className="site_footer_links">
                      <h4>Partners</h4>
                      <ul>
                        <li>
                          <Link href="/refer-a-friend">Refer a Friend</Link>
                        </li>
                        <li>
                          <Link href="/partner">Partner Program</Link>
                        </li>
                        <li>
                          <Link href="/advertising">Advertising</Link>
                        </li>
                        <li>
                          <Link href="/features">Features</Link>
                        </li>
                        <li>
                          <Link href="/education">Education</Link>
                        </li>
                        <li>
                          <Link href="/brokers">Brokers</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={4} sm={4} xs={6}>
                    <div className="site_footer_links">
                      <h4>Community</h4>
                      <ul>
                        <li>
                          <Link href="#">Help Center</Link>
                        </li>
                        <li>
                          <Link href="/sitemap">Sitemap</Link>
                        </li>
                        <li>
                          <Link href="/pricing">Pricing</Link>
                        </li>
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link href="/status">Status</Link>
                        </li>
                        <li>
                          <Link href="#">Feedback/Bugs</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="site_footer_copyright">
          <Container>
            <p>Copyright © 2025 TradeReply. All Rights Reserved.</p>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
