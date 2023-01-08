import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import devicesSlice from './devicesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    devices: devicesSlice,
  },
});
