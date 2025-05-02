import { createStore } from "redux";
import { counterFun } from "./reducers/counterReducer";

export const storeData=createStore(counterFun)