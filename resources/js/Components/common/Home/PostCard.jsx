import { Link } from "@inertiajs/react";

const PostCard = ({ img, title, text, className, redirectHref }) => {
  return (
    <>
      <Link href={redirectHref} className={`blog_postcard ${className}`}>
        <div>
          <div className="blog_postcard_img">
            <div className="blog_postcard_img_overlay">
              <img src={img} alt={title?.trim() ? `Featured blog post: ${title}` : "TradeReply blog article thumbnail"} />
            </div>
          </div>
          <div className="blog_postcard_content">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
