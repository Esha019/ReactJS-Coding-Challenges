import {configureStore} from "@reduxjs/toolkit";
import reducers from "../reducers";

export const store = configureStore(reducers);
console.log("store", store);
export default store;