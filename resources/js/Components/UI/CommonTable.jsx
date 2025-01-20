import { useState } from "react";
import { Table } from "react-bootstrap";
import "../../../css/common/CommonTable.scss";

const CommonTable = ({
  className,
  fields,
  sortbuttons,
  children,
  noRecordFound,
  loading,
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="tableless">
      <Table responsive className={`common_table mb-0 ${className}`}>
        {fields && (
          <thead>
            <tr>
              {fields?.map((item) => (
                <th key={item}>
                  <div className="d-flex align-itmes-center">
                    {item}
                    {sortbuttons && (
                      <span
                        onClick={() => setActive(!active)}
                        className={`sort_icon ${active ? "up_active" : "down_active"}`}
                      >
                        {/* <SortIcon /> */}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
        )}

        {!loading ? (
          <tbody>
            {children?.length ? (
              children
            ) : (
              <tr className="no_record text-center">
                <td colSpan={fields?.length}>{noRecordFound}</td>
                {/* <NoRecord /> */}
              </tr>
            )}
          </tbody>
        ) : (
          ""
        )}
      </Table>
    </div>
  );
};

export default CommonTable;
