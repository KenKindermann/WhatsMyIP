// Hooks
import { useContext } from "react";

// Context
import { DataContext } from "../provider/DataContext";

const Country = () => {
  const { ipData, countryData } = useContext(DataContext);

  const usedData = [
    { label: "City", value: ipData?.location?.city },
    { label: "State", value: ipData?.location?.region },
    { label: "Country", value: countryData?.data[0]?.name?.common },
    { label: "Region", value: countryData?.data[0]?.region },
    { label: "Capital", value: countryData?.data[0]?.capital },
  ];

  return (
    <ul className="border-solid border-2 border-white rounded-lg p-2 w-full lg:min-w-80 lg:max-w-96">
      {usedData.map((element) => (
        <li
          key={element.label}
          className={`flex gap-8 justify-between px-4 py-2 odd:bg-slate-700 ${
            !ipData && !countryData && `animate-pulse`
          }`}
        >
          <div className="">{element.label}:</div>
          <div className="animate-opacity">{element.value}</div>
        </li>
      ))}
    </ul>
  );
};

export default Country;
