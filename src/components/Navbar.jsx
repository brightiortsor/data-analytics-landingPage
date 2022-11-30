import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">BRIGHT.</h1>
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4 hover:text-slate-300">Home</li>
        <li className="p-4 hover:text-slate-300">About</li>
        <li className="p-4 hover:text-slate-300">Products</li>
        <li className="p-4 hover:text-slate-300">Services</li>
        <li className="p-4 hover:text-slate-300">Contact</li>
      </ul>
      {/* Mobile Hamburger */}
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed top-0 left-0 w-[30%] mt-20 h-[30%] bg-[#0e110e] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="p-2 uppercase cursor-pointer">
          <li className="p-2 border-b border-gray-700">Home</li>
          <li className="p-2 border-b border-gray-700">About</li>
          <li className="p-2 border-b border-gray-700">Products</li>
          <li className="p-2 border-b border-gray-700">Services</li>
          <li className="p-2">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
