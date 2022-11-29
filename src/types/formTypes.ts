import { editLogin, editName, deleteUser } from '../store/authSlice';
import { IFieldProps } from '../constants/modalField';
import { addNewBoard, deleteBoard, editBoard, showBoard } from 'store/boardSlice';

export type ModalFormActions = {
  editLogin: typeof editLogin;
  editName: typeof editName;
  deleteUser: typeof deleteUser;
  addNewBoard: typeof addNewBoard;
  deleteBoard: typeof deleteBoard;
  editBoard: typeof editBoard;
  showBoard: typeof showBoard;
};

export type ModalActionKeys = keyof ModalFormActions;

export type AppFormTypes = {
  name: string;
  password: string;
  login: string;
  title: string;
  owner: string;
  users: string[];
};

export type IFormContent = {
  modalTitle: string;
  action: ModalActionKeys;
  fields: IFieldProps[];
};
