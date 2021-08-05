import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  amountOfPizzas: parseInt(localStorage[('amountOfPizzas')]) || 0
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.amountOfPizzas += 1;
      localStorage.setItem('amountOfPizzas', state.amountOfPizzas)
    },
    decrement: (state) => {
      state.amountOfPizzas -= 1
    },
    placed: (state) => {
      state.amountOfPizzas = 0;
      localStorage.removeItem('checkoutPizzas');
      localStorage.removeItem('amountOfPizzas');
    },
    removeItem: (state, { payload }) => {
      state.amountOfPizzas -= payload;
      localStorage.setItem('amountOfPizzas', state.amountOfPizzas)
    }
  }
});
export const { increment, decrement, placed, removeItem } = countSlice.actions;
export const countReducer = countSlice.reducer;
