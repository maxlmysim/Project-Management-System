import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ILoader {
  isLoading: boolean;
}

const initialState: ILoader = {
  isLoading: true,
};

const loaderSlice = createSlice({
  name: 'Loader',
  initialState,
  reducers: {
    showLoader(state: ILoader) {
      state.isLoading = true;
    },
    hideLoader(state: ILoader) {
      state.isLoading = false;
    },
  },
});

export const { hideLoader, showLoader } = loaderSlice.actions;

export const loaderReducer = loaderSlice.reducer;

export const loaderSelector = (state: RootState): ILoader => state.loaderStore;
