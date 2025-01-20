import "../../../css/common/CommonButton.scss";

/**COMMON BUTTON WITH DYNAMIC PROPS */
const CommonButton = (props) => {
  return (
    <button
      onClick={props?.onClick}
      type={props?.type}
      className={`btn-style ${props.className} ${props.fluid ? "w-100" : ""} ${props.transparent ? "transparent" : ""}`}
      disabled={props?.disabled}
    >
      {props.onlyIcon && <span className="onlyIcon">{props.onlyIcon}</span>}
      {props.title}
      {props.btnIcon && <img src={props.btnIcon} alt="icon" className="" />}
    </button>
  );
};

export default CommonButton;
