import { useState, useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);
  return (
    <div>
      <div className="border-b-[1px] sm:hidden xs:hidden md:hidden   lg:flex justify-between items-center   ">
        <div className="flex flex-row gap-[10px] pt-[20px]">
          <p className="font-[nunito] text-3xl font-extrabold">ClearerPay</p>
          <div className="flex flex-row gap-[5px]">
            {[
              "Dashboard",
              "Wallet",
              "Marchent",
              "Transactions",
              "Beneficiaries",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`text-sm text-zinc-500 px-[10px] ${
                  activeTab === tab
                    ? "border-b-[1.5px] border-b-black text-zinc-900"
                    : "border-none"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-[20px]">
          <button className=" text-white rounded-[20px] font-[nunito] flex justify-center items-center gap-[10px] border-[0.5px] px-[20px] py-[10px] bg-zinc-600 text-sm">
            <IoMdContact /> Personal account <IoIosArrowDown />
          </button>
          <button className="text-zinc-500 text-sm font-[nunito] flex items-center justify-center gap-[5px]">
            <IoSettingsOutline />
            Settings
          </button>
        </div>
      </div>

      <div className="lg:hidden  w-screen py-[10px]  ">
        <div className="flex justify-between xs:px-[20px] ">
          <p className="font-[nunito]  font-extrabold text-3xl">ClearerPay</p>

          <button onClick={() => setMenu(!menu)} className="md:px-[60px]">
            {menu ? (
              <LiaTimesSolid className="text-2xl font-bold" />
            ) : (
              <RxHamburgerMenu className="text-2xl font-bold" />
            )}
          </button>
        </div>
      </div>
      {menu ? (
        <div className="w-full  h-screen border-left-[1px] bg-white shadow-sm px-[10px] py-[20px]  lg:hidden">
          <div className="flex flex-col gap-[30px] ">
            {[
              "Dashboard",
              "Wallet",
              "Marchent",
              "Transactions",
              "Beneficiaries",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  handleTabClick(tab);
                  setMenu(!menu);
                }}
                className={`text-sm text-zinc-500 text-left ${
                  activeTab === tab
                    ? "border-b-[1.5px] border-b-black text-zinc-900"
                    : "border-none"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button className=" text-white rounded-[20px] top-[5%] relative font-[nunito] flex justify-center items-center gap-[10px] border-[0.5px] px-[20px] py-[10px] bg-zinc-600 text-sm">
            <IoMdContact /> Personal account <IoIosArrowDown />
          </button>
          <button className="text-zinc-500 top-[10%] relative text-sm font-[nunito] flex items-center justify-center gap-[5px]">
            <IoSettingsOutline />
            Settings
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
