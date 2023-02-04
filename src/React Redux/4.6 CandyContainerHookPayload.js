import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCandy } from './redux/2. index';

function CandyContainerHookPayload() {
    const [value, setValue] = useState(1)
    const qtyCandy = useSelector(state => state.candy.numOfCandy);
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Buy Candy from the shop with Hook - {qtyCandy}</h2>
        <input 
            type="text" 
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            
        />
        <button onClick={()=>dispatch(buyCandy(value))}>Buy Candy</button>
    </div>
  )
}

export default CandyContainerHookPayload
