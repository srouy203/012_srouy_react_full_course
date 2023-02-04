import React from 'react';
import {useState} from 'react';
function Count() {
  const [counter, setCounter]=useState(0);
  const onCounter = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>Counter increase: {counter}</h1>
      <button
        type='button'
        onClick={onCounter}
      >Press to increase</button>
    </div>
  )
}

export default Count;
