import React from 'react';
import Form from './Form';
import FAQ from './FAQ';

function Questions() {
  return (
    <div className="flex p-9">
      <div className="flex-1 border-r border-gray-400 pr-4">
        <FAQ />
      </div>
      <div className="flex-1 pl-4">
        <Form />
      </div>
    </div>
  );
}

export default Questions;
