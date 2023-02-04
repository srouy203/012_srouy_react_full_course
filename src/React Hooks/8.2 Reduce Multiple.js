import React, { useReducer } from 'react'

const initailState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increase':
            return state + 1
        case 'decrease':
            return state - 1 
        case 'reset':
            return initailState
        default:
            return state
    }
}

function ReducerMultiple() {
    const [count, dispatch] = useReducer(reducer, initailState)
    const [count2, dispatch2] = useReducer(reducer, initailState)
  return (
    <div>
        <button onClick={()=> dispatch('increase')}>Increaase</button>
        <button onClick={()=> dispatch('decrease')}>Decrease</button>
        <button onClick={()=> dispatch('reset')}>Reset</button>
        <h1>{count}</h1>
        <div>
            <button onClick={()=> dispatch2('increase')}>Increaase</button>
            <button onClick={()=> dispatch2('decrease')}>Decrease</button>
            <button onClick={()=> dispatch2('reset')}>Reset</button>
        </div>
        <h1>{count2}</h1>
        
    </div>
  )
}

export default ReducerMultiple
