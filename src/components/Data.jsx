// Components
import Ip from "./Ip";
import Country from "./Country";

const Data = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row  mb-8 gap-8">
      <Ip />
      <Country />
    </section>
  );
};

export default Data;
