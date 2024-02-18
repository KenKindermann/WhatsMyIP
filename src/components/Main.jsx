// Components
import Data from "./Data";
import Date from "./Date";
import Map from "./Map";
import Weather from "./Weather";

const Main = () => {
  return (
    <main className="max-w-screen-xl mx-auto">
      <Date />
      <Weather />
      <Data />
      <Map />
    </main>
  );
};

export default Main;
