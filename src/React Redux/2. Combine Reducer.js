import React from 'react'
import redux from 'redux'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake(){
    return{
        type: BUY_CAKE
    }
}
function buyIce(){
    return{
        type: BUY_ICECREAM
    }
}

const initialCake = {
    numOfCake: 10
}
const initialIceCream = {
    numOfIceCream: 20
}

const reducerCake = (state = initialCake, action) => {
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCake: state.numOfCake - 1
            }
        default:
            return state
    }
}
const reducerIceCream = (state = initialIceCream, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            } 
        default:
            return state
    } 
}
    
const rootReducer = combineReducers({       //combine reducer
    Cake: reducerCake,
    IceCream: reducerIceCream,
})
const store = createStore(rootReducer, applyMiddleware(logger))     //middleware

console.log('Initial state: ', store.getState());
// const unsubscribe = store.subscribe(()=> console.log('Update state: ', store.getState()));
// const unsubscribe = store.subscribe(()=> {});

    store.dispatch(buyCake());
    store.dispatch(buyCake());
    store.dispatch(buyCake());
    store.dispatch(buyIce());
    store.dispatch(buyIce()); 
    store.dispatch(buyIce());

// unsubscribe();

function CombineReducer() {
  return (
    <div>
      <h1>Combine Reducer</h1>
    </div>
  )
}

export default CombineReducer
