import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1> */}
      {/* <h1>value:{secondValue}</h1> */}
      {/* {if(){console.log('sad world')}} cannot use if, because if doesnot return value */}
      <h1>{text || 'Naveen Kumar'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>Error ...</p> : <p>There is no error</p>}
    </>
  );
};

export default ShortCircuit;
