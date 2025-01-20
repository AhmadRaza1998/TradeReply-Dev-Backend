import { Container } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import HomeLayout from "@/Layouts/HomeLayout";
import "../../../css/Home/PrivacyPolicy.scss";

const Advertising = () => {
  return (
    <HomeLayout>
      <div className="commonPolicy">
        <Container>
          <h1>TradeReply Advertising Information</h1>
          <p>
            Welcome to TradeReply, the premier platform for trading analytics
            and insights. Partner with us to reach a highly engaged audience of
            traders and investors who are passionate about optimizing their
            trading strategies.
          </p>
          <h4>Why Advertise with TradeReply?</h4>
          <p>
            <strong>Engaged Audience</strong> Our users are actively involved in
            trading and seek advanced tools and insights to enhance their
            performance. By advertising with us, you reach a dedicated community
            of traders and investors who are eager to learn and grow.
          </p>
          <p>
            <strong>Targeted Reach </strong> Leverage our sophisticated
            targeting options to reach specific segments of our audience based
            on their trading preferences, asset interests (stocks,
            cryptocurrencies), and engagement levels. Ensure your message
            resonates with the right audience at the right time.
          </p>
          <p>
            <strong>High Visibility</strong> Your ads will be prominently
            displayed across our platform, including our homepage, dashboard,
            blog, and educational sections. Maximize your brand exposure with
            high-impact ad placements that capture user attention.
          </p>
          <div className="inner_content">
            <h4>Advertising Options</h4>
            <p>
              <strong>Display Ads</strong> Capture the attention of our users
              with visually engaging display ads. We offer various placement
              options to ensure maximum visibility and impact:
            </p>
            <ul>
              <li>
                <strong>Homepage Banner:</strong> A high-visibility location for
                maximum exposure.
              </li>
              <li>
                <strong>Dashboard Ads:</strong> Integrated into user dashboards,
                ensuring traders see your message while analyzing their
                performance.
              </li>
              <li>
                <strong>Blog and Educational Sections:</strong> Reach users
                seeking knowledge and insights with ads placed within articles
                and tutorials.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>Premium Subscriber Marketplace</h4>
            <p>
              Please note that other types of promotional content are available
              only through our Premium subscription with marketplace seller
              privileges, which include:
            </p>
            <ul>
              <li>
                <strong>Courses:</strong> Create and sell educational courses to
                our trading community.
              </li>
              <li>
                <strong>E-books:</strong> Offer your e-books and publications
                directly to our users.
              </li>
              <li>
                <strong>Webinars and Events: </strong> Host webinars and virtual
                events to connect with our audience.
              </li>
              <li>
                <strong>Dashboard & Configuration Imports:</strong> Share and
                sell custom trading dashboards and configurations.
              </li>
            </ul>
            <p>
              These options are part of our marketplace offerings and are not
              considered standard advertising.
            </p>
          </div>
          <div className="inner_content">
            <h4>What We Do Not Offer</h4>
            <p>TradeReply does not offer the following types of advertising:</p>
            <ul>
              <li>Guest Posts</li>
              <li>Email Campaigns</li>
              <li>Special Projects</li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>Audience Demographics</h4>
            <ul>
              <li>
                <strong>Active Traders:</strong> Individuals actively trading
                stocks and cryptocurrencies.
              </li>
              <li>
                <strong>Investors:</strong> Long-term investors seeking to
                optimize their portfolios.
              </li>
              <li>
                <strong>Financial Enthusiasts:</strong> Individuals passionate
                about finance, market trends, and trading strategies.
              </li>
              <li>
                <strong>Educators and Influencers:</strong> Thought leaders in
                the trading community who share insights and strategies with
                their followers.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>For advertising inquiries:</h4>
            <p>
              <Link href="#" className="btn-primary">
                Contact Us
              </Link>
            </p>
            <p>
              We look forward to partnering with you and helping you reach your
              marketing goals through TradeReply.
            </p>
          </div>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Advertising;
