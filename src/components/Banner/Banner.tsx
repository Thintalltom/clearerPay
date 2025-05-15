import { FaBell } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
const Banner = () => {
  return (
    <div className="flex lg:flex-row xs:flex-col xs:gap-[15px] lg:gap-[90px]">
        <p className="flex flex-row gap-[5px] justify-center items-center xs:text-left">Welcome Andy <span><MdWavingHand className="text-yellow-700" /></span> </p>
        <div className="bg-orange-100 px-[10px] flex flex-row gap-[10px] justify-center items-center  py-[10px] rounded-[10px]">
          <FaBell className="text-red-600" />
        <p className="text-zinc-500 text-sm">Your account has been set up for OTC trade, contact <span className="font-bold text-black">Contact OTC</span> to transact</p>
        </div>
    </div>
  )
}

export default Banner
