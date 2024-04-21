import React from "react";
import SideArrow from "../Assets/leftArrow.png";
import BannerImage from "../Assets/side.png";
import "../App.css";
import ScrollToFooter from "./ScrollToFooter";

const Home = () => {
  return (
    <div className="bg-home-background bg-cover relative">
     
      <div className="flex flex-col lg:flex-row gap-2 py-2 px-5 lg:px-10">
        <div className="hidden lg:block absolute top-56 left-32 flex-1 max-w-96">
          <img src={SideArrow} className="sideArrow" alt="" />
        </div>
        <div className="flex-1 lg:top-64 lg:relative lg:left-48 lg:mt-8">
          <h1 className="text-white text-2xl lg:text-4xl">
            Transforming Tech with
            <br />
            <span className="text-indigo-500">Mince</span>Tech
          </h1>
          <p className="text-white my-2 lg:w-96">
            Get access to top private and venture capital firms and conveniently make your own deal.
          </p>
        </div>
        <div className="flex-1 max-w-600">
          <img src={BannerImage} alt="" className="w-full" />
      <ScrollToFooter/>

        </div>
      </div>
   
    </div>
  );
};

export default Home;
