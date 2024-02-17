import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [SideNav, SetsideNav] = useState(false);
  const handleNav = () => {
    SetsideNav(!SideNav);
  };

  return (
    <>
      <div className=" w-full h-[90px] bg-black border-b-4 border-b-blue-600">
        <div className=" max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
          <div>
            <h1 className=" text-blue-500">DeFiTrade</h1>
          </div>
          <div className="hidden md:flex">
            <ul className=" flex text-white justify-end">
              <li className=" cursor-pointer hover:text-blue-400 font-serif hover:scale-105 transition">
                Platform
              </li>
              <li className=" cursor-pointer hover:text-blue-400 font-serif hover:scale-105 transition">
                Developers
              </li>
              <li className=" cursor-pointer hover:text-blue-400 font-serif hover:scale-105 transition">
                Community
              </li>
              <li className=" cursor-pointer hover:text-blue-400 font-serif hover:scale-105 transition">
                About
              </li>
              <button className=" w-36 text-xl ml-4">Use DeFi</button>
            </ul>
          </div>

          <div onClick={handleNav} className=" block md:hidden">
            {SideNav ? (
              <AiOutlineClose
                size={30}
                className=" text-white cursor-pointer"
              />
            ) : (
              <AiOutlineMenu size={30} className=" text-white cursor-pointer" />
            )}
          </div>

          {/* mobile Menu */}
          <div
            className={
              SideNav
                ? " w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center transition-all duration-300 ease-in-out"
                : " absolute left-[-100%]"
            }
          >
            <ul>
              <li className=" cursor-pointer hover:text-blue-400 font-serif hover:scale-105 transition">
                Platform
              </li>
              <li className=" cursor-pointer hover:text-blue-400 font-serif hover:scale-105 transition">
                Developers
              </li>
              <li className=" cursor-pointer hover:text-blue-400 font-serif hover:scale-105 transition">
                Community
              </li>
              <li className=" cursor-pointer hover:text-blue-400 font-serif hover:scale-105 transition">
                About
              </li>
              <button className=" m-8 cursor-pointer">Use DeFi</button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
