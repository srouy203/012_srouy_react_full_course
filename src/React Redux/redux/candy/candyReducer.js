import { BUY_CANDY } from "./candType";

const initailCandy = {
    numOfCandy: 20
}

const candyReducer = (state = initailCandy, action) => {
    switch(action.type){
        case BUY_CANDY:
            return{
                numOfCandy: state.numOfCandy - action.payload
            }
        default:
            return state
    }
}

export default candyReducer;