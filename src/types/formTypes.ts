import { editLogin, editName } from '../store/authSlice';
import { IFieldProps } from '../constants/modalField';

export type ModalFormActions = {
  editLogin: typeof editLogin;
  editName: typeof editName;
};

export type ModalActionKeys = keyof ModalFormActions;

export type AppFormTypes = {
  name: string;
  password: string;
  login: string;
};

export type FormContent = {
  modalTitle: string;
  action: ModalActionKeys;
  fields: IFieldProps[];
};
