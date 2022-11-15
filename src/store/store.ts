import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authReducers } from './authSlice';
import { welcomeReducers } from './welcomeSlice';
import { modalReducer } from './modalSlice';

export const store = configureStore({
  reducer: {
    authStore: authReducers,
    welcomeStore: welcomeReducers,
    modalStore: modalReducer,
  },
  devTools: true,
});
console.log(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

export type TypedThunkAPI = {
  state: RootState;
  rejectWithValue: ValidationErrors;
};
