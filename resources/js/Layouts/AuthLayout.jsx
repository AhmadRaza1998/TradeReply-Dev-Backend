import { Container } from "react-bootstrap";
import "../../css/auth/authGlobals.scss";

export default function AuthLayout({ children }) {
  return (
    <div className="loginCommon">
      <Container fluid className="px-0">
        <div className="mx-0 d-flex flex-wrap">
          <div className="px-0 referralCol d-none d-lg-flex">
            <img src="/images/tradereply-financial-tools.jpg" alt="Access your TradeReply account – Log in, sign up, or recover credentials" />
          </div>
          <div className="px-0 loginCol">{children}</div>
        </div>
      </Container>
    </div>
  );
}
