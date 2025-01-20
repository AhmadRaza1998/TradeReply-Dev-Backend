import { isEmpty } from "lodash";
import { Alert } from "react-bootstrap";

const AlertMsg = ({ variant, message }) => {
  if (isEmpty(message)) return null;
  return <Alert variant={variant || "dark"}>{message}</Alert>;
};

export default AlertMsg;
