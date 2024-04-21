import React,{useState} from 'react';
import {  FaApple } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import Playstore from "../Icons/Playstore"
import { BsTelephone } from "react-icons/bs";
import Flag from 'react-country-flag';
import Facebook from '../Icons/Facebook';
import Linkedin from '../Icons/LinkedIn';
import Instagram from '../Icons/Instagram';
import Logo from "../Assets/logo.svg";
import ScrollToHome from './ScrollToHome';

import Youtube from '../Icons/Youtube';

const Footer = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: 'kinyarwanda', label: <><Flag countryCode="RW" /> Kinyarwanda</> },
    { value: 'french', label: <><Flag countryCode="FR" /> French</> },
    { value: 'english', label: <><Flag countryCode="GB" /> English</> },
  ];
  return (
    <footer className="bg-gradient-radial text-white py-8">
     
      <div className="flex flex-nowrap mx-6 my-4 ">
      
        <div className="  md:w-1/4 mb-2 md:mb-0 ">
     
          <h4 className="text-lg font-bold mb-2">Services</h4>
          <ul>
            <li><a href="#e-scrow" className="text-gray-400 hover:text-white">E-Scrow</a></li>
            <li><a href="#contract-validation" className="text-gray-400 hover:text-white">Secure account</a></li>
            <li><a href="#contract-validation" className="text-gray-400 hover:text-white">Track your money</a></li>
          </ul>
          <p className='mb-4 mt-4'>Get Your Mobile App:</p>
          <div className="flex flex-initial w-96 gap-4">  
      <button className='rounded-md gap-3 justify-center bg-black flex px-6 py-2'>
        <FaApple className='w-8 h-7'/>App store
      </button>
      <button className='rounded-md bg-black flex gap-3 px-4 py-2'>
    <Playstore className="w-8 h-7 p-4"/>Google Play Store
    </button>  
    </div>   
        
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Go back</h4>
          <ul>
            <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#work" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
          </ul>
         
        </div>
      
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Reach out</h4>
          <ul>
            <li><a href="https://instagram.com" className="text-gray-400 hover:text-white flex m-2 gap-2">
              <BsTelephone className='mt-2'/>+250798978831</a>
              </li>
            <li><a href="https://gmail.com" className="text-gray-400 flex m-2 gap-2 hover:text-white">
              <AiOutlineMail className='mt-2'/>
              mincetech@gmail.com</a>
              </li>
          </ul>
          <div className=" items-center">
            <p>Language:</p>
            <select
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
      className="border border-gray-300 bg-gradient-radial rounded-md px-3 py-1 "
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className='text-black' >
          {option.label}
        </option>
      ))}
    </select>
          </div>
        </div>
        
        <div className="w-full ml-32 items-center">
   <ScrollToHome/>
          <p>Newsletter</p>
          <input type="email" placeholder="Your Email" className="bg-gradient-radial border-2 w-72 border-white text-white px-4 py-2 rounded-md focus:outline-none" />
          <button className="bg-indigo-500 hover:bg-indigo-700 ml-2 text-white px-4 py-2 rounded-md">Subscribe</button>
          <div className="flex gap-3 my-4">
          <a href="https://linkedin.com"><Linkedin/>
          </a>
          <a href="https://instagram.com"><Instagram/>
          </a>
          <a href="https://facebook.com">
            <Facebook/>
          </a>
          <a href="https://youtube.com">
            <Youtube/>
          </a>
          </div>
          <div className="ml-72 mt-25">
        <img src={Logo} alt="" />
      </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
