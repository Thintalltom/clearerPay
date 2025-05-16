import { LuArrowLeftRight } from "react-icons/lu";
const Rates = () => {
  const data = [
    {
      name: "NGN",
      short: "YEN",
      price: 1640,
      start_price: 1,
      logo: <LuArrowLeftRight />,
    },
    {
      name: "NGN",
      short: "YEN",
      price: 1640,
      start_price: 1,
      logo: <LuArrowLeftRight />,
    },
    {
      name: "NGN",
      short: "YEN",
      price: 1640,
      start_price: 1,
      logo: <LuArrowLeftRight />,
    },
    {
      name: "NGN",
      short: "YEN",
      price: 1640,
      start_price: 1,
      logo: <LuArrowLeftRight />,
    },
    {
      name: "NGN",
      short: "YEN",
      price: 1640,
      start_price: 1,
      logo: <LuArrowLeftRight />,
    },
      {
      name: "NGN",
      short: "YEN",
      price: 1640,
      start_price: 1,
      logo: <LuArrowLeftRight />,
    },
    {
      name: "NGN",
      short: "YEN",
      price: 1640,
      start_price: 1,
      logo: <LuArrowLeftRight />,
    },
    {
      name: "NGN",
      short: "YEN",
      price: 1640,
      start_price: 1,
      logo: <LuArrowLeftRight />,
    },
    {
      name: "NGN",
      short: "YEN",
      price: 1640,
      start_price: 1,
      logo: <LuArrowLeftRight />,
    },
    {
      name: "NGN",
      short: "YEN",
      price: 1640,
      start_price: 1,
      logo: <LuArrowLeftRight />,
    },
  ];
  return (
    <div className="min-w-full xs:p-[20px]  bg-white rounded-[10px] border-[1px] ">
      <div className="flex justify-between">
        <p className="font-bold ">FX Rates</p>
        <p className="text-gray-400 text-sm">See all</p>
      </div>
      <div className="flex flex-row gap-[20px]  overflow-x-auto">
        {data.map((data, index) => (
          <div key={index} className="flex flex-row gap-[10px]">
            <div className="bg-gray-100 px-[5px] py-[5px] w-[100px] rounded-[10px]  h-fit flex flex-col gap-[5px]">
              <div className="flex text-[10px] flex-row gap-[10px] justify-between">
                <p>{data.name}</p>
                <p>{data.short}</p>
              </div>
              <div className="flex justify-center text-sm items-center">
                {data.logo}
                </div>
                <div className="flex flex-row gap-[10px] text-[10px] justify-between">
                     <p>₦{data.price}</p>
                <p>${data.start_price}</p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;
