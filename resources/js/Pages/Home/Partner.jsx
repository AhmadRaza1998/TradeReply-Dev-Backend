import { Container } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import HomeLayout from "@/Layouts/HomeLayout";
import "../../../css/Home/PrivacyPolicy.scss";

const PartnerProgram = () => {
  return (
    <HomeLayout>
      <section className="commonPolicy">
        <Container>
          <h1>Profit with TradeReply</h1>
          <p>
            Join our affiliate partner program and start earning commissions by
            promoting our trading analytics platform to your followers. As an
            affiliate partner, you have the opportunity to earn substantial
            rewards while helping traders and investors optimize their trading
            strategies with our advanced tools and insights.
          </p>
          <div className="inner_content">
            <h4>How It Works</h4>
            <p>
              When you join the TradeReply Partner Program, you will receive a
              unique referral link to share with your audience. Whenever someone
              subscribes to TradeReply using your link, you will earn a
              commission based on their subscription level for the first month.
            </p>
          </div>
          <div className="inner_content">
            <h4>Commission Structure</h4>
            <ul>
              <li>
                <strong>Essential Subscription: </strong> Earn $10 for each
                follower who subscribes to the Essential plan.
              </li>
              <li>
                <strong>Plus Subscription:</strong> Earn $20 for each follower
                who subscribes to the Plus plan.
              </li>
              <li>
                <strong>Premium Subscription:</strong> Earn $30 for each
                follower who subscribes to the Premium plan.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>Why Partner with TradeReply?</h4>
            <ul>
              <li>
                <strong>Referral Benefit for New Users: </strong> The person you
                refer will receive $15 to apply towards the cost of their new
                TradeReply subscription plan.
              </li>
              <li>
                <strong>High Commissions: </strong> We offer an astounding 66%
                commission rate! Typical affiliate programs offer 10-20%
                commission.
              </li>
              <li>
                <strong>90-Day Conversion Window:</strong> Most affiliate
                programs offer a 30 to 45-day conversion window. We offer 90
                days, because we want to make sure you succeed as our partner.
              </li>
              <li>
                <strong>Fast Payments:</strong> You will be paid within 30 days
                after the end of each month.
              </li>
              <li>
                <strong>Partner Support:</strong> Access a range of promotional
                materials and dedicated support to help you succeed in your
                affiliate marketing efforts.
              </li>
              <li>
                <strong>Real-Time Tracking:</strong> Monitor your referrals and
                earnings in real-time through our partner dashboard.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <p>
              <Link className="btn-style green-btn" href="#">
                Join & Earn Today
              </Link>
            </p>
            <p>
              Complete details in our{" "}
              <Link href="/partner-rules">Partner program rules</Link>
            </p>
          </div>
        </Container>
      </section>
    </HomeLayout>
  );
};

export default PartnerProgram;
