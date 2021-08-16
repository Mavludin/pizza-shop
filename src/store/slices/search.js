import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  string: ''
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      state.string = payload
    }
  }
});

export const { handleChange } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
