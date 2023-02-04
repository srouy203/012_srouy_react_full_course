import React from 'react'
import { useReducer } from 'react';
import ComponentA from './9.1 ComponentA';
import ComponentB from './9.2 ComponentB';
export const CountContext = React.createContext()

const initialState = 0;

const reducerr = (state, action) => {
  switch(action){
      case 'increase':
          return state + 1
      case 'decrease':
          return state - 1
      case 'reset':
          return initialState
      default:
          return state
  }
}

function ReducerWithContext() {
  const [count, dispatch] = useReducer(reducerr, initialState)
  return (
    <div>
      <CountContext.Provider 
        value={{countState: count, countDispatch: dispatch}}
        >
        Cout: {count}
        <ComponentA/>
        <ComponentB/>
      </CountContext.Provider>
    </div>
  )
}

export default ReducerWithContext


