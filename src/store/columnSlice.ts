import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IColumnResponse } from '../types/responseTypes';
import { RootState, TypedThunkAPI } from './store';
import { hideLoader, showLoader } from './loaderSlice';
import { AxiosError } from 'axios';
import { columnService } from '../api/columnService';
import { IColumn } from '../types/boardTypes';
import { closeModalWindow } from './modalSlice';

interface IColumnState {
  columns: IColumnResponse[];
}

const initialState: IColumnState = {
  columns: [],
};

export const getAllColumns = createAsyncThunk<IColumnResponse[], void, TypedThunkAPI>(
  'column/getAllColumns',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(showLoader());
      const { _id } = getState().boardStore.currentBoard;
      const response = await columnService.getAllColumns(_id);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const addNewColumn = createAsyncThunk<IColumnResponse, IColumn, TypedThunkAPI>(
  'column/addNewColumn',
  async (data: IColumn, { rejectWithValue, getState, dispatch }) => {
    try {
      const { _id } = getState().boardStore.currentBoard;
      data.order = getState().columnStore.columns.length;
      const response = await columnService.addNewColumn(_id, data);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    } finally {
      dispatch(closeModalWindow());
    }
  }
);

const columnSlice = createSlice({
  name: 'Column',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllColumns.fulfilled, (state, { payload: columns }) => {
      state.columns = columns;
    });
    builder.addCase(addNewColumn.fulfilled, (state, { payload: column }) => {
      state.columns = [...state.columns, column];
    });
  },
});

export const columnReducer = columnSlice.reducer;

export const columnSelector = (state: RootState): IColumnState => state.columnStore;
