import { FaArrowUp, FaArrowDown, FaExchangeAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
const RecentTransactions = () => {
  const transactions = [
  {
    type: "Sent GBP",
    icon: <FaArrowUp />,
    color: "bg-red-100 text-red-500",
    recipient: "John Doe",
    time: "Today, 13:30",
    amount: "-₦1,000,000",
    amountColor: "text-red-500",
  },
  {
    type: "Exchanged GBP → NGN",
    icon: <FaExchangeAlt />,
    color: "bg-yellow-100 text-yellow-500",
    recipient: "John Doe",
    time: "Today, 13:30",
    amount: "-£1,000 / +₦200,000",
    amountColor: "text-black",
  },
  {
    type: "Receive GBP → NGN",
    icon: <FaArrowDown />,
    color: "bg-green-100 text-green-500",
    recipient: "John Doe",
    time: "Today, 13:30",
    amount: "+₦200,000",
    amountColor: "text-green-500",
  },
  {
    type: "Withdraw GBP",
    icon: <FaArrowDown />,
    color: "bg-gray-200 text-gray-500",
    recipient: "John Doe",
    time: "Today, 13:30",
    amount: "+₦200,000",
    amountColor: "text-green-500",
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
            <div
              className={`p-2 rounded-[10px] text-xl ${tx.color}`}
            >
              {tx.icon}
            </div>
            <div>
              <div className="font-medium">{tx.type}</div>
              <div className="text-sm text-gray-500">
                Sent to {tx.recipient} • {tx.time}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`font-semibold ${tx.amountColor}`}>
              {tx.amount}
            </div>
            <BsThreeDotsVertical className="text-gray-400 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecentTransactions