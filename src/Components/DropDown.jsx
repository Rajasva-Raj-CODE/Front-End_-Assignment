import React from "react";

const Dropdown = ({
  label,
  items,
  border = "border ",
  textColor = "text-orange-500",
  paddingY = "py-2",
  paddingX = "px-5",
  hoverbg = "hover:bg-orange-500",
  hovertext = "hover:text-white "

}) => {
  return (
    <div className="relative group inline-block">
      <button
        className={`${border} border-orange-500 ${hovertext}  ${hoverbg} rounded-lg ${paddingY} ${paddingX} ${textColor}  font-semibold flex items-center`}
      >
        {label}
        <span className="ml-2 transition-transform duration-300 group-hover:rotate-180">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </button>

      <div className="absolute z-[9999999999] hidden group-hover:block mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md">
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
