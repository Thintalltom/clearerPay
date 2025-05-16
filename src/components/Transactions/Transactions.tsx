import RecentTransactions from "./RecentTransactions"
const Transactions = () => {
  return (
    <div className='w-full xs:p-[20px]  bg-white rounded-[10px] border-[1px]'>
        <div className='flex justify-between'>
            <p className='font-bold '>Recent Transactions</p>
            <button className='text-sm text-gray-300'>See all</button>
        </div>
      <RecentTransactions />
    </div>
  )
}

export default Transactions