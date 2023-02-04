import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
function UseRefCountHook() {
    const [count, setCount] = useState(0)

    const intervalRef = useRef()
    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setCount(p=>p + 1)
        },1000);
        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])

  return (
    <div>
        <button onClick={()=>clearInterval(intervalRef.current)}>Stop Count</button>
        Hook Count: {count}
    </div> 
  )
}

export default UseRefCountHook
