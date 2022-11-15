import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { RootState, TypedThunkAPI } from './store';
import { IBoardsResponse } from '../types/responseTypes';
import { IBoard } from '../types/boardTypes';
import { boardService } from '../api/boardService';

interface IBoardState {
  isLogin: boolean;
  login: string;
  userId: string;
  name: string;
  isLoading: boolean;
}

const initialState: IBoardState = {
  isLogin: false,
  login: '',
  userId: '',
  name: '',
  isLoading: false,
};

export const addNewBoard = createAsyncThunk<IBoardsResponse, IBoard, TypedThunkAPI>(
  'board/addNewBoard',
  async (data: IBoard, { rejectWithValue }) => {
    try {
      const response = await boardService.addNewBoard(data);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    }
  }
);

const boardSlice = createSlice({
  name: 'Board',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewBoard.fulfilled, () => {});
  },
});

export const {} = boardSlice.actions;

export const boardReducer = boardSlice.reducer;

export const boardSelector = (state: RootState): IBoardState => state.boardStore;
