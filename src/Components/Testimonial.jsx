import React from "react";

import privacy from "../Assets/HER.png";
import Master from "../Icons/Master";
import Visa from "../Icons/Visa";
import Paypal from "../Icons/Paypal";
import partner4 from "../Assets/partner4.png"
import partner5 from "../Assets/partner5.png";
import reviews from "../Assets/reviewLine.png";

const Testimonial = () => {
 
  const reviewsInfoData = [
    {
      image: privacy,
      title: "The Best Customer Services, Period",
      description: "Amazing app! User-friendly interface, seamless navigation, and a game-changer for productivity. Highly",
      name:"Angele Marie",
      role:"CEO & product designer at Maas Ltd"
    },
    {
        image: privacy,
        title: "The Best Customer Services, Period",
        description: "Amazing app! User-friendly interface, seamless navigation, and a game-changer for productivity. Highly",
        name:"Angele Marie",
        role:"CEO & product designer at Maas Ltd"
      },
      {
        image: privacy,
        title: "The Best Customer Services, Period",
        description: "Amazing app! User-friendly interface, seamless navigation, and a game-changer for productivity. Highly",
        name:"Angele Marie",
        role:"CEO & product designer at Maas Ltd"
      }
  ];
  return (
    <div className="w-full mt-6 bg-custom-white">
         <div className="flex justify-center items-center flex-col relative">
        <h1 className="text-heading-color font-semibold text-lg  left-32 top-3  absolute">What Our Happy Customers Say About MinceTech</h1>        
      </div>
      <div className="bottom-1 flex my-24 mx-24 p-5 justify-between items-center flex-wrap">
      <div className="">
          <img src={reviews} alt=""/>
        </div>
        {reviewsInfoData.map((data) => (
          <div className="items-center shadow-custom py-4  px-12 justify-center  w-96 h-56 rounded-lg bg-white" key={data.title}>
            <h2 className="m-3 text-heading-color font-semibold text-base">{data.title}</h2>
            <p className="w-80  text-custom-grey text-sm text-left">{data.description}</p>
            <div className="flex items-center px-0 py-5">
  <img src={data.image} className="w-12 h-12 mr-3" alt="" /> 
  <div>
    <h3 className="text-heading-color font-bold text-base">{data.name}</h3>
    <p className="text-gray-600 text-sm">{data.role}</p>
  </div>
</div>
          </div>
          
        ))}
      </div>
      <h1 className="text-heading-color font-semibold text-lg  left-32 absolute"> Our Partners:</h1>  
      <div className="flex my-16 mx-56  pt-16 items-center gap-32">
  <Master />
  <Visa/>
  <Paypal/>
  <img className src={partner4} alt=""/>
  <img className src={partner5} alt=""/>
</div>




    
    </div>
  );
};

export default Testimonial;
