import { deleteUser, editLogin, editName } from '../store/authSlice';
import { IFieldPropsInput } from '../constants/modalField';
import { addNewBoard, deleteBoard, editBoard } from 'store/boardSlice';
import { IColumn } from './boardTypes';
import {
  addNewColumn,
  deleteColumn,
  editColumn,
  addNewTask,
  deleteTask,
  editTask,
} from '../store/columnSlice';

export type ModalFormActions = {
  editLogin: typeof editLogin;
  editName: typeof editName;
  deleteUser: typeof deleteUser;
  addNewBoard: typeof addNewBoard;
  deleteBoard: typeof deleteBoard;
  editBoard: typeof editBoard;
  addNewColumn: typeof addNewColumn;
  deleteColumn: typeof deleteColumn;
  editColumn: typeof editColumn;
  addNewTask: typeof addNewTask;
  deleteTask: typeof deleteTask;
  editTask: typeof editTask;
};

export type ModalActionKeys = keyof ModalFormActions;

export type AppFormTypes = {
  name: string;
  password: string;
  login: string;
  title: string;
  owner: string;
  users: string[];
  columns: IColumn[];
  order: number;
  description: string;
  userId: string;
};

export type IModalContent = {
  modalTitle: string;
  action?: ModalActionKeys;
  fieldsInput?: IFieldPropsInput[];
  isHideConfirmButton?: boolean;
};
