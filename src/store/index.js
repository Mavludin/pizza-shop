import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart";
import { countReducer } from "./slices/count";
import { searchReducer } from "./slices/search";

const reducer = combineReducers({
  countReducer,
  cartReducer,
  searchReducer
})

export const globalStore = configureStore({
  reducer
});