import React from 'react';

function Form() {
  return (
    <div className="max-w-md mx-auto mt-8 p-6">
      <h2 className="text-xl text-heading-color font-bold mb-4">Ask a different question</h2>
      <form>
        <div className="mb-6">
          <input
            type="text"
            id="username"
            className="border-b-2 bg-custom-white border-gray-400 focus:border-indigo-500 outline-none w-full py-2 pl-2"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            id="email"
            className="border-b-2 bg-custom-white border-gray-400 focus:border-indigo-500 outline-none w-full py-2 pl-2"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <textarea
            id="msg"
            className="border-b-2 bg-custom-white border-gray-400 focus:border-indigo-500 outline-none w-full py-2 pl-2 h-32 resize-none"
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className="float-right bg-white text-heading-color py-2 px-4 rounded shadow-md focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
