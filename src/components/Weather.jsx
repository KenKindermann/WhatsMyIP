// Hooks
import { useContext, useEffect, useState } from "react";

// Libraries
import axios from "axios";

// Context
import { DataContext } from "../provider/DataContext";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const { ipData } = useContext(DataContext);

  const link = "https://api.weatherapi.com/v1/current.json?key=";
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const query = `&q=${ipData?.location?.city}&aqi=no`;

  // Get and set weather data when ipData changes
  useEffect(() => {
    if (ipData) {
      axios.get(link + apiKey + query).then((res) => {
        setWeather(res.data);
      });
    }
  }, [ipData]);

  return (
    <section className="flex flex-col justify-center items-center mb-20 mt-4">
      <div
        className={`w-36 h-36 bg-slate-700 flex flex-col items-center justify-center rounded-full shadow-lg shadow-black ${
          !weather && `animate-pulse`
        }`}
      >
        <p className="text-md animate-opacity">{weather?.location?.name}</p>
        <div className="flex items-center">
          <img src={weather?.current?.condition?.icon} alt="weather condition icon" className="animate-opacity" />
          <p className="font-bold text-2xl animate-opacity">
            {weather?.current?.temp_c}
            {weather && <span>°</span>}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Weather;
