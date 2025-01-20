import { Col, Container, Row } from "react-bootstrap";
import CommonSearch from "@/Components/UI/CommonSearch";
import CustomPagination from "@/Components/UI/CustomPagination";
import useNavigate from "@/Hooks/useNavigate";
import RecentPost from "@/Components/common/Home/RecentPost";
import { useEffect, useRef, useState } from "react";
import { RightArrowIcon } from "@/Components/img/svgIcons/SvgIcon";
import "../../../css/Home/Category.scss";
import HomeLayout from "@/Layouts/HomeLayout";

const Category = (props) => {
  console.log('props',props);
  
  const navigate = useNavigate();
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
      smoothScroll(-100); // Scroll left by 100px
    }
  };

  const scrollRight = () => {
    if (isMobile) {
      smoothScroll(100); // Scroll right by 100px
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
      img: "/images/postimg2.jpg",
      coinname: "Bitcoin",
      title: "How the Bitcoin Having Affected Big Banking",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices dictum nulla, at luctus nisl molestie vel. Maecenas in vulputate metus. Quisque nec ipsum venenatis, blandit libero at, dignissim tortor. Praesent vitae risus orci. In condimentum euismod",
    },
    {
      img: "/images/postimg4.jpg",
      coinname: "Bitcoin",
      title: "How the Bitcoin Having Affected Big Banking",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices dictum nulla, at luctus nisl molestie vel. Maecenas in vulputate metus. Quisque nec ipsum venenatis, blandit libero at, dignissim tortor. Praesent vitae risus orci. In condimentum euismod",
    },
  ];
  return (
    <HomeLayout>
      <section className="categorySec py-100">
        <Container>
          <div className="categorySec_heading text-center">
            <h1>TradeReply Categories</h1>
            <p>Browse categories to find relevant articles and insights.</p>

            <div className="categorySec_search">
              <CommonSearch placeholder="Search for terms" icon={true} />
            </div>
          </div>
          <div className="categorySec_fliters">
            <div className="categorySec_fliters_inner">
              <button
                className={`scroll-btn left ${disableLeft ? "disabled" : ""}`}
                disabled={disableLeft}
                onClick={scrollLeft}
              >
                <RightArrowIcon />
              </button>
              <div className="slider" ref={sliderRef}>
                <div className="categorySec_fliters_boxbutton active">All</div>
                <div className="categorySec_fliters_boxbutton selected">
                  Bitcoin
                </div>
                <div className="categorySec_fliters_boxbutton">Crypto</div>
                <div className="categorySec_fliters_boxbutton">Investing</div>
                <div className="categorySec_fliters_boxbutton">Complex</div>
                <div className="categorySec_fliters_boxbutton">Finance</div>
                <div className="categorySec_fliters_boxbutton">Stocks</div>
                <div className="categorySec_fliters_boxbutton">Bitcoin</div>
                <div className="categorySec_fliters_boxbutton">Crypto</div>
                <div className="categorySec_fliters_boxbutton">Investing</div>
                <div className="categorySec_fliters_boxbutton">Complex</div>
                <div className="categorySec_fliters_boxbutton">Finance</div>
                <div className="categorySec_fliters_boxbutton">Stocks</div>
              </div>
              <button
                className={`scroll-btn right ${disableRight ? "disabled" : ""}`}
                disabled={disableRight}
                onClick={scrollRight}
              >
                <RightArrowIcon />
              </button>
            </div>
            <div className="categorySec_fliters_boxadd">
              <h6>Filter:</h6>
            </div>
          </div>

          <div className="categorySec_term">
            <div className="categorySec_term_content">
              <h4> Category – Bitcoin</h4>
              <p className="mb-5 mt-3">
                Bitcoin is a decentralized digital currency created in 2009 by
                an unknown person or group under the pseudonym Satoshi Nakamoto.
                It operates on a peer-to-peer network without a central
                authority, allowing users to send and receive payments securely
                and directly. Bitcoin transactions are recorded on a public
                ledger called the blockchain, maintained by a network of
                computers (nodes).Bitcoin is known for its limited supply of 21
                million coins, making it deflationary. It has gained popularity
                as a store of value, a medium of exchange, and an investment
                asset, but it also faces volatility and regulatory challenges.
              </p>
            </div>

            <div className="blog_recentPost">
              <div className="blog_pagination justify-content-center justify-content-md-end d-flex mb-4">
                <CustomPagination />
              </div>
              <Row>
                {recentpostdata.map((item, index) => (
                  <Col xs={12} key={index} className="d-flex">
                    <RecentPost
                      img={item.img}
                      title={item.title}
                      text={item.text}
                      coinname={item.coinname}
                      onClick={() => navigate(":id")}
                    />
                  </Col>
                ))}
              </Row>
              <div className="blog_pagination justify-content-center justify-content-md-end d-flex mt-4">
                <CustomPagination />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </HomeLayout>
  );
};

export default Category;
