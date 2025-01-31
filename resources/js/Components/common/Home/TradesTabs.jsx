import { Container, Nav, Tab } from "react-bootstrap";
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
import "../../../../css/Home/TradesTabs.scss";

const TradesTabs = ({ className }) => {
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
      <section className={`trades_tabs ${className}`}>
        <div className="trades_tabs_wrapper">
          <div className="icons_big_tabs">
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Container>
                <div className="position-relative">
                  <button
                    className={`scroll-btn left ${
                      disableLeft ? "disabled" : ""
                    }`}
                    disabled={disableLeft}
                    onClick={scrollLeft}
                  >
                    <RightArrowIcon />
                  </button>
                  <Nav variant="pills" ref={sliderRef} className="big_tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="1">
                        <span className="tabs_icon">
                          <KpiIcon />
                        </span>
                        KPIs
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">
                        <span className="tabs_icon">
                          <GraphsIcon />
                        </span>
                        Graphs
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3">
                        <span className="tabs_icon">
                          <ChartIcon />
                        </span>
                        Charts
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="4">
                        <span className="tabs_icon">
                          <RealTimeIcon />
                        </span>
                        Real-Time
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="5">
                        <span className="tabs_icon">
                          <BrashIcon />
                        </span>
                        Customize
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="6">
                        <span className="tabs_icon">
                          <LearningIcon />
                        </span>
                        Learning
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <button
                    className={`scroll-btn right ${
                      disableRight ? "disabled" : ""
                    }`}
                    disabled={disableRight}
                    onClick={scrollRight}
                  >
                    <RightArrowIcon />
                  </button>
                </div>
              </Container>
              <Tab.Content>
                <Tab.Pane eventKey="1">
                  <div className="trades_tabs_content text-center">
                    <h3>
                      Unlock Insights with Advanced Trading KPIs and Metrics
                    </h3>
                    <figure className="mt-4 pt-xl-3">
                      <img src="/images/tabs_img.jpg" alt="Gain deep insights with advanced KPIs and trade performance metrics" />
                    </figure>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <div className="trades_tabs_content text-center">
                    <h3>Visualize Trade Performance with Interactive Graphs</h3>
                    <figure className="mt-4 pt-xl-3">
                      <img src="/images/tabs_img.jpg" alt="Analyze and improve trade performance using interactive graphs" />
                    </figure>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <div className="trades_tabs_content text-center">
                    <h3>Track Your Trading Statistics Using Dynamic Charts</h3>
                    <figure className="mt-4 pt-xl-3">
                      <img src="/images/tabs_img.jpg" alt="Monitor trading statistics with real-time, dynamic charts" />
                    </figure>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <div className="trades_tabs_content text-center">
                    <h3>
                      Harness Real-Time Data for Informed Trading Decisions
                    </h3>
                    <figure className="mt-4 pt-xl-3">
                      <img src="/images/tabs_img.jpg" alt="Use live data for informed trading decisions and strategy adjustments" />
                    </figure>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <div className="trades_tabs_content text-center">
                    <h3>
                      Customize Dashboard for Personalized Trading Insights
                    </h3>
                    <figure className="mt-4 pt-xl-3">
                      <img src="/images/tabs_img.jpg" alt="Personalize your dashboard with custom trading insights and analytics" />
                    </figure>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="6">
                  <div className="trades_tabs_content text-center">
                    <h3>
                      Master Industry Definitions to Enhance Trading Knowlege
                    </h3>
                    <figure className="mt-4 pt-xl-3">
                      <img src="/images/tabs_img.jpg" alt="Enhance trading knowledge with key industry definitions and concepts" />
                    </figure>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </section>
    </>
  );
};

export default TradesTabs;
