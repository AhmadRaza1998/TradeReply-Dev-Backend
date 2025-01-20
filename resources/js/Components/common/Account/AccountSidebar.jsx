import {
  CartSideIcon,
  DollerIcon,
  LinkIcon,
  LockIcon,
  PaymentIcon,
  RightArrowIcon,
  SecurityIcon,
  SideEyeIcon,
  UserIcon,
} from "@/Components/img/svgIcons/SvgIcon";
import { Logo } from "@/Components/img/svgIcons/SvgIcon";
import NavLink from "@/Components/UI/NavLink";
import "../../../../css/account/AccountSidebar.scss";

const navItems = [
  { href: "/account", label: "Account Overview", icon: <SideEyeIcon /> },
  { href: "/account/details", label: "Account Details", icon: <UserIcon /> },
  {
    href: "/account/subscriptions",
    label: "Subscriptions",
    icon: <DollerIcon />,
  },
  { href: "/account/security", label: "Security", icon: <SecurityIcon /> },
  {
    href: "/account/privacy",
    label: "Privacy & Communication",
    icon: <LockIcon />,
  },
  { href: "/account/connections", label: "Connections", icon: <LinkIcon /> },
  {
    href: "/account/payments",
    label: "Payment Methods",
    icon: <PaymentIcon />,
  },
  {
    href: "/account/transactions",
    label: "Transaction History",
    icon: <CartSideIcon />,
  },
];

const AccountSidebar = ({ className, isActive, toggleClass }) => {
  return (
    <>
      <div
        onClick={toggleClass}
        className={isActive ? "d-xl-none sidebar_backdrop" : " d-xl-none"}
      />
      <div
        className={`Account_sidebar ${isActive ? "opensidebar" : ""} ${className}`}
      >
        <div className="Account_sidebar_head">
          <NavLink href="/" className="headLogo d-block d-xl-none">
            <Logo />
          </NavLink>
          <div className="filter_toggle">
            <button
              onClick={toggleClass}
              className={"filter_toggle_btn " + (isActive ? "active" : "")}
            >
              <span></span>
            </button>
          </div>
        </div>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>
                <span>{item.icon}</span> {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="Account_sidebar_bottom_link">
          <ul>
            <li>
              <NavLink href="/refer-a-friend">
                Refer a friend <RightArrowIcon />
              </NavLink>
            </li>
            <li>
              <NavLink href="#">
                Affiliate Center <RightArrowIcon />
              </NavLink>
            </li>
            <li>
              <NavLink href="#">
                Help Center <RightArrowIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccountSidebar;
