import { useState } from "react";
import "../../../css/common/CommonTooltip.scss";

const CommonTooltip = ({ children, content, position, className }) => {
  const [visible, setVisible] = useState(false);

  const getTooltipPosition = () => {
    switch (position) {
      case "top-left":
        return "tooltip-top-left";
      case "top-right":
        return "tooltip-top-right";
      case "bottom-left":
        return "tooltip-bottom-left";
      case "bottom-right":
        return "tooltip-bottom-right";
      case "center-bottom":
        return "tooltip-center-bottom";
      case "center-top":
        return "tooltip-center-top";
      default:
        return "tooltip-top-right";
    }
  };

  return (
    <div
      className={`tooltip-container ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
    >
      {children}
      {visible && (
        <div className={`tooltip-box ${getTooltipPosition()}`}>{content}</div>
      )}
    </div>
  );
};

export default CommonTooltip;
