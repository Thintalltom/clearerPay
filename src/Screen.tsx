import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Deposit from "./components/Deposit/Deposit";
import Rates from "./components/Rates/Rates";
import Transactional from "./components/Transactions/Transactional";

const Screen = () => {
  return (
    <div className="h-fit flex bg-zinc-100 flex-col gap-[10px]  ">
      <Navbar />
      <Banner />
      <Deposit />
      <Rates />
     <Transactional />
    </div>
  );
};

export default Screen;
