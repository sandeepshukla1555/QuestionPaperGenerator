import React from "react";
import { AiOutlineLogout } from "react-icons/ai";


const Header = () => {
  return (<>
  <div className="flex justify-between px-4 items-center py-2 bg-white shadow-lg sticky top-0 z-20">
     <div className="flex gap-2 items-center">
     <div className="flex justify-center items-center w-8 h-8 rounded-full bg-stone-100 text-stone-800 font-extrabold shadow-xl">S</div>
     <div className="text-lg font-medium text-stone-800">Dasboard</div>
     </div>
     <button className="flex items-center gap-2 hover:opacity-85"><AiOutlineLogout className="text-2xl text-red-500"/>Logout</button>
  </div>
  </>);
};

export default Header;
