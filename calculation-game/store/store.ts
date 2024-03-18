import { configureStore } from '@reduxjs/toolkit';
import calculationsReducer from './calculations/calculationsSlice';

export const store = configureStore({
  reducer: {
    calculations: calculationsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
