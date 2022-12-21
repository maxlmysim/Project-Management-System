import { isAsyncThunkAction } from '@reduxjs/toolkit';
import { addNewBoard, deleteBoard, editBoard } from './boardSlice';
import {
  addNewColumn,
  addNewTask,
  deleteColumn,
  deleteTask,
  editColumn,
  editTask,
} from './columnSlice';
import { deleteUser, editLogin, editName, signIn, signUp } from './authSlice';

export const isBoardAction = isAsyncThunkAction(deleteBoard, addNewBoard, editBoard);
export const isColumnAction = isAsyncThunkAction(deleteColumn, addNewColumn, editColumn);
export const isTaskAction = isAsyncThunkAction(deleteTask, addNewTask, editTask);
export const isUserAction = isAsyncThunkAction(deleteUser, editLogin, editName);
export const isSignInAction = isAsyncThunkAction(signIn);
export const isSignUpAction = isAsyncThunkAction(signUp);

export const isDeleteAction = isAsyncThunkAction(deleteBoard, deleteColumn, deleteTask, deleteUser);
export const isAddAction = isAsyncThunkAction(addNewBoard, addNewColumn, addNewTask);
export const isEditAction = isAsyncThunkAction(
  editBoard,
  editColumn,
  editTask,
  editLogin,
  editName
);
export const isSignAction = isAsyncThunkAction(signIn, signUp);
