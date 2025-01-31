import { Container, Nav, Tab } from "react-bootstrap";
import CommonHeading from "@/Components/UI/CommonHeading";
import {
  BrashIcon,
  ChartIcon,
  GraphsIcon,
  KpiIcon,
  LearningIcon,
  RealTimeIcon,
  RightArrowIcon,
} from "@/Components/img/svgIcons/SvgIcon";
import { useEffect, useRef, useState } from "react";
import NavLink from "@/Components/UI/NavLink";
import "../../../../css/Home/HowitWorks.scss";

const HowitWorks = () => {
  const sliderRef = useRef(null);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

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
      smoothScroll(-240); // Scroll left by 240px
    }
  };

  const scrollRight = () => {
    if (isMobile) {
      smoothScroll(240); // Scroll right by 240px
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
      <section className="howit_works">
        <Container>
          <div className="howit_works_content">
            <CommonHeading heading="How it works" centered />
          </div>

          <div className="icons_big_tabs">
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <div className="position-relative">
                <button
                  className={`scroll-btn left ${disableLeft ? "disabled" : ""}`}
                  disabled={disableLeft}
                  onClick={scrollLeft}
                >
                  <RightArrowIcon />
                </button>
                <Nav ref={sliderRef} variant="pills" className="big_tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="1">
                      <span className="tabs_icon">
                        <KpiIcon />
                      </span>
                      Sign Up
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="2">
                      <span className="tabs_icon">
                        <GraphsIcon />
                      </span>
                      Import Data
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="3">
                      <span className="tabs_icon">
                        <ChartIcon />
                      </span>
                      Customize
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="4">
                      <span className="tabs_icon">
                        <RealTimeIcon />
                      </span>
                      Analyze
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="5">
                      <span className="tabs_icon">
                        <BrashIcon />
                      </span>
                      Optimize
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="6">
                      <span className="tabs_icon">
                        <LearningIcon />
                      </span>
                      Informed
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <button
                  className={`scroll-btn right ${disableRight ? "disabled" : ""}`}
                  disabled={disableRight}
                  onClick={scrollRight}
                >
                  <RightArrowIcon />
                </button>
              </div>
              <Tab.Content>
                <Tab.Pane eventKey="1">
                  <div className="howit_content d-md-flex align-items-center">
                    <figure className="">
                      <img src="/images/tradereply-improve-trading.svg" alt="Account creation made easy with a simple sign-up process" />
                    </figure>
                    <div className="howit_content_text">
                      <h3>Join Now</h3>
                      <p>
                        Create your account in minutes. Simply provide your
                        email, choose a password, and you&apos;re ready to
                        start.
                      </p>
                      <NavLink href="/pricing" className="btn-style green-btn">
                        {" "}
                        Optimize Trading
                      </NavLink>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <div className="howit_content d-md-flex align-items-center">
                    <figure className="">
                      <img src="/images/tradereply-improve-trading.svg" alt="Seamless trade data import from multiple sources" />
                    </figure>
                    <div className="howit_content_text">
                      <h3>Import Trading Data</h3>
                      <p>
                        Upload your historical trading data from various sources
                        or manually input your trades. Our platform supports
                        multiple file formats for easy integration.
                      </p>
                      <NavLink href="/pricing" className="btn-style green-btn">
                        {" "}
                        Optimize Trading
                      </NavLink>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <div className="howit_content d-md-flex align-items-center">
                    <figure className="">
                      <img src="/images/tradereply-improve-trading.svg" alt="Personalize your trading dashboard with key metrics" />
                    </figure>
                    <div className="howit_content_text">
                      <h3>Customize Your Dashboard</h3>
                      <p>
                        Use our intuitive tools to build a personalized
                        dashboard. Select the KPIs, charts, and widgets that
                        matter most to your trading strategy.
                      </p>
                      <NavLink href="/pricing" className="btn-style green-btn">
                        {" "}
                        Optimize Trading
                      </NavLink>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <div className="howit_content d-md-flex align-items-center">
                    <figure className="">
                      <img src="/images/tradereply-improve-trading.svg" alt="Gain real-time insights with powerful trade analytics" />
                    </figure>
                    <div className="howit_content_text">
                      <h3>Analyze Your Performance</h3>
                      <p>
                        Get real-time insights and detailed analytics on your
                        trades. Track performance metrics, visualize trends, and
                        identify opportunities for optimization.
                      </p>
                      <NavLink href="/pricing" className="btn-style green-btn">
                        {" "}
                        Optimize Trading
                      </NavLink>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <div className="howit_content d-md-flex align-items-center">
                    <figure className="">
                      <img src="/images/tradereply-improve-trading.svg" alt="Refine and enhance your trading strategies" />
                    </figure>
                    <div className="howit_content_text">
                      <h3>Optimize Strategies</h3>
                      <p>
                        Utilize our advanced tools to refine your trading
                        strategies. Test different scenarios, monitor results,
                        and continuously improve your approach.
                      </p>
                      <NavLink href="/pricing" className="btn-style green-btn">
                        {" "}
                        Optimize Trading
                      </NavLink>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="6">
                  <div className="howit_content d-md-flex align-items-center">
                    <figure className="">
                      <img src="/images/tradereply-improve-trading.svg" alt="Access in-depth trading knowledge and resources" />
                    </figure>
                    <div className="howit_content_text">
                      <h3>Stay Informed</h3>
                      <p>
                        Access comprehensive industry definitions and
                        educational resources to enhance your trading knowledge
                        and skills.
                      </p>
                      <NavLink href="/pricing" className="btn-style green-btn">
                        {" "}
                        Optimize Trading
                      </NavLink>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HowitWorks;
