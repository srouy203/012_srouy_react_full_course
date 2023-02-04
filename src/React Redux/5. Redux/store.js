import { createStore } from "redux"
import { countReducer } from "./count/countReduce"

const store = createStore(countReducer)

export default store;