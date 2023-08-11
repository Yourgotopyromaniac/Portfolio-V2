import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"
import accentReducer from './accentSlice'

const store = configureStore({
    reducer: {
       theme : themeReducer,
       accent: accentReducer,
    },

  });
  
  export default store;