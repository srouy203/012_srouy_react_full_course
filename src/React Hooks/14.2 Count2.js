import React ,{useState}from 'react'
import useCounter from './14.3 useCounter'

function Count2() {
    const [count, setCount] = useState(0)
    useCounter(count);
  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>Click {count}</button>
    </div>
  )
}

export default Count2
