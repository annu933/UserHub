import { configureStore } from "@reduxjs/toolkit";
import userData from './slices/RegisterSlice'
const store = configureStore({
  reducer: {
    Users: userData
  },
})


export default store;