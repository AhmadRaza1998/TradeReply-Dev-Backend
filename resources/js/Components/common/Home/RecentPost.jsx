import { blogLimit, placeHolderImg } from "@/constants";
import "../../../../css/Home/Blog.scss";
import { Link } from "@inertiajs/react";
import { truncateContent } from "@/utils/helper";

const RecentPost = ({ img, title, text, coinname, className, time, href }) => {
  return (
    <>
      <Link href={href} className={`recent_post ${className}`}>
        <div className="recent_post_img">
          <img src={img || placeHolderImg} alt={title ? `Recent blog post: ${title}` : "TradeReply blog article thumbnail"} />
        </div>
        <div className="recent_post_content">
          <small>{coinname}</small>
          <h4>{title}</h4>
          <p>{truncateContent(text, blogLimit)}</p>
          {time && <span className="recent_post_time">{time}</span>}
        </div>
      </Link>
    </>
  );
};

export default RecentPost;
