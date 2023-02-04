import React, { useState } from 'react'

function PreviosState() {
    const initializeCount = 0
    const [count, setCount] = useState(initializeCount)

    const handleCountFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount + 1 )
        }
    }
  return (
    <div>
      Value: {count}
      <button onClick={()=>{setCount(initializeCount)}}>Reset</button>
      <button onClick={()=>{setCount(prevCount => prevCount + 1)}}>Increase 1</button>
      <button onClick={()=>{setCount(prevCount => prevCount - 1)}}>Decrease 1</button>
      <button onClick={handleCountFive}>Increase 5</button>
    </div>
  )
}

export default PreviosState
