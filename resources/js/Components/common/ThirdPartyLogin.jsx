import { noop } from "lodash";

const ThirdPartyLogin = () => {
  return (
    <div className="thirdParty_login d-flex justify-content-center">
      <button onClick={noop} className="thirdParty_login_btn">
        <img src="/images/icons/google_icon.svg" alt="icon" />
      </button>
      <button onClick={noop} className="thirdParty_login_btn">
        <img src="/images/icons/fb_icon.svg" alt="icon" />
      </button>
      <button onClick={noop} className="thirdParty_login_btn">
        <img src="/images/icons/apple_icon.svg" alt="icon" />
      </button>
    </div>
  );
};

export default ThirdPartyLogin;
