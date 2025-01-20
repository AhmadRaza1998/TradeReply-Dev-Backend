import { SearchIcons } from "../img/svgIcons/SvgIcon";
import "../../../css/common/CommonSearch.scss";

const CommonSearch = (props) => {
  return (
    <>
      {props.label && (
        <label className="form-label" htmlFor="search">
          {props.label}
        </label>
      )}
      <div className={`commonSearch ${props.className}`}>
        {props?.icon && (
          <span className="onlyIcon">
            <SearchIcons />
          </span>
        )}
        <input
          type="text"
          name={props.name}
          placeholder={props?.placeholder}
          className={`form-control ${props.searcClass}`}
          onChange={props.onChange}
          maxLength={props?.maxLength}
        />
        {props?.btnicon && (
          <span className="btnIcon">
            <SearchIcons />
          </span>
        )}
      </div>
    </>
  );
};

export default CommonSearch;
