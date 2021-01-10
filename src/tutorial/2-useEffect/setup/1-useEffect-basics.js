import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// cannot place Hooks in the conditional
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) document.title = `New Message(${value})`;
  }, [value]);
  // dependency array
  console.log(`render component`);
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click
      </button>
    </>
  );
};

export default UseEffectBasics;
