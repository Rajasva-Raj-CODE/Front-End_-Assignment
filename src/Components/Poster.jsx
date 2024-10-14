import React from "react";
import blogIcon from "../images/vedantublog_icon.svg";
import banner from "../images/bannner.png";

const Poster = () => {
  return (
    <>
      <section className="">
        <div className="flex gap-2 text-3xl text-orange-600 mb-8 mt-10 ">
          <img src={blogIcon} alt="" />
          <h1>Vedantu Blog</h1>
        </div>
        <div className="mb-[4px]" >
          <img src={banner} alt="" />
        </div>
      </section>
    </>
  );
};

export default Poster;
