import { Col, Container, ProgressBar, Row } from "react-bootstrap";

import RecentPost from "@/Components/common/Home/RecentPost";
import CommonSearch from "@/Components/UI/CommonSearch";
import CommonButton from "@/Components/UI/CommonButton";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import CustomBreadcrumb from "@/Components/UI/CustomBreadcrumb";
import useNavigate from "@/Hooks/useNavigate";
import { useEffect, useRef, useState } from "react";
import { RightArrowIcon } from "@/Components/img/svgIcons/SvgIcon";
import "../../../../css/Home/EducationDetail.scss";
import HomeLayout from "@/Layouts/HomeLayout";

const EducationDetail = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const sliderRef = useRef(null);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

  const isMobile = window.innerWidth <= 991; // Define your mobile breakpoint
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
  const recentpostdata = [
    {
      img: "/images/postimg4.jpg",
      title: "Announcing perils in paradise , Hearthstone’s Next Expansion",
      text: "Pack your bags for a trip to Hearthstone’s next expansion.",
    },
  ];
  const profitdata = [
    {
      img: "/images/singlepostimg.jpg",
      title: "Profit Deviation",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
    {
      img: "/images/singlepostimg.jpg",
      title: "Profit Deviation",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
    {
      img: "/images/singlepostimg.jpg",
      title: "Profit Deviation",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
    {
      img: "/images/singlepostimg.jpg",
      title: "Profit Deviation",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
    {
      img: "/images/singlepostimg.jpg",
      title: "Profit Deviation",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
    {
      img: "/images/singlepostimg.jpg",
      title: "Profit Deviation",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
    {
      img: "/images/singlepostimg.jpg",
      title: "Profit Deviation",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
    {
      img: "/images/singlepostimg.jpg",
      title: "Profit Deviation",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
  ];
  const value = 67;
  const valuetwo = 100;
  return (
    <HomeLayout>
      <div className="education_detail py-100">
        <Container>
          <div className="education_detail_inner">
            <Row>
              <Col xs={12} lg={4} xl={3} className="order-lg-last">
                <div className="education_detail_sidebar">
                  <div onClick={toggleClass} className="collapse_btn">
                    <RightArrowIcon />
                  </div>
                  <div
                    className={
                      isActive
                        ? "education_detail_sidebar_collapse active"
                        : "education_detail_sidebar_collapse"
                    }
                  >
                    <div className="collapse_wrap">
                      <div className="education_detail_sidebar_top">
                        <CommonButton
                          onClick={() => navigate("/education")}
                          title="Back to Education center"
                          className="w-100"
                        />
                        <div className="education_search mt-4">
                          <CommonSearch
                            placeholder="Search Key Terms"
                            icon={true}
                          />
                        </div>
                      </div>
                      <div className="education_detail_sidebar_article">
                        <Row className="justify-content-center">
                          <Col xs={6} sm={4} md={3} lg={6}>
                            <div className="education_detail_sidebar_article_data">
                              <h6>Current Article</h6>
                              <CircularProgressbarWithChildren value={value}>
                                <div className="CircularProgressbar_text">
                                  <h6>{value}%</h6>
                                  <h6 className="text-uppercase">Complete</h6>
                                </div>
                              </CircularProgressbarWithChildren>
                              ;
                            </div>
                          </Col>
                          <Col xs={6} sm={4} md={3} lg={6}>
                            <div className="education_detail_sidebar_article_data">
                              <h6>All Articles</h6>
                              {/* <CircularProgressbar value={valuetwo} maxValue={1} text={`${valuetwo * 100}%`} />; */}
                              <CircularProgressbarWithChildren value={valuetwo}>
                                <div className="CircularProgressbar_text">
                                  <h6>{valuetwo}%</h6>
                                  <h6 className="text-uppercase">Complete</h6>
                                </div>
                              </CircularProgressbarWithChildren>
                              ;
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="position-relative">
                        <button
                          className={`scroll-btn left ${disableLeft ? "disabled" : ""}`}
                          disabled={disableLeft}
                          onClick={scrollLeft}
                        >
                          <RightArrowIcon />
                        </button>
                        <div
                          ref={sliderRef}
                          className="education_detail_sidebar_profit"
                        >
                          {profitdata.map((item, index) => (
                            <div
                              key={index}
                              className="education_detail_sidebar_profit_inner"
                            >
                              <div className="d-flex education_detail_sidebar_profit_inner_detail">
                                <div className="education_detail_sidebar_profit_img">
                                  <img src={item.img} alt={item?.title ? `${item.title} - Trading metric visualization` : "Trading metric chart"} />
                                </div>
                                <div className="education_detail_sidebar_profit_text">
                                  <h6>{item.title}</h6>
                                  <p>{item.text}</p>
                                </div>
                              </div>
                              <div className="education_detail_sidebar_profit_progressbar">
                                <ProgressBar now={45} />
                              </div>
                            </div>
                          ))}
                        </div>
                        <button
                          className={`scroll-btn right ${disableRight ? "disabled" : ""}`}
                          disabled={disableRight}
                          onClick={scrollRight}
                        >
                          <RightArrowIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={8} xl={9} className="mt-0 mt-lg-0">
                <div className="education_detail_heading">
                  <button
                    onClick={() => navigate("/category")}
                    type="button"
                    className="education_detail_tag"
                  >
                    Stop loss
                  </button>
                  <h1>What is Stop Loss?</h1>
                </div>
                <div className="education_detail_breadcrumb">
                  <CustomBreadcrumb
                    to="/education"
                    linkname="Education Center"
                    pagename="Stop Loss"
                  />
                </div>
                <div className="education_detail_postimg">
                  <img src={"/images/singlepostimg.jpg"} alt="Dynamic article title : Educational content preview" />
                </div>

                <div className="education_detail_text">
                  <p>
                    In our ongoing commitment to promote financial education
                    worldwide, we&apos;ve partnered with yet another established
                    educational institution-EUDE Business School, one of
                    Madrid&apos;s most prestigious postgraduate institutions.
                  </p>
                  <p>
                    EUDE Business School is renowned internationally for its
                    postgraduate programs and has earned recognition in major
                    rankings and international media. Over the past 25
                  </p>
                </div>

                <div className="education_detail_author">
                  <button
                    onClick={() => navigate("/blog")}
                    type="button"
                    className="education_detail_author_btn"
                  >
                    Next Term
                  </button>
                  {recentpostdata.map((item, index) => (
                    <div key={index}>
                      <RecentPost
                        img={item.img}
                        title={item.title}
                        text={item.text}
                      />
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default EducationDetail;
