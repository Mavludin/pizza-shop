import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./slices/count";

export const globalStore = configureStore({
  reducer: countReducer
});