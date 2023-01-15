import { Action, AsyncThunk, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authReducers } from './authSlice';
import { welcomeReducers } from './welcomeSlice';
import { modalReducer } from './modalSlice';
import { boardReducer } from './boardSlice';
import { loaderReducer } from './loaderSlice';
import { columnReducer } from './columnSlice';
import { alertReducer } from './alertSlice';
import { IBoard } from '../types/boardTypes';
// import { createBrowserHistory } from 'history';
import { redirectReducer } from './redirectSlice';
//
// export const history = createBrowserHistory();
export const store = configureStore({
  reducer: {
    authStore: authReducers,
    welcomeStore: welcomeReducers,
    modalStore: modalReducer,
    boardStore: boardReducer,
    columnStore: columnReducer,
    loaderStore: loaderReducer,
    alertStore: alertReducer,
    redirectStore: redirectReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

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

export type GenericAsyncThunk = AsyncThunk<IBoard[], string, TypedThunkAPI>;
export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;
