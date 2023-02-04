import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCandy } from './redux/2. index';

function CandyContainerHook() {
    const qtyCandy = useSelector(state => state.candy.numOfCandy);
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Buy Candy from the shop with Hook - {qtyCandy}</h2>
        <button onClick={()=>dispatch(buyCandy())}>Buy Candy</button>
    </div>
  )
}

export default CandyContainerHook
