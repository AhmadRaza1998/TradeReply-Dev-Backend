import { Link } from "@inertiajs/react";

const LoginFooter = () => {
  return (
    <>
      <div className="login_footer text-center mt-4 mt-md-5">
        <div className="login_footer_links d-flex flex-wrap">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="#">Cookie Settings</Link>
        </div>
        <p>Copyright © 2025 TradeReply. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default LoginFooter;
