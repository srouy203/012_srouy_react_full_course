import React,{useState} from 'react'
import useCounter from './15.3 useCounter'

function Counter2() {
const [count, increaseCount, decreaseCount, resetCount] = useCounter(0,1)
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default Counter2
