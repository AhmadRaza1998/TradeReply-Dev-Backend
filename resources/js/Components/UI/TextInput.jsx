import { useState } from "react";
import { Form } from "react-bootstrap";
import { CloseEye, EyeIcon } from "../img/svgIcons/SvgIcon";
import "../../../css/common/textInput.scss";

const TextInput = (props) => {
  const [active, setActive] = useState(false);

  /** RESTRICT USER TO ENTER e, E, +, -, . IN INPUT TYPE NUBER */
  const disabledCharacters = ["e", "E", "+", "-"];
  const onKeyDown = (e) => {
    if (props.disableDecimal) {
      disabledCharacters.push(".");
    }

    /** RESTRICT USER TO ENTER MORE THEN MAX LENGTH IN INPUT TYPE NUBER */
    return props.type === "number"
      ? (disabledCharacters.includes(e.key) ||
          (e.key !== "Backspace" &&
            props.maxLength &&
            e.target.value.length === props.maxLength)) &&
          e.preventDefault()
      : props.onlyChar;
    // ? !allowOnlyString(e.key) && e.preventDefault()
    // : null
  };

  return (
    <>
      <Form.Group
        className={`customInput ${props.className}`}
        controlId={props.controlId}
      >
        {props.label ? (
          <Form.Label htmlFor={props.id} className={props.classLabel}>
            {props.label}
            <sup>*</sup>
          </Form.Label>
        ) : (
          ""
        )}
        <div className="customInput_inner">
          <Form.Control
            disabled={props.disabled}
            type={props.type === "password" && active ? "text" : props.type}
            id={props.id}
            name={props.name}
            value={props.value}
            onKeyDown={onKeyDown}
            placeholder={props.placeholder}
            onBlur={props.onBlur}
            onChange={props.onChange}
            maxLength={props.maxLength ? props.maxLength : ""}
            required={props.required}
            min={props.min}
            max={props.max}
            isInvalid={props.isInvalid}
            onPaste={(e) =>
              props.onlyChar ? e.preventDefault() : props.onChange
            }
            onWheel={props.onWheel}
            step={props.step}
            autoComplete={props.onlyChar ? props.autoComplete : "off"}
            pattern="\S(.*\S)?"
            title={props.title ? props.title : props?.error?.props?.children}
            onInvalid={props.onInvalid}
            onInput={props.onInput}
            className={props.inputtext}
            readOnly={props.readOnly}
            onFocus={props.onFocus}
            autoFocus={props.autoFocus}
          />
          {props.children}
          {props.type === "password" ? (
            <span onClick={() => setActive(!active)} className="eyeIcon">
              {active ? <EyeIcon /> : <CloseEye />}
            </span>
          ) : (
            ""
          )}
        </div>
        {props.error}
        {props.smallText ? (
          <Form.Text id="" muted className="small-text-form">
            {props.smallText}
          </Form.Text>
        ) : (
          ""
        )}
      </Form.Group>
    </>
  );
};
export default TextInput;
