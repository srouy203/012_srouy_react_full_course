import React from 'react'
import redux from 'redux'
import { createStore } from 'redux'
// import { configureStore } from '@reduxjs/toolkit';



const BUY_CAKE = "BUY_CAKE";
const BUY_ICE = "BUY_ICE";

function buyCake(){          //action creator
    return{
        type: BUY_CAKE,        //action
        info: 'First action'
    }
}
function buyIce(){
    return{
        type: BUY_ICE
    }
}

const initialState = {
    numOfCakes: 10,
    numOfIce: 20
} 

const reducer = (state = initialState, action) => {     //reducer
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case BUY_ICE:
            return {
                ...state,
                numberOfIce: state.numOfIce - 1
            }
        default:
            return  state
    }
}
const store = createStore(reducer);
// const store = configureStore(reducer);

console.log('Initial State: ', store.getState());
const unsubscribe = store.subscribe(()=>console.log('Updated state', store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyIce())

unsubscribe()

function Redux() {
    
  return ( 
    <div>
      <h1>Redux</h1>
    </div>
  )
}

export default Redux
