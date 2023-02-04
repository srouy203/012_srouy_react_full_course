import React, { useState, useEffect } from 'react'


function UseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{
        console.log("Update document title")
        document.title=`You click ${count} times`;
    }, [count])
  return (
    <div>
      <button onClick={()=>{setCount(prev=>prev+ 1)}}>Click me</button>
      <h2>You click {count} times</h2>
      <input 
        type="text" 
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        />
    </div>

  )
}

export default UseEffect
