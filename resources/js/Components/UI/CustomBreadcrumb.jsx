import { Breadcrumb } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import "../../../css/common/CustomBreadcrumb.scss";

const CustomBreadcrumb = ({ href, linkname, pagename }) => {
  return (
    <>
      <div className="custom_breadcrumb">
        <Breadcrumb>
          <li className="breadcrumb-item home-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item secondary_link">
            <Link href={href}>{linkname}</Link>
          </li>
          <Breadcrumb.Item active>{pagename}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};

export default CustomBreadcrumb;
