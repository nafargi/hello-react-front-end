// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetingsSlice';

export const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});
