import NavLink from "@/Components/UI/NavLink";
import {
  CalculatorIcon,
  PlusIcon,
  RightArrowIcon,
} from "@/Components/img/svgIcons/SvgIcon";
import { useEffect, useRef, useState } from "react";
import "../../../../css/dashboard/Sidebar.scss";
import { usePage } from "@inertiajs/react";
import { get } from "lodash";
import { SYSTEM_ROLES } from "@/constants";

const Sidebar = () => {
  const sliderRef = useRef(null);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);
  const props = usePage();
  const isAdmin = get(props, "props.auth.user.role") === SYSTEM_ROLES.ADMIN;

  const isMobile = (window.innerWidth = 768); // Define your mobile breakpoint
  const smoothScroll = (amount) => {
    if (sliderRef.current) {
      const start = sliderRef.current.scrollLeft;
      const end = start + amount;
      const duration = 300; // Duration in ms
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Ensure we don’t overshoot the duration
        const scrollAmount = start + (end - start) * progress;

        sliderRef.current.scrollLeft = scrollAmount;

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  };
  const scrollLeft = () => {
    if (isMobile) {
      smoothScroll(-260); // Scroll left by 260px
    }
  };

  const scrollRight = () => {
    if (isMobile) {
      smoothScroll(260); // Scroll right by 260px
    }
  };
  // Check scroll position
  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setDisableLeft(scrollLeft === 0);
      setDisableRight(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  // Add event listener to check scroll position when component mounts
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", checkScrollPosition);
    }
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);
  return (
    <>
      <div className="admin_sidebar">
        <button
          className={`scroll-btn left ${disableLeft ? "disabled" : ""}`}
          disabled={disableLeft}
          onClick={scrollLeft}
        >
          <RightArrowIcon />
        </button>
        <div className="admin_sidebar_wrapper" ref={sliderRef}>
          {isAdmin ? (
            adminRoutes.map((item) => (
              <div className="linkList" key={item.path}>
                <NavLink href={item.path}>
                  <span className="linktext">{item.name.slice(0, 1)}</span>{" "}
                  <span className="fulltext"> {item.name}</span>
                </NavLink>
              </div>
            ))
          ) : (
            <>
              <div className="linkList">
                <div className="linkList">
                  <NavLink href="/dashboard/trade-manager">
                    <span className="linktext">TM</span>{" "}
                    <span className="fulltext">Trade Manager</span>
                  </NavLink>
                </div>

                <NavLink href="/dashboard/strategy-manager">
                  <span className="linktext">SM</span>{" "}
                  <span className="fulltext">Strategy Manager</span>
                </NavLink>
              </div>
              <div className="linkList">
                <NavLink href="/trading-calculator">
                  <span className="linktext">
                    <CalculatorIcon />
                  </span>{" "}
                  <span className="fulltext">Trading Calculators</span>
                </NavLink>
              </div>
              <div className="linkList">
                <NavLink href="/dashboard">
                  <span className="linktext">1</span>{" "}
                  <span className="fulltext"> Dashboard1</span>
                </NavLink>
              </div>
            </>
          )}

          {/* <div className="linkList">
            <NavLink href="/dashboard">
              <span className="linktext">
                <PlusIcon />
              </span>{" "}
              <span className="fulltext">Add Dashboard</span>
            </NavLink>
          </div> */}
        </div>

        <button
          className={`scroll-btn right ${disableRight ? "disabled" : ""}`}
          disabled={disableRight}
          onClick={scrollRight}
        >
          <RightArrowIcon />
        </button>
      </div>
    </>
  );
};

const adminRoutes = [
  // Admin Routes
  { name: "Blog", path: "/dashboard/blog-manager", role: SYSTEM_ROLES.ADMIN },
  {
    name: "Education",
    path: "/dashboard/education-manager",
    role: SYSTEM_ROLES.ADMIN,
  },
  {
    name: "Category",
    path: "/dashboard/category-manager",
    role: SYSTEM_ROLES.ADMIN,
  },
];

export default Sidebar;
