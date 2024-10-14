import React, { useState } from "react";
import {learnandgrowData} from './LearnandGrowdata'

const LearnandGrow = () => {
  const [showAll, setShowAll] = useState(false); // Manage state to toggle view

  // Conditionally limit the number of cards
  const visibleBlogs = showAll ? learnandgrowData : learnandgrowData.slice(0, 4);

  return (
    <div className="px-[40px] py-[20px]  " >
          <h1>Learn-and-Grow</h1>
      <div className="flex flex-wrap gap-4 ">
    
        {visibleBlogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col w-[276px] h-[290px] border shadow-md border-gray-300  rounded-lg"
          >
            <img
              src={blog.imgUrl}
              alt={blog.title}
              className="rounded-t-lg"
            />
            <div className="flex flex-col">
              <div className="p-3">
                <h2 className="font-[600] text-[#000]">{blog.title}</h2>
              </div>
              <div className="px-3">
                <p className="text-[#666] font-[400]">{blog.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button to toggle between showing limited and all cards */}
      {!showAll && (
        <button 
          onClick={() => setShowAll(true)} 
          className="mt-4 px-4 py-2 bg-[#ffeee7] w-[140px] text-orange-500 text-semibold rounded-lg"
        >
          View All
        </button>
      )}
    </div>
  );
};

export default LearnandGrow;
