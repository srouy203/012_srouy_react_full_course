import { createStore } from "redux";
import reducers from "./rootreducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools())

export default store