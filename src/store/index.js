import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart";
import { countReducer } from "./slices/count";

const reducer = combineReducers({
  countReducer,
  cartReducer
})

export const globalStore = configureStore({
  reducer
});