// Libraries
import axios from "axios";

// Hooks
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const Provider = ({ children }) => {
  const [ipData, setIpData] = useState(null);
  const [countryData, setCountryData] = useState(null);

  const url = "https://geo.ipify.org/api/v2/country,city?apiKey=";
  const apiKey = import.meta.env.VITE_GEOIPFY_API_KEY;

  // Get IP data by page loading
  useEffect(() => {
    const getIpData = async () => {
      const response = await axios.get(url + apiKey);
      setIpData(response.data);
    };

    getIpData();
  }, []);

  // Set country data when ipData changes
  useEffect(() => {
    const getCountryData = async () => {
      const response = await axios.get(`https://restcountries.com/v3.1/alpha/${ipData.location.country}`);
      setCountryData(response);
    };
    if (ipData) {
      getCountryData();
    }
  }, [ipData]);

  const value = { ipData, setIpData, countryData, setCountryData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default Provider;
