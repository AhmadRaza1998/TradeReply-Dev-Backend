//import { ReactNode } from "react";
import CommonSearch from "@/Components/UI/CommonSearch";
import { RightArrowIcon } from "@/Components/img/svgIcons/SvgIcon";

// interface Props {
//     children?: ReactNode,
//     Linkicon?: any,
//     title?: string | ReactNode,
//     text?: string,
//     onclick?: () => void,
//     Linktext?: string,
//     className?: string,
//     editicon?: any,
//     tradeacct?: any,
//     searcbar?: any,
//     subtext?: string,
//     submit?: any
// }

const CommonBlackCard = ({
  title,
  text,
  onclick,
  Linktext,
  Linkicon,
  children,
  className,
  editicon,
  tradeacct,
  searcbar,
  subtext,
  submit,
}) => {
  return (
    <>
      <div className={`common_blackcard ${className}`}>
        <div className="common_blackcard_innerheader">
          <div className="common_blackcard_innerheader_content">
            <h6>{title}</h6>
            {text && <p>{text}</p>}
            {searcbar && (
              <div className="common_blackcard_innerheader_search my-3">
                <CommonSearch
                  icon={true}
                  placeholder="Try Searching “Add New Category”"
                />
              </div>
            )}
            {subtext && <h6>{subtext}</h6>}
            {submit && (
              <button className="blue_text_btn px-0 mt-3">
                Submit a Request <RightArrowIcon />
              </button>
            )}
          </div>
          <div className="common_blackcard_innerheader_icon">
            <button onClick={onclick}>
              {editicon && <span className="me-2">{editicon}</span>}
              {Linktext}
              {Linkicon && <span className="ms-2">{Linkicon}</span>}
            </button>
            {tradeacct && (
              <div className="common_blackcard_innerheader_tradeacct">
                <h6>Trade Account</h6>
                <p>acct-123</p>
              </div>
            )}
          </div>
        </div>
        <div className="common_blackcard_innerbody">{children}</div>
      </div>
    </>
  );
};

export default CommonBlackCard;
