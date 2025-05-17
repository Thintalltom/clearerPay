import { FaPlus } from "react-icons/fa6";
import CurrencySelectible from "../Selectible/CurrencySelectible";
import { useEffect, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { LuArrowLeftRight } from "react-icons/lu";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
const DepositCorner = () => {
     const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  useEffect(() => {
    setOptions([
      { label: "Naira", value: "NGN" },
      { label: "Dollar", value: "Dols" },
      { label: "Euros", value: "Eu" },
    ]);
  }, []);
  const [selectedOptions, setSelectedOptions] = useState<string>("NGN");
  return (
    <div className="border-[0.5px] xs:min-w-full  lg:min-w-[650px] lg:max-w-[800px]  flex flex-col gap-[20px]  bg-white rounded-[10px] px-[20px] py-[10px]">
        <div className="flex  justify-between items-center ">
          <div className="flex gap-2 justify-center items-center">
             {selectedOptions}
          <CurrencySelectible
            placeholder={"NGN"}
            options={options}
            value={selectedOptions}
            onChange={(value) => setSelectedOptions(value)}
          />
          </div>
         
          <p className="flex justify-center items-center gap-[10px]">
            <span>
              <FaPlus className="text-black" />
            </span>
            Deposit
          </p>
        </div>
        <div>
          <p className="text-3xl font-extrabold">₦34,645,33</p>
        </div>
        <div className="flex justify-between  ">
          <div className="flex  lg:gap-[10px] ls:bg-red-500 xs:gap-[20px]">
            <button className="lg:px-[40px] lg:py-[10px] md:px-[40px] md:py-[10px] xs:px-[10px] xs:py-[10px]  rounded-[10px] bg-gray-100 flex flex-row justify-center items-center gap-[5px] font-bold">
              <span>
                <IoIosArrowRoundUp className="lg:text-2xl xs:text-lg font-bold" />
              </span>
              Send
            </button>
          </div>
          <div className="flex flex-row gap-[10px]">
            <button className="lg:px-[40px] lg:py-[10px] md:px-[40px] md:py-[10px] xs:px-[10px] xs:text-sm xs:py-[10px] rounded-[10px] bg-gray-100 flex flex-row justify-center items-center gap-[5px] font-bold">
              <span>
                <IoIosArrowRoundDown className="lg:text-2xl xs:text-lg font-bold" />
              </span>
              Recieve
            </button>
          </div>
          <div className="flex flex-row gap-[10px]">
            <button className="lg:px-[40px] lg:py-[10px] md:px-[40px] md:py-[10px] xs:px-[10px] xs:text-sm xs:py-[10px] rounded-[10px] bg-gray-100 flex flex-row justify-center items-center gap-[5px] font-bold">
              <span>
                <LuArrowLeftRight className="lg:text-2xl xs:text-lg font-bold" />
              </span>
              Swap
            </button>
          </div>
          <div className="flex flex-row gap-[10px]">
            <button className="lg:px-[40px] lg:py-[10px] md:px-[40px] md:py-[10px] xs:px-[10px] xs:py-[10px] roundedCircle bg-gray-100 ">
              <PiDotsThreeOutlineVerticalThin className="text-2xl font-bold" />
            </button>
          </div>
        </div>
      </div>
  )
}

export default DepositCorner