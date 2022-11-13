import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authReducers } from './authSlice';

export const store = configureStore({
  reducer: {
    authStore: authReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
