import { Container } from "react-bootstrap";
import RecentPost from "@/Components/common/Home/RecentPost";
import CustomBreadcrumb from "@/Components/UI/CustomBreadcrumb";
import useNavigate from "@/Hooks/useNavigate";
import HomeLayout from "@/Layouts/HomeLayout";
import "../../../../css/Home/BlogDetail.scss";

const BlogDetail = (props) => {
  console.log('props',props);

  const navigate = useNavigate();
  const recentpostdata = [
    {
      img: "/images/postimg4.jpg",
      coinname: "Bitcoin",
      title: "How the Bitcoin Having Affected Big Banking",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices dictum nulla, at luctus nisl molestie vel. Maecenas in vulputate metus. Quisque nec ipsum venenatis, blandit libero at, dignissim tortor. Praesent vitae risus orci. In condimentum euismod",
      time: "11 Hours Ago",
    },
  ];
  return (
    <HomeLayout>
      <div className="blog_detail py-100">
        <Container>
          <div className="blog_detail_inner">
            <div className="blog_detail_heading">
              <button
                type="button"
                onClick={() => navigate("/category")}
                className="blog_detail_tag"
              >
                Business Updates
              </button>
              <h1>
                TradingView partners with EUDE Business School to strengthen
                financial education
              </h1>
              <div className="blog_detail_breadcrumb">
                <CustomBreadcrumb
                  href="/blog"
                  linkname="Business updates"
                  pagename="TradingView partners with EUDE Business School to strengthen financial education"
                />
              </div>
              <h5>June 13</h5>
            </div>

            <div className="blog_detail_postimg">
              <img src={"/images/singlepostimg.jpg"} alt={props?.title || "Blog article image"} />
            </div>

            <div className="blog_detail_text">
              <p>
                In our ongoing commitment to promote financial education
                worldwide, we&apos;ve partnered with yet another established
                educational institution-EUDE Business School, one of
                Madrid&apos;s most prestigious postgraduate institutions.
              </p>
              <p>
                {" "}
                EUDE Business School is renowned internationally for its
                postgraduate programs and has earned recognition in major
                rankings and international media. Over the past 25
              </p>
            </div>

            <div className="blog_detail_author">
              <button
                type="button"
                onClick={() => navigate("/blog")}
                className="blog_detail_author_btn"
              >
                Next Article
              </button>
              {recentpostdata.map((item, index) => (
                <div key={index}>
                  <RecentPost
                    img={item.img}
                    title={item.title}
                    text={item.text}
                    coinname={item.coinname}
                    time={item.time}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default BlogDetail;
