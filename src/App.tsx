
import './App.css'
import Screen from './Screen'
function App() {


  return (
    <div className='md:px-[40px] bg-zinc-100 xs:px-0 h-[100vh]'>
      <Screen />
    </div>
  )
}

export default App

// import { useState } from "react";
// import { IoSettingsOutline, IoMenu, IoClose } from "react-icons/io5";

// const Navbar = () => {
//   const [activeTab, setActiveTab] = useState("Dashboard");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const tabs = [
//     "Dashboard",
//     "Wallet",
//     "Marchent",
//     "Transactions",
//     "Beneficiaries",
//   ];

//   const handleTabClick = (tab: string) => {
//     setActiveTab(tab);
//     setMenuOpen(false);
//   };

//   return (
//     <div className=" py-3 flex bg-white ">
//       <p className="font-[nunito] text-2xl font-extrabold">ClearerPay</p>

//       <div className="hidden md:flex flex-row  gap-[2px]">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => handleTabClick(tab)}
//             className={`text-sm text-zinc-500 px-[10px] pb-2 ${
//               activeTab === tab
//                 ? "border-b-[1.5px] border-b-black text-zinc-900 "
//                 : "border-none"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <div className="hidden md:flex flex-row gap-4 items-center">
//         <button className="text-sm text-white rounded-[20px] font-[nunito] border px-4 py-2 bg-zinc-600">
//           Personal account
//         </button>
//         <button className="text-zinc-500 text-sm font-[nunito] flex items-center gap-2">
//           <IoSettingsOutline />
//           Settings
//         </button>
//       </div>

//       <div className="md:hidden">
//         <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
//           {menuOpen ? <IoClose /> : <IoMenu />}
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="absolute top-16 left-0 w-[80vw]  h-[100vh] bg-white border-t z-50 flex flex-col gap-3 px-4 py-4 md:hidden">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => handleTabClick(tab)}
//               className={`text-sm text-zinc-500 text-left ${
//                 activeTab === tab
//                   ? "border-b-[1.5px] border-b-black text-zinc-900"
//                   : "border-none"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//           <button className="text-sm text-white rounded-[20px] font-[nunito] relative top-[50%] border px-4 py-2 bg-zinc-600">
//             Personal account
//           </button>
//           <button className="text-zinc-500 text-sm font-[nunito] flex items-center relative top-[50%] gap-2">
//             <IoSettingsOutline />
//             Settings
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

