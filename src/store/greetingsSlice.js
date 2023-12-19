// src/greetingsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  randomGreeting: '',
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
    setRandomGreeting: (state, action) => {
      state.randomGreeting = action.payload;
    },
  },
});

export const { setRandomGreeting } = greetingsSlice.actions;
export const selectRandomGreeting = (state) => state.greetings.randomGreeting;

export default greetingsSlice.reducer;
