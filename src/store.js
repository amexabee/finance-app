import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import startupsReducer from './features/startups/startupsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    startups: startupsReducer,
  },
});
