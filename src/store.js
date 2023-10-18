import { createStore, applyMiddleware, combineReducers } from "redux";
import Reducer from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    data: Reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
  
export default store;