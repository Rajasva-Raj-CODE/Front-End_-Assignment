import React, { useState } from "react";
import { neetdata } from "./Neetdata";

const Neet = () => {
  const [showAll, setShowAll] = useState(false); // Manage state to toggle view

  // Conditionally limit the number of cards
  const visibleNeetData = showAll ? neetdata : neetdata.slice(0, 4);

  return (
    <div className="">
      <h1 className="text-xl font-bold text-[#222] pb-5 border-b border-gray-500">
        NEET
      </h1>
      <div className="flex flex-wrap gap-4 mt-8 ">
        {visibleNeetData.map((neet) => (
          <div
            key={neet.id}
            className="flex flex-col w-[276px] h-[290px] border shadow-md border-gray-300  rounded-lg"
          >
            <img
              src={neet.imgUrl}
              alt={neet.title}
              className="rounded-t-lg h-[144px] w-[274px]"
            />
            <div className="flex flex-col">
              <div className="p-3">
                <h2 className="font-[600] text-[#000]">
                  {neet.title.slice(0, 43)}
                </h2>
              </div>
              <div className="px-3">
                <p className="text-[#666] font-[400]">
                  {neet.description.slice(0, 62)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button to toggle between showing limited and all cards */}
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="w-[360px] h-[40px] flex justify-center rounded-[4px] bg-[#ffeee7] font-open-sans text-[13px] font-semibold tracking-[0.5px] text-center mx-auto my-[35px] p-[10px] text-[#ff6200]"
        >
          View All
        </button>
      )}
    </div>
  );
};

export default Neet;
