import { CheckIcon, GreyCrossIcon } from "../img/svgIcons/SvgIcon";
import CommonTable from "./CommonTable";
import "../../../css/common/BrokersTable.scss";

const BrokersTable = () => {
  const fields = ["Broker/Integration", "URL", "Stocks", "Crypto", "AutoSync"];

  const brokerdata = [
    {
      broker: "Interactive Brokers",
      url: "https://interactivebrokers.com",
      to: "https://interactivebrokers.com",
      stocks: <CheckIcon />,
      crypto: <GreyCrossIcon />,
      autosync: <GreyCrossIcon />,
    },

    {
      broker: "Coinbase",
      url: "https://coinbase.com",
      to: "https://coinbase.com",
      stocks: <CheckIcon />,
      crypto: <GreyCrossIcon />,
      autosync: <CheckIcon />,
    },
    {
      broker: "Trade Account",
      url: "https://example.com",
      to: "https://example.com",
      stocks: <CheckIcon />,
      crypto: <CheckIcon />,
      autosync: <CheckIcon />,
    },
    {
      broker: "Trade Account",
      url: "https://example.com",
      to: "https://example.com",
      stocks: <CheckIcon />,
      crypto: <GreyCrossIcon />,
      autosync: <GreyCrossIcon />,
    },
    {
      broker: "Trade Account",
      url: "https://example.com",
      to: "https://example.com",
      stocks: <CheckIcon />,
      crypto: <CheckIcon />,
      autosync: <CheckIcon />,
    },
    {
      broker: "Trade Account",
      url: "https://example.com",
      to: "https://example.com",
      stocks: <CheckIcon />,
      crypto: <CheckIcon />,
      autosync: <CheckIcon />,
    },
    {
      broker: "Trade Account",
      url: "https://example.com",
      to: "https://example.com",
      stocks: <CheckIcon />,
      crypto: <GreyCrossIcon />,
      autosync: <GreyCrossIcon />,
    },
    {
      broker: "Trade Account",
      url: "https://example.com",
      to: "https://example.com",
      stocks: <CheckIcon />,
      crypto: <GreyCrossIcon />,
      autosync: <GreyCrossIcon />,
    },
  ];

  return (
    <div className="brokers_table">
      <CommonTable fields={fields}>
        {brokerdata?.map((item, index) => (
          <tr key={index}>
            <td>{item?.broker}</td>
            <td>
              <a href={item?.to} target="_blank" rel="noreferrer">
                {item?.url}
              </a>
            </td>
            <td className="text-center">{item?.stocks}</td>
            <td className="text-center">{item?.crypto}</td>
            <td className="text-center">{item?.autosync}</td>
          </tr>
        ))}
      </CommonTable>
    </div>
  );
};

export default BrokersTable;
