import { Col, Container, Row } from "react-bootstrap";
import CommonHeading from "@/Components/UI/CommonHeading";
import { Link } from "@inertiajs/react";
import "../../../css/Home/Sitemap.scss";
import HomeLayout from "@/Layouts/HomeLayout";

const sitemapbox = [
  {
    icon: "/images/icons/tradereply-rocket.svg",
    title: "Main Pages",
    content: [
      {
        text: "Homepage",
        to: "/",
      },
      {
        text: "Blog Sitemap",
        to: "/blog-sitemap",
      },
      {
        text: "Category",
        to: "/category",
      },
      {
        text: "Education Center",
        to: "/education",
      },
      {
        text: "Trading Calculator",
        to: "/trading-calculator",
      },
      {
        text: "Marketplace",
        to: "/marketplace",
      },
      {
        text: "Features",
        to: "/features",
      },
      {
        text: "Pricing",
        to: "/pricing",
      },
    ],
  },
  {
    icon: "/images/icons/tradereply-user-account.svg",
    title: "User Account",
    content: [
      {
        text: "Log In / Sign Up",
        to: "/login",
      },
      {
        text: "Help Center",
        to: "#",
      },
      {
        text: "Feedback & Bugs",
        to: "#",
      },
      {
        text: "Services Status",
        to: "/status",
      },
      {
        text: "Refer A Friend",
        to: "/refer-a-friend",
      },
      {
        text: "Partner Program",
        to: "/partner",
      },
      {
        text: "Advertising",
        to: "/advertising",
      },
    ],
  },
  {
    icon: "/images/icons/tradereply-user-account.svg",
    title: "Extra Resources",
    content: [
      {
        text: "Brand Assets",
        to: "/brand-assets",
      },
      {
        text: "Accessibility",
        to: "/accessibility",
      },
      {
        text: "Privacy Policy",
        to: "/privacy",
      },
      {
        text: "Cookies Policy",
        to: "/cookies",
      },
      {
        text: "Terms & Conditions",
        to: "/terms",
      },
      {
        text: "Disclaimer",
        to: "/disclaimer",
      },
      {
        text: "Brokers",
        to: "/brokers",
      },
    ],
  },
];
const Sitemap = () => {
  return (
    <HomeLayout>
      <div className="py-100 sitemap">
        <Container>
          <div className="sitemap_inner">
            <div className="sitemap_heading text-center">
              <CommonHeading title="TradeReply Sitemap" centered />
            </div>
            <div className="sitemap_content mt-4 mt-md-5">
              <Row>
                {sitemapbox?.map((item, index) => (
                  <Col key={index} sm={4} xs={12}>
                    <div className="sitemap_content_box">
                      <div className="sitemap_content_box_icon">
                        <img src={item?.icon} alt={item?.title ? `${item.title} section - TradeReply sitemap` : "TradeReply sitemap icon"} />
                      </div>
                      <h4>{item?.title}</h4>
                      <ul>
                        {item?.content?.map((item, index) => (
                          <li key={index}>
                            <Link href={item?.to}>{item.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Sitemap;
