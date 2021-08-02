import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  justAddedPizza: ""
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    detectJustAddedPizza: (state, { payload }) => {
      console.log(payload)
      state.justAddedPizza = payload
    }
  }
});
export const { detectJustAddedPizza } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
