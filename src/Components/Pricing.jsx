import React, { useState } from "react";
import mark from "../Assets/mark.png";
import pricing from "../Assets/pricing.png";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handleChangeBillingCycle = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <div className="p-10 bg-gradient-radial">
      <div className="flex justify-center items-center flex-col py-6">
        <h1 class="text-white text-lg items-center justify-center font-bold mb-4">
          Get affordable prices to all
        </h1>
        <p class="text-white text-base">
          Prioritizing cost efficiency, strategic negotiations, and innovative
          pricing models to make products or services affordable for all.
        </p>
      </div>
      <div className="flex justify-center py-6">
        <button
          className={`mr-3 px-4 py-2 rounded-md ${
            billingCycle === "monthly"
              ? "bg-indigo-500  text-white"
              : "text-white border-2 border-white bg-gradient-radial"
          }`}
          onClick={() => handleChangeBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            billingCycle === "yearly"
              ? "bg-indigo-500 text-white"
              : "text-white border-2 border-white bg-gradient-radial"
          }`}
          onClick={() => handleChangeBillingCycle("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="flex gap-32 ml-32 justify-center">
        <div className="flex justify-center">
          <table>
            <thead>
              <tr>
                <td className="py-3 border border-white">
                  <ul>
                    <li className="px-3 text-white"> Free Trial</li>
                    <li className="px-3 text-2xl font-bold text-white">
                      {" "}
                      {billingCycle === "monthly" ? "$0.00" : "$0.00"}
                    </li>
                  </ul>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white">
                  <ul>
                    <li className=" flex gap-5 p-4 items-center text-white">
                      <span>
                        <img src={mark} alt="" />
                      </span>
                      14 days
                    </li>
                    <li className="flex gap-5 p-4 items-center text-white">
                      <span>
                        <img src={mark} alt="" />
                      </span>
                      Chat Support
                    </li>
                    <li className="flex gap-5 p-4 items-center text-white">
                      <span>
                        <img src={mark} alt="" />
                      </span>
                      24/7 Support
                    </li>
                    <li className="flex gap-5 p-4 items-center text-white">
                      <span>
                        <img src={mark} alt="" />
                      </span>
                      Fingerprint
                    </li>
                    <li className="flex gap-5 px-5 items-center text-white">
                      <button className="bg-indigo-500 text-white px-4 py-2 mx-4 mt-12 mb-5 rounded-md">
                        Get Started
                      </button>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <table className=" pricing-table border border-white mx-5">
            <thead>
              <tr>
                <td className=" py-3 border border-white">
                  <ul>
                    <li className=" px-3 text-white"> Basic</li>
                    <li className=" px-3 text-2xl font-bold text-white">
                      {" "}
                      {billingCycle === "monthly" ? "$4.99" : "$59.88"}
                    </li>
                  </ul>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white">
                  <ul>
                    <li className=" flex gap-5 p-4 items-center text-white">
                      <span>
                        <img src={mark} alt="" />
                      </span>
                      30 days
                    </li>
                    <li className=" flex gap-5 p-4 items-center text-white">
                      <span>
                        <img src={mark} alt="" />
                      </span>
                      Chat Support
                    </li>
                    <li className=" flex gap-5 p-4 items-center text-white">
                      <span>
                        <img src={mark} alt="" />
                      </span>
                      24/7 Support
                    </li>
                    <li className=" flex gap-5 p-4 items-center text-white">
                      <span>
                        <img src={mark} alt="" />
                      </span>
                      <p className="text-left w-40">Fingerprint & Face Recognition</p>
                    </li>
                    <li className="text-white">
                      <button className="bg-indigo-500 ml-12 mt-6 text-white px-4 py-2 mb-5 rounded-md">
                        Get Started
                      </button>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="pricing-table border border-white">
            <thead>
              <tr>
                <td className=" py-3 border border-white">
                  <ul>
                    <li className="px-3 text-white"> Premium</li>
                    <li className="text-2xl px-3 font-bold text-white">
                      {" "}
                      {billingCycle === "monthly" ? "$9.99" : "$119.88"}
                    </li>
                  </ul>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white">
                  <ul>
                    <li className=" p-4 flex gap-5 items-center text-white">
                      <span>
                        <img src={mark} alt="" />
                      </span>
                      30 days
                    </li>
                    <li className=" flex p-4  gap-5 items-center text-white">
                      <span>
                        <img src={mark} alt="" />
                      </span>
                      Chat Support
                    </li>
                    <li className=" flex gap-5 p-4 items-center text-white">
                      <span>
                        <img src={mark} alt="" />
                      </span>
                      24/7 Support
                    </li>
                    <li className=" flex gap-5 p-4 items-center text-white">
                      <span>
                        <img src={mark} alt="" />
                      </span>
                   <p className="text-left w-40">  Fingerprint ,Face recognition&digital bracelet</p>
                    </li>
                    <li className="text-white">
                      <button className="bg-indigo-500 my-4 ml-14 mb-6 items-center text-white px-4 py-2 rounded-md">
                        Get Started
                      </button>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="">
          <img src={pricing} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
