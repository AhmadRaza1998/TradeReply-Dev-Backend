import { isEmpty } from "lodash";

const AlertMsg = ({ variant, message }) => {
  if (isEmpty(message)) return null;
  return <Alert variant={"dark"}>{message}</Alert>;
};

export default AlertMsg;
