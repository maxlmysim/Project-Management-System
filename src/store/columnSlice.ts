import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IColumnResponse, ITaskResponse } from '../types/responseTypes';
import { RootState, TypedThunkAPI } from './store';
import { hideLoader, showLoader } from './loaderSlice';
import { AxiosError } from 'axios';
import { columnService } from '../api/columnService';
import { IColumn, ITask } from '../types/boardTypes';
import { closeModalWindow } from './modalSlice';

interface IColumnState {
  columns: IColumnResponse[];
  currentColumn: IColumnResponse;
}

const initialState: IColumnState = {
  columns: [],
  currentColumn: { _id: '', title: '', order: 0, users: [], owner: '', tasks: [] },
};

export const getAllColumnsByBoard = createAsyncThunk<IColumnResponse[], string, TypedThunkAPI>(
  'column/getAllColumnsByBoard',
  async (boardId, { rejectWithValue, dispatch }) => {
    try {
      dispatch(showLoader());
      const response = await columnService.getAllColumnsByBoard(boardId);
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

export const addNewTask = createAsyncThunk<ITaskResponse, ITask, TypedThunkAPI>(
  'column/addNewTask',
  async (data: ITask, { rejectWithValue, getState, dispatch }) => {
    try {
      const idBoard = getState().boardStore.currentBoard._id;
      const idColumn = getState().columnStore.currentColumn._id;
      data.order = getState().columnStore.currentColumn.tasks.length;
      data.users = [];
      data.userId = getState().authStore.userId;
      const response = await columnService.addNewTask(idBoard, idColumn, data);
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

export const getAllTasksByBoard = createAsyncThunk<ITaskResponse[], void, TypedThunkAPI>(
  'column/getAllTasksByBoard',
  async (_, { rejectWithValue, getState }) => {
    try {
      const idBoard = getState().boardStore.currentBoard._id;
      const response = await columnService.getAllTasksByBoard(idBoard);
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

const columnSlice = createSlice({
  name: 'Column',
  initialState,
  reducers: {
    setCurrentColumn(state: IColumnState, { payload: content }: PayloadAction<IColumnResponse>) {
      state.currentColumn = content;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllColumnsByBoard.fulfilled, (state, { payload: columns }) => {
      state.columns = columns;
    });
    builder.addCase(addNewColumn.fulfilled, (state, { payload: column }) => {
      state.columns = [...state.columns, column];
      state.currentColumn = column;
    });
    builder.addCase(addNewTask.fulfilled, (state, { payload: task }) => {
      state.currentColumn.tasks = [...state.currentColumn.tasks, task];
      state.columns = state.columns.map((column: IColumnResponse) => {
        if (column._id === state.currentColumn._id) {
          return { ...column, tasks: [...state.currentColumn.tasks] };
        }
        return column;
      });
    });
  },
});

export const columnReducer = columnSlice.reducer;

export const { setCurrentColumn } = columnSlice.actions;

export const columnSelector = (state: RootState): IColumnState => state.columnStore;
