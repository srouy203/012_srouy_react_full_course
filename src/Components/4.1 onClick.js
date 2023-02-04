import React, { useState } from 'react'

const OnClick = () => {
    const [value, setValue] = useState(1)
    const handleClick = () => {
        setValue(value + 1);
    }
    const descrease = () => {
        setValue(value -1 );
    }


  return (
    <div>
        <p>Click the button to increase the value</p>
        <button onClick={handleClick}>Increase</button>
        <button onClick={descrease}>Decrease</button>
        <p>{value}</p>
    </div>
  )
}

export default OnClick;

