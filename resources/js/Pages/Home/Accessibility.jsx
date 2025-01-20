import { Container } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import HomeLayout from "@/Layouts/HomeLayout";
import "../../../css/Home/PrivacyPolicy.scss";

const Accessibility = () => {
  return (
    <HomeLayout>
      <div className="commonPolicy">
        <Container>
          <h1>TradeReply Accessibility Statement</h1>
          <p className="mt-3">
            At TradeReply LLC (“TradeReply”, “we”, “us”, or “our”), we are
            committed to providing an accessible and inclusive experience for
            all users, including those with disabilities. We continuously strive
            to enhance the accessibility of our platform to ensure everyone can
            access our services and information effectively.
          </p>
          <h4>Our Commitment</h4>
          <p>TradeReply is dedicated to:</p>
          <ul>
            <li>
              <strong>Meeting Standards:</strong> Adhering to the Web Content
              Accessibility Guidelines
              <a
                href="https://www.w3.org/TR/WCAG22/"
                target="_blank"
                rel="noreferrer"
              >
                <u>(WCAG)</u>
              </a>
              2.2 Level AA to ensure our site is accessible to a wide range of
              users with varying disabilities.
            </li>
            <li>
              <strong>Continuous Improvement:</strong> Regularly reviewing and
              improving our website’s accessibility features to provide a
              seamless experience for all users.
            </li>
            <li>
              <strong>User Feedback:</strong> Welcoming feedback from our users
              to help us identify and address any accessibility barriers.
            </li>
          </ul>
          <div className="inner_content">
            <h4>Accessibility Features</h4>
            <ul>
              <li>
                <strong>Keyboard Navigation:</strong> Our site is fully
                navigable via keyboard for users who cannot use a mouse,
                allowing users to navigate using the Tab and Shift + Tab keys.
              </li>
              <li>
                <strong>Screen Reader Compatibility:</strong> TradeReply is
                designed to be compatible with screen readers, ensuring users
                can access all information and services via audio format.
              </li>
              <li>
                <strong>Contrast and Color:</strong> We provide sufficient color
                contrast between text and backgrounds to enhance readability for
                users with visual impairments.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>Widgets</h4>
            <p>
              While we strive to make all aspects of TradeReply accessible, some
              third-party widgets on our site may present accessibility
              challenges beyond our immediate control. We are continuously
              working with third-party providers to improve the accessibility of
              these widgets. If you encounter any accessibility issues with any
              widget, please report them to us via our{" "}
              <Link href="#" target="_blank">
                Feedback Form
              </Link>
              . Your feedback is invaluable in helping us create a more
              inclusive platform.
            </p>
          </div>
          <div className="inner_content">
            <h4>Ongoing Efforts</h4>
            <ul>
              <li>
                <strong>Regular Audits:</strong> Conducting regular
                accessibility audits to identify and rectify potential barriers.
              </li>
              <li>
                <strong>Training:</strong> Providing ongoing training for our
                team to ensure we stay updated on best practices in web
                accessibility.
              </li>
              <li>
                <strong>Third-Party Reviews:</strong> Collaborating with
                third-party accessibility experts to review our site and make
                necessary improvements.
              </li>
            </ul>
          </div>
          <div className="inner_content">
            <h4>Feedback and Contact Information</h4>
            <p>
              We value your feedback and are committed to improving
              accessibility. If you encounter any barriers or have suggestions
              on how we can improve accessibility, please contact us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> accessibility@tradereply.com
              </li>
            </ul>
            <p>
              This email is strictly for accessibility issues. All other
              questions should be directed to our{" "}
              <Link href="#">Help Center</Link>. We aim to respond to
              accessibility-related inquiries within 5 business days.
            </p>
          </div>
          <div className="inner_content">
            <h4>Conclusion</h4>
            <p>
              TradeReply is committed to making our platform accessible to
              everyone. Your experience matters to us, and we are dedicated to
              ensuring our services meet your needs.
            </p>
          </div>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Accessibility;
