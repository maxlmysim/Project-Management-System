import { createSlice } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router/dist/lib/hooks';

interface IInitialState {
  navigate: NavigateFunction[];
}

const initialState: IInitialState = {
  navigate: [],
};

const redirectSlice = createSlice({
  name: 'Loader',
  initialState,
  reducers: {
    setNavigate(state, { payload: navigate }: { payload: NavigateFunction }) {
      state.navigate[0] = navigate;
    },
    redirect(state, { payload: path }: { payload: string }) {
      state.navigate[0](path);
    },
  },
});

export const { redirect, setNavigate } = redirectSlice.actions;

export const redirectReducer = redirectSlice.reducer;
