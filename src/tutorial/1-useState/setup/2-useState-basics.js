import React, { useState } from 'react';
// useState - function
// Hooks start with 'use'
// component must be uppercase
// cannot call conditionality
// must be in the function/component body

const UseStateBasics = () => {
  // console.log(useState(`hello world`));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  // handler controls value in useState
  const [text, setText] = useState(`pika-pika`);

  const handleClick = () => {
    if (text === `pikachu`) {
      setText('Raichu');
    } else {
      setText('pikachu');
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
