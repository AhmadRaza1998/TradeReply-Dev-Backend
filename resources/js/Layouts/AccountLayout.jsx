import { Fragment, useState } from "react";
import Header from "@/Components/UI/Header";
import Footer from "@/Components/UI/Footer";
import AccountSidebar from "@/Components/common/Account/AccountSidebar";
import "../../css/account/AccountLayout.scss";

const AccountLayout = ({ children }) => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <Fragment>
      <Header />
      <div className="Account_layout">
        <div className="Account_layout_main">
          <div className="Account_layout_leftaside">
            <AccountSidebar
              onclick={toggleClass}
              isActive={isActive}
              toggleClass={toggleClass}
            />
          </div>
          <div className="Account_layout_rightaside">
            <div className="filter_toggle">
              <button
                onClick={toggleClass}
                className={"filter_toggle_btn " + (isActive ? "active" : "")}
              >
                <span></span>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default AccountLayout;
