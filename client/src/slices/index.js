import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import deviceSlice from './deviceSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    device: deviceSlice,
  },
});
