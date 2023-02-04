import { BUY_CAKE } from "./1. cakeTypes"

const initialCake = {
    numOfCake: 15
}

const cakeReducer = (state = initialCake, action) => {   //reducer
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCake: state.numOfCake - action.payload,
            }
        default:
            return state
    }
}

export default cakeReducer;