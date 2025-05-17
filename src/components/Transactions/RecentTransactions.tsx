import { FaArrowUp, FaArrowDown, FaExchangeAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
const RecentTransactions = () => {
  interface transactionProps {
    type?: string;
    icon: string;
    color: string;
    recipient: string;
    time: string;
    amount: string;
    amountColor: string;
    amount2?: string
    amount2Color?: string
  }
  const transactions = [
    {
      type: "Sent GBP",
      icon: <FaArrowUp />,
      color: "bg-red-100 text-red-500 xs:text-sm",
      recipient: "John Doe",
      time: "Today, 13:30",
      amount: "-₦1,000,000",
      amountColor: "text-red-500",
    },
    {
      type: "Exchanged GBP → NGN",
      icon: <FaExchangeAlt />,
      color: "bg-yellow-100 text-yellow-500 xs:text-sm",
      recipient: "John Doe",
      time: "Today, 13:30",
      amount: "+₦200,000",
      amountColor: "text-black",
      amount2: "-₦1,000/",
      amount2Color: "text-red-500"

    },
    {
      type: "Receive GBP → NGN",
      icon: <FaArrowDown />,
      color: "bg-green-100 text-green-500 xs:text-sm",
      recipient: "John Doe",
      time: "Today, 13:30",
      amount: "+₦200,000",
      amountColor: "text-black",
    },
    {
      type: "Withdraw GBP",
      icon: <FaArrowDown />,
      color: "bg-gray-200 text-gray-500 xs:text-sm",
      recipient: "John Doe",
      time: "Today, 13:30",
      amount: "+₦200,000",
      amountColor: "text-black",
    },
  ];
  return (
    <div className="space-y-4 mt-[20px]">
      {transactions.map((tx, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b pb-3"
        >
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-[10px] text-xl ${tx.color}`}>
              {tx.icon}
            </div>
            <div>
              <div className="font-bold md:text-[12px] whitespace-nowrap xs:text-[10px]">
                {tx.type}
              </div>
              <div className="xs:text-[10px]  md:hidden lg:hidden text-gray-500">
                Sent to {tx.recipient} • {tx.time}
              </div>
            </div>

            <div className=" md:text-[10px] whitespace-nowrap   px-[20px] xs:hidden md:block  text-gray-500">
              Sent to {tx.recipient} • {tx.time}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`font-semibold  xs:text-[10px] md:text-[12px] whitespace-nowrap ${ tx.amountColor}`}><span className={`${tx.amount2Color}`}>{tx.amount2}</span><span  className={`${tx.amountColor}`}>{tx.amount}</span></div>
            <BsThreeDotsVertical className="text-gray-400 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactions;
