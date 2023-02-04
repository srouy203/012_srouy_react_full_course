import { contactReducer } from "../reducer/crudReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    addCon: contactReducer,
})

export default reducers