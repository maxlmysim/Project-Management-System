import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { RootState, TypedThunkAPI } from './store';
import { IBoardResponse } from '../types/responseTypes';
import { IBoard } from '../types/boardTypes';
import { boardService } from '../api/boardService';
import { closeModalWindow } from './modalSlice';

interface IBoardState {
  boards: IBoardResponse[];
}

const initialState: IBoardState = {
  boards: [],
};

export const addNewBoard = createAsyncThunk<IBoardResponse, IBoard, TypedThunkAPI>(
  'board/addNewBoard',
  async (data: IBoard, { rejectWithValue, getState, dispatch }) => {
    try {
      const { userId } = getState().authStore;
      data.users = [userId];
      const response = await boardService.addNewBoard(data);
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

export const getAllBoards = createAsyncThunk<IBoardResponse[], void, TypedThunkAPI>(
  'board/getAllBoards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await boardService.getAllBoards();
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
    builder.addCase(addNewBoard.fulfilled, (state, { payload: board }) => {
      state.boards = [...state.boards, board];
    });
    builder.addCase(getAllBoards.fulfilled, (state, { payload: boards }) => {
      state.boards = boards;
    });
  },
});

export const {} = boardSlice.actions;

export const boardReducer = boardSlice.reducer;

export const boardSelector = (state: RootState): IBoardState => state.boardStore;
