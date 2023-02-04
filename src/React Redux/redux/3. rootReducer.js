import cakeReducer from "./cake/3. cakeReducer";
import candyReducer from "./candy/candyReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cake: cakeReducer,
    candy: candyReducer
})

export default rootReducer;