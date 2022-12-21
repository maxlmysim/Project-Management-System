import { createSlice } from '@reduxjs/toolkit';
import { FulfilledAction, PendingAction, RejectedAction, RootState } from './store';
import { FULFILLED, PENDING, REJECTED } from '../constants/asyncThunk';
import {
  isAddAction,
  isBoardAction,
  isColumnAction,
  isDeleteAction,
  isDoneAction,
  isEditAction,
  isNotDoneAction,
  isSignAction,
  isSignInAction,
  isSignUpAction,
  isTaskAction,
  isUserAction,
} from './utils';

export type IAlertType = ALERT.INFO | ALERT.SUCCESS | ALERT.ERROR;

export interface IAlertContent {
  type: IAlertType;
  message: string;
}

export type IAlertState = {
  isShow: boolean;
  timeout: 2000;
  content: IAlertContent;
};

export enum ALERT {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
}

const initialState: IAlertState = {
  isShow: false,
  timeout: 2000,
  content: {
    message: '',
    type: ALERT.SUCCESS,
  },
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    closeAlert(state: IAlertState) {
      state.isShow = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action): action is PendingAction => action.type.endsWith(PENDING),
      (state) => {
        state.isShow = false;
      }
    );
    builder.addMatcher(
      (action): action is FulfilledAction => action.type.endsWith(FULFILLED),
      (state, action) => {
        const content = {
          type: ALERT.SUCCESS,
          message: '',
        };
        if (isDeleteAction(action)) {
          state.isShow = true;
          if (isBoardAction(action)) content.message = 'Доска удалена';
          if (isColumnAction(action)) content.message = 'Список задач удален';
          if (isTaskAction(action)) content.message = 'Задача удалена';
          if (isUserAction(action)) content.message = 'Пользователь удален';
        }
        if (isAddAction(action)) {
          state.isShow = true;
          if (isBoardAction(action)) content.message = 'Доска добавлена';
          if (isColumnAction(action)) content.message = 'Список задач добавлен';
          if (isTaskAction(action)) content.message = 'Задача добавлена';
        }
        if (isEditAction(action)) {
          state.isShow = true;
          if (isBoardAction(action)) content.message = 'Доска изменена';
          if (isColumnAction(action)) content.message = 'Список задач изменен';
          if (isTaskAction(action)) content.message = 'Задача изменена';
          if (isUserAction(action)) content.message = 'Пользователь изменен';
        }
        if (isDoneAction(action)) {
          state.isShow = true;
          if (isTaskAction(action)) content.message = 'Задача выполнена';
        }
        if (isNotDoneAction(action)) {
          state.isShow = true;
          if (isTaskAction(action)) content.message = 'Задача восстановлена';
        }
        if (isSignAction(action)) {
          state.isShow = true;
          if (isSignUpAction(action)) content.message = 'Пользователь создан';
          if (isSignInAction(action)) content.message = 'Пользователь авторизован';
        }
        state.content = { ...content };
      }
    );
    builder.addMatcher(
      (action): action is RejectedAction => action.type.endsWith(REJECTED),
      (state, action) => {
        const content = {
          type: ALERT.ERROR,
          message: '',
        };
        if (isAddAction(action)) {
          state.isShow = true;
          content.message = 'Невозможно добавить';
        }
        if (isDeleteAction(action)) {
          state.isShow = true;
          content.message = 'Невозможно удалить';
        }
        if (isEditAction(action)) {
          state.isShow = true;
          content.message = 'Невозможно изменить';
        }
        state.content = { ...content };
      }
    );
  },
});

export const alertReducer = alertSlice.reducer;
export const { closeAlert } = alertSlice.actions;

export const alertSelector = (state: RootState): IAlertState => state.alertStore;
