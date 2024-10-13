import React, { useState } from "react";
import logo from "../images/vedantu-logo.svg";
import call from "../images/call.png";
import cart from "../images/shopping-cart.png";
import Hamburg from "../images/hamburg.png";
import Close from "../images/close.png";
import DropDown from "../Components/DropDown";
const Navbar = () => {
  const courseItems = ["Course 1", "Course 2", "Course 3"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex justify-between h-[80px] items-center sm:px-[60px] px-[20px] border-b ">
        <div>
          <img src={logo} alt="" />
        </div>

        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          {isOpen ? (
            <img src={Close} alt="Close Menu" className="h-[32px] w-[32px]"/>
          ) : (
            <img src={Hamburg} alt="Open Menu" className="h-[32px] w-[32px]" />
          )}
        </div>
        <div className=" items-center gap-[10px] hidden md:flex ">
          {" "}
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
        </div>

        <div className=" gap-6 hidden md:flex">
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
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-white border-b p-4">
          <DropDown label="Courses" items={courseItems} />
          <div className="flex flex-col gap-4">
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
        </div>
      )}
    </>
  );
};

export default Navbar;
