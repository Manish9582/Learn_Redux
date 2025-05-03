import { createStore } from "redux";
import { toreducer } from "./reducers/toreducer";

export const storedata=createStore(toreducer);