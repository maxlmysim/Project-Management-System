import { FormContent, ModalFormActions } from '../types/formTypes';
import { deleteUser, editLogin, editName } from '../store/authSlice';

export interface IFieldProps {
  label: string;
  name: 'login' | 'password' | 'name';
  placeholder: string;
  type: string;
  registerOptions: IRegisterOptions;
}

interface IRegisterOptions {
  required?: {
    value: boolean;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
}

const fieldLogin: IFieldProps = {
  label: 'Логин',
  name: 'login',
  type: 'text',
  placeholder: 'Введите ваш логин',
  registerOptions: {
    required: {
      value: true,
      message: 'Это поле обязательно!',
    },
    minLength: {
      value: 4,
      message: 'Длинна логина должна быть больше 3 символов',
    },
  },
};

const fieldPassword: IFieldProps = {
  label: 'Пароль',
  name: 'password',
  registerOptions: {
    required: {
      value: true,
      message: 'Это поле обязательно!',
    },
    minLength: {
      value: 8,
      message: 'Длинна пароля должна быть 8 символов или более ',
    },
  },
  type: 'password',
  placeholder: 'Введите ваш пароль',
};

const fieldName: IFieldProps = {
  label: 'Имя',
  name: 'name',
  type: 'text',
  placeholder: 'Введите ваше имя',
  registerOptions: {
    required: {
      value: true,
      message: 'Это поле обязательно!',
    },
    minLength: {
      value: 4,
      message: 'Длинна имени должна быть больше 3 символов',
    },
  },
};

export const signInFieldList: IFieldProps[] = [fieldLogin, fieldPassword];
export const registrationFieldList: IFieldProps[] = [fieldName, fieldLogin, fieldPassword];
export const changeNameFieldList: IFieldProps[] = [fieldName, fieldPassword];
export const changeLoginFieldList: IFieldProps[] = [fieldLogin, fieldPassword];

export const EDIT_LOGIN: FormContent = {
  modalTitle: 'Изменить логин',
  action: 'editLogin',
  fields: changeLoginFieldList,
};

export const EDIT_NAME: FormContent = {
  modalTitle: 'Изменить имя',
  action: 'editName',
  fields: changeNameFieldList,
};

export const DELETE_USER: FormContent = {
  modalTitle: 'Удалить пользователя?',
  action: 'deleteUser',
  fields: [],
};

export const modalActions: ModalFormActions = {
  editName,
  editLogin,
  deleteUser,
};
