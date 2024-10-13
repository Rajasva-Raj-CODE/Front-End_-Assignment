import React from "react";
import logo from "../images/vedantu-logo.svg";
import call from "../images/call.png";
import cart from "../images/shopping-cart.png";
import DropDown from "../Components/DropDown";
const Navbar = () => {
  const courseItems = ["Course 1", "Course 2", "Course 3"];
  return (
    <>
      <div className="flex justify-between h-[80px] items-center px-[60px] border-b ">
        <div>
          <img src={logo} alt="" />
        </div>

        <DropDown label="Courses" items={courseItems} />

        <div className="flex gap-[22px]">
          <DropDown
            label="Course for kids"
            border="none"
            textColor="black"
            paddingX="0"
            paddingY="0"
            items={courseItems}
            hoverbg=""
            hovertext=""
          />
          <DropDown
            label="Free study material"
            border="none"
            textColor="black"
            paddingX="0"
            paddingY="0"
            hoverbg=""
            hovertext=""
            items={courseItems}
          />
          <DropDown
            label="Offline centers"
            border="none"
            textColor="black"
            paddingX="0"
            paddingY="0"
            hoverbg=""
            hovertext=""
            items={courseItems}
          />
          <DropDown
            label="More"
            border="none"
            textColor="black"
            paddingX="0"
            paddingY="0"
            hoverbg=""
            hovertext=""
            items={courseItems}
          />
          <div className=" flex ">
            <img src={cart} alt="" className="h-[25px] w-[25px] " />
            Store
          </div>
        </div>

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

          <button className="border border-orange-500 rounded-lg px-5 py-1  text-orange-500 font-semibold">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
