import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { RootState, TypedThunkAPI } from './store';
import { IBoardResponse } from '../types/responseTypes';
import { IBoard } from '../types/boardTypes';
import { boardService } from '../api/boardService';
import { closeModalWindow } from './modalSlice';
import { hideLoader, showLoader } from './loaderSlice';

interface IBoardState {
  boards: IBoardResponse[];
  currentBoard: IBoardResponse;
  isLoading: boolean;
}

const initialState: IBoardState = {
  isLoading: false,
  boards: [],
  currentBoard: { users: [], owner: '', title: '', _id: '' },
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
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(showLoader());
      const response = await boardService.getAllBoards();
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

export const deleteBoard = createAsyncThunk<IBoardResponse, void, TypedThunkAPI>(
  'board/deleteBoard',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const { _id } = getState().boardStore.currentBoard;
      const response = await boardService.deleteBoard(_id);
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

export const editBoard = createAsyncThunk<IBoardResponse, IBoard, TypedThunkAPI>(
  'board/editBoard',
  async (board, { rejectWithValue, getState, dispatch }) => {
    try {
      const { _id, users } = getState().boardStore.currentBoard;
      const data = { ...board, users };
      const response = await boardService.editBoard(_id, data);
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

const boardSlice = createSlice({
  name: 'Board',
  initialState,
  reducers: {
    setBoard(state: IBoardState, action) {
      state.currentBoard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addNewBoard.fulfilled, (state, { payload: board }) => {
      state.boards = [...state.boards, board];
    });
    builder.addCase(getAllBoards.fulfilled, (state, { payload: boards }) => {
      state.boards = boards;
    });
    builder.addCase(deleteBoard.fulfilled, (state, { payload: board }) => {
      state.boards = state.boards.filter((boardState) => boardState._id !== board._id);
    });
    builder.addCase(editBoard.fulfilled, (state, { payload: board }) => {
      state.boards = state.boards.map((boardState) => {
        if (boardState._id === board._id) {
          boardState.title = board.title;
          boardState.owner = board.owner;
        }
        return boardState;
      });
    });
  },
});

export const { setBoard } = boardSlice.actions;

export const boardReducer = boardSlice.reducer;

export const boardSelector = (state: RootState): IBoardState => state.boardStore;
