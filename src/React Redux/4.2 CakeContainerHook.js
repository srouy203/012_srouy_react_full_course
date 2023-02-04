import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from './redux/2. index';

function CakeContainerHook() {
    const qtyCake = useSelector(state => state.cake.numOfCake)
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Order cake from the shop with hook - {qtyCake}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default CakeContainerHook
