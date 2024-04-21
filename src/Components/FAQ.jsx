import React, { useState } from 'react';

function FAQ() {
  const faqs = [
    {
      question: 'What is mince Tech?',
      answer: 'MinceTech aims to provide software solutions for empowering individuals to manage their financial transactions securely',
    },
    {
      question: 'What does mince Tech do',
      answer: 'MinceTech aims to provide software solutions for empowering individuals to manage their financial transactions securely.',
    },
    {
      question: 'How does MinceTech ensure the security of my transactions?',
      answer: 'MinceTech aims to provide software solutions for empowering individuals to manage their financial transactions securely.',
    },
    {
        question: 'Can I use Mince Tech for international transactions?',
        answer: 'MinceTech aims to provide software solutions for empowering individuals to manage their financial transactions securely.',
      },
      {
        question: 'Can I link multiple bank accounts or cards to my MinceTech account?',
        answer: 'MinceTech aims to provide software solutions for empowering individuals to manage their financial transactions securely.',
      },

  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6">
      <h2 className="text-2xl text-heading-color font-bold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 mt-7">
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-500  font-semibold text-left">{faq.question}</p>
            <button
              className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2  px-2 rounded-full focus:outline-none focus:shadow-outline ml-2"
              onClick={() => toggleAnswer(index)}
            >
              +
            </button>
          </div>
          {activeIndex === index && <p className=" text-gray-500 mt-2">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
