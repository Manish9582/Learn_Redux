import { combineReducers, createStore } from "redux";
import { moveReducer } from "./reducers/move";
import { cardReducer } from "./reducers/card";
import { composeWithDevTools } from 'redux-devtools-extension';


const proViderred=combineReducers({
    moveData:moveReducer,
    cardData:cardReducer
})

const store=createStore(proViderred, composeWithDevTools());
export default store;