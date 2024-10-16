import React, { useState } from "react";


const Card = ({ imgUrl, title, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const truncatedDescription =
    description.length > 20 && !showFullDescription
      ? description.substring(0, 20) + "..."
      : description;

  return (
    <div className="flex self-start flex-col w-[276px] min-h-[300px] h-auto  border shadow-md border-gray-300 rounded-lg">
      <img
        src={imgUrl}
        alt={title}
        className="rounded-t-lg h-[144px] w-[274px]"
      />
      <div className="flex flex-col">
        <div className="p-3">
          <h2 className="font-[600] text-[#000]">{title}</h2>
        </div>
        <div className="px-3">
          <p className="text-[#666] font-[400]">{truncatedDescription}</p>
          {description.length > 20 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-[#ff6200] font-semibold mt-2 text-xs "
            >
              {showFullDescription ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


const CardList = ({ cardsData, heading }) => {
  const [showAll, setShowAll] = useState(false);

  const cardsToDisplay = showAll ? cardsData : cardsData.slice(0, 3);

  return (
    <div>
      <h1 className="text-xl font-bold text-[#222] pb-5 border-b border-gray-500">
        {heading}
      </h1>
      <div className="flex flex-wrap gap-4 mt-8 mb-[50px] justify-center lg:justify-start ">
        {cardsToDisplay.map((card, index) => (
          <Card
            key={index}
            imgUrl={card.imgUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {!showAll && cardsData.length > 4 && (
        <button
          onClick={() => setShowAll(true)}
          className="sm:w-[360px] w-[100px] h-[40px] flex justify-center rounded-[4px] bg-[#ffeee7] font-open-sans text-[13px] font-semibold tracking-[0.5px] text-center mx-auto my-[35px] p-[10px] text-[#ff6200]"
        >
          View All
        </button>
      )}
    </div>
  );
};

export default CardList;
