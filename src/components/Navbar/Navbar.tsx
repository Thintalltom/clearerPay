import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div>
      <div className="border-b-[1px] sm:hidden xs:hidden   md:flex justify-between items-center   ">
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
          <button className="text-sm text-white rounded-[20px] font-[nunito] border-[0.5px] px-[20px] py-[10px] bg-zinc-600 text-sm">
            Personal account
          </button>
          <button className="text-zinc-500 text-sm font-[nunito] flex items-center justify-center gap-[5px]">
            <IoSettingsOutline />
            Settings
          </button>
        </div>
      </div>

      <div className="md:hidden  w-screen py-[10px]  ">
        <div className="flex justify-between px-[10px]">
          <p className="font-[nunito]  font-extrabold">ClearerPay</p>

          <button onClick={() => setMenu(!menu)}>
            {menu ? <MdOutlineCancel /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>
      {menu ? (
        <div className="w-[70vw]  h-screen border-left-[1px] shadow-sm px-[10px] py-[20px] md:hidden lg:hidden">
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
                  onClick={() => handleTabClick(tab)}
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
            <button className="top-[30%] relative">Personal Account</button>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
