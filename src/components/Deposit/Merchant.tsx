import { FaPlus } from "react-icons/fa6";
const Merchant = () => {
  const data = [
    {
        name: 'Adisa Debo',
        short: 'AD'
    },
     {
        name: 'Adisa Debo',
        short: 'AD'
    },
     {
        name: 'Adisa Debo',
        short: 'AD'
    },
     {
        name: 'Adisa Debo',
        short: 'AD'
    },
     {
        name: 'Adisa Debo',
        short: 'AD'
    }
  ]
  return (
     <div className="  px-[20px] py-[20px]  xs:min-w-full  lg:min-w-[500px] lg:max-w-[800px] border-[0.5px]  flex flex-col gap-[20px] xs:bg-white bg-white rounded-[10px]">
        <div className="flex justify-between items-center ">
            <p>Merchants</p>
        <button className="flex justify-center items-center gap-[5px]"> <span><FaPlus /></span>Add Merchants</button>
        </div>
        <div className="flex flex-row justify-between">
        {data.map((item, index) => (
            <div className="flex flex-col gap-[10px]" key={index}>
                 <div className="bg-gray-100 text-center roundedCircle lg:p-[20px] xs:p-[10px]">{item.short}</div>
                <div className="lg:text-black rounded-[10px] xs:px-[5px]  xs:py-[5px] 
                lg:px-[10px] lg:py-[5px] bg-gray-100 text-[10px] xs:truncate xs:gap-[20px]"><p> {item.name}</p></div>
            </div>
        ))}
        </div>
        <button className="text-right text-sm text-gray-300">See all</button>
      </div>
  )
}

export default Merchant