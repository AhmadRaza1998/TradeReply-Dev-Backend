import Select from "react-select";
import "../../../css/common/Select.scss";

const CustomSelect = ({
  className,
  menuIsOpen,
  defaultValue,
  onChange,
  options,
  name,
  isMulti,
  value,
  isClearable,
  onMenuScrollToBottom,
  placeholder,
  filterOption,
  isSearchable,
  closeMenuOnSelect,
  error,
}) => {
  return (
    <div className="customInput_inner errorMargin">
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        value={value}
        className={`common_select ${className}`}
        classNamePrefix="select"
        menuIsOpen={menuIsOpen}
        placeholder={placeholder}
        name={name}
        isMulti={isMulti}
        isClearable={isClearable}
        onMenuScrollToBottom={onMenuScrollToBottom}
        filterOption={filterOption}
        closeMenuOnSelect={closeMenuOnSelect}
        isSearchable={isSearchable}
      />
      {error}
    </div>
  );
};

export default CustomSelect;
