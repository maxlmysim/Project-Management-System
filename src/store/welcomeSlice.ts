import { createSlice } from '@reduxjs/toolkit';
import { getMyData } from './authSlice';
import { RootState } from './store';

interface IWelcomeState {
  isLoadingPage: boolean;
}

const initialState: IWelcomeState = {
  isLoadingPage: true,
};

const welcomeSlice = createSlice({
  name: 'Welcome',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMyData.fulfilled, (state) => {
      state.isLoadingPage = false;
    });
    builder.addCase(getMyData.rejected, (state) => {
      state.isLoadingPage = false;
    });
  },
});

export const welcomeReducers = welcomeSlice.reducer;

export const welcomeSelector = (state: RootState): IWelcomeState => state.welcomeStore;
