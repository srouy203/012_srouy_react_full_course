import React ,{useState, useEffect}from 'react'
import useCounter from './14.3 useCounter'

function Count1() {
    const [count, setCount] = useState(0)
    useCounter(count);
  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>Click {count}</button>
    </div>
  )
}

export default Count1
