import { Pagination } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import { isEmpty, map } from "lodash";
import "../../../css/common/CustomPagination.scss";

const CustomPagination = ({ links }) => {
  if (isEmpty(links) || links.length === 3) return null;

  return (
    <div className="customPagination mt-1">
      <Pagination>
        {map(links, (item) => (
          <Link
            href={item.url}
            key={item.label}
            dangerouslySetInnerHTML={{ __html: item.label }}
            className={`btn text-white border m-1 ${item.active ? "active" : ""}`}
          />
        ))}
      </Pagination>
    </div>
  );
};

export default CustomPagination;
