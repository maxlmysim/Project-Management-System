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
  currentTask: ITaskResponse;
}

const initialState: IColumnState = {
  columns: [],
  currentColumn: { _id: '', title: '', order: 0, users: [], owner: '', tasks: [], boardId: '' },
  currentTask: {
    _id: '',
    title: '',
    order: 0,
    users: [],
    description: '',
    userId: '',
    boardId: '',
    columnId: '',
  },
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

export const deleteColumn = createAsyncThunk<IColumnResponse, void, TypedThunkAPI>(
  'column/deleteColumn',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const { boardId, _id } = getState().columnStore.currentColumn;
      const response = await columnService.deleteColumn(boardId, _id);
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

export const editColumn = createAsyncThunk<IColumnResponse, IColumn, TypedThunkAPI>(
  'column/editColumn',
  async (column, { rejectWithValue, getState, dispatch }) => {
    try {
      const { _id, boardId, order } = getState().columnStore.currentColumn;
      column.order = order;
      const response = await columnService.editColumn(boardId, _id, column);
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
      const { _id: idColumn, boardId } = getState().columnStore.currentColumn;
      data.order = getState().columnStore.currentColumn.tasks.length;
      data.users = [];
      data.userId = getState().authStore.userId;
      const response = await columnService.addNewTask(boardId, idColumn, data);
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

export const deleteTask = createAsyncThunk<ITaskResponse, void, TypedThunkAPI>(
  'column/deleteTask',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const { _id, boardId, columnId } = getState().columnStore.currentTask;
      const response = await columnService.deleteTask(boardId, columnId, _id);
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

export const editTask = createAsyncThunk<ITaskResponse, ITask, TypedThunkAPI>(
  'column/editTask',
  async (data: ITask, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        _id: taskId,
        boardId,
        columnId,
        title,
        users,
        order,
        description,
        userId,
      } = getState().columnStore.currentTask;

      const newData = {
        columnId,
        title: data.title || title,
        description: data.description || description,
        users,
        order,
        userId,
      };
      console.log(newData);
      const response = await columnService.editTask(boardId, columnId, taskId, newData);
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
    setCurrentTask(state: IColumnState, { payload: content }: PayloadAction<ITaskResponse>) {
      state.currentTask = content;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllColumnsByBoard.fulfilled, (state, { payload: columns }) => {
      state.columns = columns;
    });
    builder.addCase(editColumn.fulfilled, (state, { payload: column }) => {
      state.columns = state.columns.map((columnState) => {
        if (columnState._id === column._id) {
          columnState.title = column.title;
          columnState.order = column.order;
        }
        return columnState;
      });
    });
    builder.addCase(addNewColumn.fulfilled, (state, { payload: column }) => {
      state.columns = [...state.columns, column];
      state.currentColumn = column;
    });

    builder.addCase(deleteColumn.fulfilled, (state, { payload: column }) => {
      state.columns = state.columns.filter((columnState) => columnState._id !== column._id);
      state.currentColumn = initialState.currentColumn;
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
    builder.addCase(deleteTask.fulfilled, (state, { payload: taskResponse }) => {
      const { columnId, _id: taskId } = taskResponse;
      state.columns = state.columns.map((column: IColumnResponse) => {
        if (column._id === columnId) {
          column.tasks = column.tasks.filter((task) => task._id !== taskId);
        }
        return column;
      });
    });
    builder.addCase(editTask.fulfilled, (state, { payload: taskResponse }) => {
      const { columnId } = taskResponse;
      state.columns = state.columns.map((column: IColumnResponse) => {
        if (column._id === columnId) {
          column.tasks = column.tasks.map((task) =>
            task._id === taskResponse._id ? taskResponse : task
          );
        }
        return column;
      });
    });
  },
});

export const columnReducer = columnSlice.reducer;

export const { setCurrentColumn, setCurrentTask } = columnSlice.actions;

export const columnSelector = (state: RootState): IColumnState => state.columnStore;
