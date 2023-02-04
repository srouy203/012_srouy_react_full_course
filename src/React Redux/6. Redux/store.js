import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./user/reducer/combineReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";

const store = createStore(rootReducer ,composeWithDevTools(applyMiddleware(logger, thunk)));

export default store