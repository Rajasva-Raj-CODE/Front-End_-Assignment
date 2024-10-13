import React from "react";
import logo from "../images/vedantu-logo.svg";
import call from "../images/call.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between h-[80px] items-center px-[60px] border-b ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>Courses</div>

        <ul className=" flex gap-[20px]">
          <li>Courses by kids</li>
          <li>Free study material</li>
          <li>Offline Centers</li>
          <li>More</li>
          <li>
            <img src="" alt="" />
            Store
          </li>
        </ul>

        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="h-[40px] w-[40px] rounded-full bg-gray-400 flex items-center justify-center ">
              <img src={call} alt="" className="h-[25px] w-[25px] " />
            </div>
            <div className="flex flex-col">
              <h4>Talk to our experts</h4>
              <h2>1800-120-456-456</h2>
            </div>
          </div>

          <button className="border border-orange-500 rounded-lg px-[20px] py-[4px] text-orange-500 font-semibold">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
