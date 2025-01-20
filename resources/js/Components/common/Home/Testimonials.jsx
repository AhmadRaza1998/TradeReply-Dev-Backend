import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { ArtArrowIcon, QuoteIcon } from "@/Components/img/svgIcons/SvgIcon";
import "../../../../css/Home/Testimonials.scss";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="testimonials_sec">
        <Container>
          <div className="testimonials_sec_content">
            <h3 className="d-inline-flex align-items-start">
              Real Customers, Real Feedback{" "}
              <span className="ms-3">
                <ArtArrowIcon />
              </span>
            </h3>
            <p>
              Don't take our word for it. Check out what our customers have to
              say:
            </p>
          </div>
          <div className="slider-container mt-4 mt-md-5">
            <Slider {...settings}>
              <div className="testimonial_card">
                <span className="quoteIcon">
                  <QuoteIcon />
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <h3>- John Doe</h3>
              </div>
              <div className="testimonial_card">
                <span className="quoteIcon">
                  <QuoteIcon />
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <h3>- John Doe</h3>
              </div>
              <div className="testimonial_card">
                <span className="quoteIcon">
                  <QuoteIcon />
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <h3>- John Doe</h3>
              </div>
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonials;
