import React, { useState, useEffect } from "react";

const Card = () => {

  const [data, setData] = useState({
    Latest: [],
    NEET: [],
    cuetData: [],
    ExamMotivationData: [],
    generaldata: [],
    IcseData: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState({
    Latest: false,
    NEET: false,
    cuetData: false,
    ExamMotivationData: false,
    generaldata: false,
    IcseData: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleShowAll = (category) => {
    setShowAll((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const renderCategory = (category, data) => {
    const visibleBlogs = showAll[category] ? data : data.slice(0, 3);
    return (
      <div className="mt-8">
        <h2 className="text-lg font-bold text-[#222] pb-2 border-b border-gray-500">
          {category}
        </h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {visibleBlogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col w-[276px] h-[290px] border shadow-md border-gray-300 rounded-lg"
            >
              <img
                src={blog.imgUrl}
                alt={blog.title}
                className="rounded-t-lg h-[144px] w-[274px]"
              />
              <div className="flex flex-col">
                <div className="p-3">
                  <h3 className="font-[600] text-[#000]">{blog.title}</h3>
                </div>
                <div className="px-3">
                  <p className="text-[#666] font-[400]">{blog.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll[category] && (
          <button
            onClick={() => toggleShowAll(category)}
            className="w-[360px] h-[40px] flex justify-center rounded-[4px] bg-[#ffeee7] font-open-sans text-[13px] font-semibold tracking-[0.5px] text-center mx-auto my-[35px] p-[10px] text-[#ff6200]"
          >
            View All
          </button>
        )}
      </div>
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="">
      {renderCategory("Latest", data.Latest)}
      {renderCategory("NEET", data.NEET)}
      {renderCategory("cuetData", data.cuetData)}
      {renderCategory("ExamMotivationData", data.ExamMotivationData)}
      {renderCategory("generaldata", data.generaldata)}
      {renderCategory("IcseData", data.IcseData)}
    </div>
  );
};

export default Card;
