import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Deposit from "./components/Deposit/Deposit";
import Rates from "./components/Rates/Rates";
import Transactions from "./components/Transactions/Transactions";
const Screen = () => {
  return (
    <div className="h-fit flex bg-zinc-100 flex-col gap-[10px]  ">
      <Navbar />
      <Banner />
      <Deposit />
      <Rates />
     <Transactions />
    </div>
  );
};

export default Screen;
