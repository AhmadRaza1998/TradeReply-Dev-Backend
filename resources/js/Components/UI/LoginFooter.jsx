import { Link } from "@inertiajs/react";

const LoginFooter = () => {
  return (
    <>
      <div className="login_footer text-center mt-4 mt-md-5">
        <div className="login_footer_links d-flex flex-wrap">
          <Link href="/privacy" target="_blank" rel="noopener noreferrer">Privacy</Link>
          <Link href="/terms" target="_blank" rel="noopener noreferrer">Terms</Link>
          <Link href="/disclaimer" target="_blank" rel="noopener noreferrer">Disclaimer</Link>
          <Link href="/cookies" target="_blank" rel="noopener noreferrer">Cookies</Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">Cookie Settings</Link>
        </div>
        <p>Copyright © 2025 TradeReply. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default LoginFooter;
