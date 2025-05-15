import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Deposit from "./components/Deposit/Deposit";
const Screen = () => {
  return (
    <div className="h-[100vh] flex flex-col gap-[20px] ">
      <Navbar />
      <Banner />
      <Deposit />
    </div>
  );
};

export default Screen;
