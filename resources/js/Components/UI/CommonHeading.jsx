import "../../../css/common/CommonHeading.scss";

const CommonHeading = ({ heading, centered, title, text }) => {
  return (
    <div className={`common_heading ${centered ? "text-center" : ""}`}>
      {title && <h1>{title}</h1>}
      {heading && <h2>{heading}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
};

export default CommonHeading;
