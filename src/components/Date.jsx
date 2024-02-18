// Hooks
import { useState, useEffect, useContext } from "react";

// Libraries
import moment from "moment";

// Context
import { DataContext } from "../provider/DataContext";

const Date = () => {
  const { ipData } = useContext(DataContext);
  const [timezone, setTimezone] = useState("+01:00");
  const [date, setDate] = useState(moment().utcOffset(timezone).format("dddd, Do MMMM"));
  const [time, setTime] = useState(moment().utcOffset(timezone).format("HH:mm:ss"));

  // Set date and time
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(moment().utcOffset(timezone).format("dddd, Do MMMM"));
      setTime(moment().utcOffset(timezone).format("HH:mm:ss"));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timezone]);

  // Set timezone
  useEffect(() => {
    if (ipData) {
      setTimezone(ipData.location.timezone);
    }
  }, [ipData]);

  return (
    <section className="flex flex-col justify-center items-center mt-8">
      <p className="text-md">{date}</p>
      <p className="text-6xl font-semibold">{time}</p>
    </section>
  );
};

export default Date;
