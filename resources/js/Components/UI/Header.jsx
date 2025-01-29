import { useState, useRef } from "react";
import { Container, Navbar, Dropdown } from "react-bootstrap";
import {
  HelpIcon,
  PartnershipIcon,
  ReferIcon,
  SettingIcon,
  SignoutIcon,
  UserIcons,
  Logo,
} from "../img/svgIcons/SvgIcon";
import CommonButton from "./CommonButton";
import NavLink from "./NavLink";
import { usePage } from "@inertiajs/react";
import "../../../css/common/Header.scss";
import { isEmpty } from "lodash";
import useNavigate from "@/Hooks/useNavigate";

const Header = () => {
  const user = usePage().props.auth.user;
  const signIn = !isEmpty(user);

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  const toggleClass = () => setIsActive((prev) => !prev);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleNavClick = () => {
    if (ref.current && document.body.clientWidth < 1220) {
      ref.current.click();
    }
  };

  const renderUserDropdown = () => <UserDropdown signIn={signIn} />;

  return (
    <header className={isActive ? "siteHeader openmenu" : "siteHeader"}>
      <Navbar expand="xl">
        <Container>
          <div className="d-flex align-items-center">
            <Navbar.Toggle ref={ref} onClick={toggleClass} />
            <NavLink href="/" className="brandLogo">
              <Logo />
            </NavLink>
          </div>

          <Navbar.Collapse className="justify-content-center">
            <div className="d-flex justify-content-center align-items-center openmenuSidebar">
              <NavLink
                onClick={handleNavClick}
                href="/"
                className="brandLogo d-block d-xl-none"
              >
                <Logo />
              </NavLink>
              <Navbar.Toggle ref={ref} onClick={toggleClass} />
            </div>

            <div className="navMenu d-xl-flex">
              <NavLink
                onClick={handleNavClick}
                href="/marketplace"
                className="nav-link"
              >
                Marketplace
              </NavLink>

              <div
                className={`nav-item common_dropdown dropdown ${isOpen ? "show" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={toggleDropdown}
              >
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  Products
                </NavLink>

                <div
                  className={`dropdown-menu ${isOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <NavLink
                    onClick={handleNavClick}
                    href="/trading-calculator"
                    className="nav-link"
                  >
                    Trading Calculators
                  </NavLink>
                  <NavLink
                    onClick={handleNavClick}
                    href="/features"
                    className="nav-link"
                  >
                    Features
                  </NavLink>
                  <NavLink
                    onClick={handleNavClick}
                    href="/pricing"
                    className="nav-link"
                  >
                    Pricing
                  </NavLink>
                </div>
              </div>

              <NavLink
                onClick={handleNavClick}
                href="/education"
                className="nav-link"
              >
                Education
              </NavLink>
              <NavLink
                onClick={handleNavClick}
                href="/blog"
                className="nav-link"
              >
                Blog
              </NavLink>

              <div className="languageMenu d-xl-none">
                {renderUserDropdown()}
                <NavLink href="/login" className="nav-link">
                  <span className="me-3">
                    <SignoutIcon />
                  </span>
                  {signIn ? "Sign Out" : "Log In"}
                </NavLink>
                <NavLink href="#" className="nav-link">
                  <span className="me-3">
                    <HelpIcon />
                  </span>
                  Help Center
                </NavLink>
                <NavLink href="/partner" className="nav-link white_stroke_icon">
                  <span className="me-3">
                    <PartnershipIcon />
                  </span>
                  Partnership
                </NavLink>
                <NavLink href="/refer-a-friend" className="nav-link">
                  <span className="me-3">
                    <ReferIcon />
                  </span>
                  Refer A Friend
                </NavLink>
              </div>
            </div>
          </Navbar.Collapse>

          {isActive && (
            <div
              onClick={handleNavClick}
              className="sidebar_backdrop d-xl-none"
            />
          )}

          <div className="d-flex align-items-center justify-content-between">
            <div className="d-none d-xl-block">
              {/* LanguageDropdown Component Here */}
            </div>
            <div className="mx-2 mx-xl-4 pe-xl-4 d-none d-xl-block">
              {renderUserDropdown()}
            </div>
            {isEmpty(user) && (
              <CommonButton
                onClick={() => navigate("/pricing")}
                className="gradient-btn"
                title="Get started"
              />
            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

const UserDropdown = ({ signIn }) => (
  <Dropdown align="end" className="common_dropdown userDropdown">
    <Dropdown.Toggle variant="" id="dropdown-basic">
      <span className="user_icon">
        <UserIcons />
      </span>
      <span className="user_name"></span>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {signIn ? (
        <>
          <NavLink
            href={route("logout")}
            method="post"
            as="button"
            className="dropdown-item"
          >
            <SignoutIcon /> Sign Out
          </NavLink>
          <NavLink href="/account" className="dropdown-item white_icon">
            <SettingIcon /> Account Settings
          </NavLink>
          <NavLink href="/dashboard" className="dropdown-item white_icon">
            <SettingIcon /> Dashboard
          </NavLink>
        </>
      ) : (
        <>
          <NavLink href="/login" className="dropdown-item">
            <SignoutIcon /> Log In
          </NavLink>
          <NavLink href="#" className="dropdown-item">
            <HelpIcon /> Help Center
          </NavLink>
          <NavLink href="/partner" className="dropdown-item white_stroke_icon">
            <PartnershipIcon /> Partnership
          </NavLink>
          <NavLink href="/refer-a-friend" className="dropdown-item">
            <ReferIcon /> Refer A Friend
          </NavLink>
        </>
      )}
    </Dropdown.Menu>
  </Dropdown>
);

export default Header;
