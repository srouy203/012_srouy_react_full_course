import { INCREASE, DECREASE, RESET } from "./countType"

const initialState = {
    value: 0
}

export const countReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREASE:
            return {
                ...state,
                value: state.value + 1
            }
        case DECREASE:
            return {
                ...state,
                value: state.value - 1
            }
        case RESET:
            return {
                ...state,
                value: initialState.value
            }
        default:
            return state
    }
}