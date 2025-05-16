import Merchant from "./Merchant";
import DepositCorner from "./DepositCorner";
const Deposit = () => {



  return (
    <div className="flex lg:flex-row md:flex-col cs: gap-[20px]  sm:flex-col xs:flex-col lg:justify-between">
      <DepositCorner />
     <Merchant />
    </div>
  );
};

export default Deposit;
