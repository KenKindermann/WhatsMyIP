// Hooks
import { useContext } from "react";

// Context
import { DataContext } from "../provider/DataContext";

const Ip = () => {
  const { ipData } = useContext(DataContext);

  const usedData = [
    { label: "IP", value: ipData?.ip },
    { label: "Provider", value: ipData?.isp },
    { label: "Domain", value: ipData?.as?.domain },
    { label: "Route", value: ipData?.as?.route },
    { label: "Type", value: ipData?.as?.type },
  ];

  return (
    <ul className="border-solid border-2 border-white rounded-lg p-2 w-full overflow-hidden">
      {usedData?.map((element) => (
        <li
          key={element.label}
          className={`flex gap-8 justify-between px-4 py-2 odd:bg-slate-700 ${!ipData && `animate-pulse`}`}
        >
          <div className="min-w-20">{element.label}:</div>
          <div className="animate-opacity">{element.value}</div>
        </li>
      ))}
    </ul>
  );
};

export default Ip;
