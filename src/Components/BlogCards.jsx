import React, { useState } from "react";
import blogData from "../data/data.json"; 

const BlogCards = () => {
  const [showAll, setShowAll] = useState(false); // Manage state to toggle view

  // Conditionally limit the number of cards
  const visibleBlogs = showAll ? blogData : blogData.slice(0, 4);

  return (
    <div className="px-[40px] py-[20px] " >
      <div className="flex flex-wrap gap-4">
        {visibleBlogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col w-[276px] h-[290px] border border-red-800 rounded-lg"
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
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          View All
        </button>
      )}
    </div>
  );
};

export default BlogCards;
