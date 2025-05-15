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
     <div className="  px-[20px] py-[20px] xs:min-w-[360px] xs:max-w-[640px] lg:min-w-[500px] lg:max-w-[800px] border-[0.5px] w-fit  flex flex-col gap-[20px]  bg-white rounded-[10px]">
        <div className="flex justify-between items-center ">
            <p>Merchants</p>
        <button className="flex justify-center items-center gap-[5px]"> <span><FaPlus /></span>Add Merchants</button>
        </div>
        <div className="flex flex-row justify-between">
        {data.map((item, index) => (
            <div className="flex flex-col gap-[10px]" key={index}>
                 <div className="bg-gray-100 text-center roundedCircle p-[20px]">{item.short}</div>
                <p className="text-black rounded-[10px] xs:px-[5px] xs:py-[5px] lg:px-[10px] lg:py-[5px] bg-gray-100 text-[10px]">{item.name}</p>
            </div>
        ))}
        </div>
        <button className="text-right text-sm text-gray-300">See all</button>
      </div>
  )
}

export default Merchant