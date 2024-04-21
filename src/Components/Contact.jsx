import React from "react";
import linkage from "../Assets/linkage.png";
import watch from "../Assets/watch.png";
const Contact = () => {
  return (
    <>
      <div className="flex bg-gradient-radial px-12 relative">
        <div className="texting justify-center py-5 px-12 m-12">
          <h1 className=" font-bold text-lg text-white p-3">
            Choose Your Own Unique Digital Bracelet
          </h1>
          <p className=" text-white px-3 w-1/2 text-clamp-ts">
            Fully customizable, beautiful and elegant bracelets that are
            available at a best price allowing you to make transactions anywhere
            at anytime{" "}
          </p>
          <button className="bg-indigo-500 text-white text-base font-500 rounded-md m-3 px-4 py-2 ">
            Explore More
          </button>
        </div>
        <div className="justify-center items-center absolute right-1/3 top-24">
          <img src={linkage} alt="" />
        </div>
        <div className="absolute  right-6">
          <img src={watch} alt=""/>
        </div>
        
      </div>
  
    </>
  );
};

export default Contact;
