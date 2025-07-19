// src/store.js
import { configureStore } from '@reduxjs/toolkit'; // Make sure this is imported correctly
import cartReducer from './CartSlice';             // This path is correct based on your screenshot

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;