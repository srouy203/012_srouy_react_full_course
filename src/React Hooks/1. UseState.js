import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <button onClick={handleCount}>Click {count}</button>
      
    </div>
  )
}

export default UseState