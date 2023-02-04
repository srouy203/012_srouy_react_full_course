import React, { useEffect, useState } from 'react'


function UseEffectWithDependency() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(()=>{
        const Interval = setInterval(tick ,1000)

        return () => {
            clearInterval(Interval)
        }
    },[count])        

    
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default UseEffectWithDependency
