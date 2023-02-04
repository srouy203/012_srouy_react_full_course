import React, { useReducer } from 'react'

const initailState = {
    counter1: 0
};
const reducer = (state, action) => {
    switch(action.type){
        case 'increase':
            return {counter1: state.counter1 + action.value}
        case 'decrease':
            return {counter1: state.counter1 - action.value}
        case 'reset':
            return initailState
        default:
            return state
    }
} 

function ReducerComplexState() {
    const [count, dispatch] = useReducer(reducer, initailState)
  return (
    <div>
        <button onClick={()=> dispatch({type: 'increase', value: 1})}>Increaase</button>
        <button onClick={()=> dispatch({type: 'decrease', value: 1})}>Decrease</button>
        <button onClick={()=> dispatch({type: 'increase', value: 5})}>Increaase 5</button>
        <button onClick={()=> dispatch({type: 'decrease', value: 5})}>Decrease 5</button>
        <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
        <h1>Counter1: {count.counter1}</h1>
    </div>
  )
}

export default ReducerComplexState
