import { Col, Container, Row } from "react-bootstrap";
import PostCard from "@/Components/common/Home/PostCard";
import RecentPost from "@/Components/common/Home/RecentPost";
import Slider from "react-slick";
import CustomPagination from "@/Components/UI/CustomPagination";
import HomeLayout from "@/Layouts/HomeLayout";
import "../../../../css/Home/Blog.scss";
import { get, isEmpty, map } from "lodash";
import NoRecord from "@/Components/UI/NoRecord";

const settings = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: true,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: true,
      },
    },
  ],
};
const postdata = [
  {
    img: "/images/postimg1.jpg",
    title: "Profit",
    text: "Our Next Campfire Chat: Season 5",
  },
  {
    img: "/images/postimg2.jpg",
    title: "Technical Analysis",
    text: "Announcing Perls In Paradise. HearthStone’s Next Expansion",
  },
  {
    img: "/images/postimg3.jpg",
    title: "Trade Strategy",
    text: "29.6 Patch Notes",
  },
];

const Blog = ({ blogs }) => {
  console.log(blogs);
  
  
  return (
    <HomeLayout>
      <div className="blog py-100">
        <Container>
          <div className="blog_cards">
            <div className="slider-container">
              <Slider {...settings}>
                {postdata.map((item, index) => (
                  <PostCard 
                    key={index}
                    img={item.img}
                    title={item.title}
                    text={item.text}
                    className="w-100"
                    redirectHref={`blog/${index}`}
                  />
                ))}
              </Slider>
            </div>
          </div>
          <div className="blog_recentPost">
            <h1>Recent Publications</h1>
            <div className="blog_pagination justify-content-center justify-content-md-end d-flex mb-4 pb-1">
              <CustomPagination />
            </div>
            <Row>
               {
                
              isEmpty(get(blogs, "data")) ? <NoRecord />
              :map(get(blogs, "data"), (item) => (
                <Col xs={12} key={item.id} className="d-flex">
                  <RecentPost
                    img={item.feature_image}
                    title={item.title}
                    text={item.content}
                    coinname={item.coinname}
                    href={`/blog/${item.slug}`}
                  />
                </Col>
              ))}
            </Row>
            <div className="blog_pagination justify-content-center justify-content-md-end d-flex mt-0">
              <CustomPagination links={get(blogs, "links")} /> 
            </div>
          </div>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default Blog;
