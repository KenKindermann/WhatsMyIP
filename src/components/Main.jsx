// Components
import Data from "./Data";
import Date from "./Date";
import Weather from "./Weather";

const Main = () => {
  return (
    <main className="max-w-screen-xl mx-auto">
      <Date />
      <Weather />
      <Data />
    </main>
  );
};

export default Main;
