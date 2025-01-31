import { noop } from "lodash";

const ThirdPartyLogin = () => {
  return (
    <div className="thirdParty_login d-flex justify-content-center">
      <button onClick={noop} className="thirdParty_login_btn">
        <img src="/images/icons/tradereply-google-icon.svg" alt="Continue with Google (Log in or create an account)" />
      </button>
      <button onClick={noop} className="thirdParty_login_btn">
        <img src="/images/icons/tradereply-facebook-icon.svg" alt="Continue with Facebook (Log in or create an account)" />
      </button>
      <button onClick={noop} className="thirdParty_login_btn">
        <img src="/images/icons/tradereply-apple-icon.svg" alt="Continue with Apple (Log in or create an account)" />
      </button>
    </div>
  );
};

export default ThirdPartyLogin;
