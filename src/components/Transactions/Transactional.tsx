import Transactions from './Transactions'
import MoneyFlow from './MoneyFlow'
const Transactional = () => {
  return (
    <div className='flex gap-[20px] xs:flex-col lg:flex-row '>
            <Transactions />
            <MoneyFlow />
    </div>
  )
}

export default Transactional