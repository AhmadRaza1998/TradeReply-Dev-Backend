import { Col } from "react-bootstrap";
import CommonTooltip from "@/Components/UI/CommonTooltip";
import { SolidInfoIcon } from "@/Components/img/svgIcons/SvgIcon";
import { get, noop } from "lodash";
import DatePicker from "@/Components/UI/DatePicker";
import { useState, memo } from "react";

const INPUT_TYPE = {
  DATE: 1,
  TEXT: 2,
  NUMBER: 3,
};

function Card({ item, onDateChange = noop }) {
  const [date, setDate] = useState(new Date());

  const inputType = item.type;
  let inputView = get(item, "text", "");

  //   if input is date
  if (inputType == INPUT_TYPE.DATE) {
    inputView = (
      <DatePicker
        selected={date}
        minDate={new Date()}
        onChange={(date) => {
          setDate(date);
          onDateChange(date);
        }}
      />
    );
  }

  return (
    <Col md={4} sm={6} xs={12}>
      <div className="trade_builder_card_body_box">
        <h5 className="blue_bg">
          {get(item, "title", "")}
          <CommonTooltip
            className="subTooltip"
            content="Lorem Ipsum is simply dummy text of the printing."
            position="top-left"
          >
            <SolidInfoIcon />
          </CommonTooltip>
        </h5>

        <div className={`trade_calculators_card_tradecal_tradebox1 card`}>
          {inputView}
        </div>
      </div>
    </Col>
  );
}

export default memo(Card);

// class names
// ${item.text === "3.4X" ? "green_bg" : ""}
// ${item.text === "SHORT" ? "whitelight_bg" : ""}
// ${item.text === "$0.018" ? "whitelight_bg" : ""}
// ${item.text === "$0.062" ? "whitelight_bg" : ""}
