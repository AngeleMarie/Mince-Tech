import React from "react";
import escrow from "../Assets/escrow.png";
import contract from "../Assets/contract.png";
import privacy from "../Assets/privacy.png";
import tools from "../Assets/tools.png";
import features from "../Assets/features.png"

const Work = () => {
  const toolsInfoData = [
    {
      image: escrow,
      title: "Escrow Services",
      text: "Use the following services for free and get more of our services",
    },
    {
      image: contract,
      title: "Contract & parties Validation",
      text: "Use the following services for free and get more of our services ",
    },
    {
      image: privacy,
      title: "Privacy & secure granted",
      text: "Use the following services for free and get more of  our services",
    },
  ];
  const featuresInfoData = [
    {
      image: privacy,
      title: "Customer care",
      text: "Our platform seamlessly integrates diverse financial services, offering you a unified experience",

    },
    {
      image: escrow,
      title: "Innovation",
      text: "Our platform seamlessly integrates diverse financial services, offering you a unified experience",
    },
    {
      image: contract,
      title: "Global connectivity",
      text: "Our platform seamlessly integrates diverse financial services, offering you a unified experience",
    },
  ];
  return (
    <div className="mt-5 w-full bg-custom-white">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-heading-color text-3xl font-semibold">Explore our amazing tools</h1>
        <p className="my-3 text-custom-grey text-lg">
          Enable a streamlined and effortless process for conducting
          transactions by utilizing a single tap.
        </p>
      </div>
      <div className="justify-center my-11 py-5 px-3 flex gap-24  items-center ">
        {toolsInfoData.map((data) => (
          <div className="bg-white justify-center p-2 flex  flex-col items-center text-custom-grey shadow-custom w-56 h-80 rounded-lg " key={data.title}>
            <div className="justify-center items-center top-8">
              <img src={data.image} width="65px" height="65px" alt="" />
            </div>
            <h2 className=" text-heading-color items-center p-3 text-center font-semibold text-base">{data.title}</h2>
            <p className="items-center text-sm p-3 text-center text-custom-grey">{data.text}</p>
          </div>
        
        ))}
        <div className="">
          <img src={tools} alt=""/>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-heading-color text-3xl font-semibold">Our amazing features you will like</h1>
        <p className="my-3 text-custom-grey text-lg">
          Enable a streamlined and effortless process for conducting
          transactions by utilizing a single tap.
        </p>
      </div>
      <div className="mx-24 my-11 py-5 px-3 flex gap-24 items-center ">
      <div >
          <img src={features} alt=""/>
        </div>
        {featuresInfoData.map((data) => (
          <div className="bg-white justify-center p-2 flex  flex-col items-center text-custom-grey shadow-custom w-64 h-56 rounded-lg " key={data.title}>
            <div className=" items-center  flex gap-5 top-8">
              <img src={data.image} width="55px" height="55px" alt="" />
            <h2 className=" text-heading-color items-center font-bold text-base">{data.title}</h2>

            </div>
            <p className="items-center text-sm p-3 text-custom-grey">{data.text}</p>
          </div>
        
        ))}
        
      </div>
    </div>
  );
};

export default Work;
