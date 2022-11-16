import { IFormContent, ModalFormActions } from '../types/formTypes';
import { deleteUser, editLogin, editName } from '../store/authSlice';
import { addNewBoard, deleteBoard, editBoard } from 'store/boardSlice';

export interface IFieldProps {
  label: string;
  name: 'login' | 'password' | 'name' | 'owner' | 'title';
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

const boardName: IFieldProps = {
  label: 'Название доски',
  name: 'title',
  type: 'text',
  placeholder: 'Введите название доски',
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

const boardDescription: IFieldProps = {
  label: 'Описание',
  name: 'owner',
  type: 'text',
  placeholder: 'Введите описание',
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
const changeNameFieldList: IFieldProps[] = [fieldName, fieldPassword];
const changeLoginFieldList: IFieldProps[] = [fieldLogin, fieldPassword];
const addBoardFieldList: IFieldProps[] = [boardName, boardDescription];
const editBoardFieldList: IFieldProps[] = [boardName, boardDescription];

export const EDIT_LOGIN: IFormContent = {
  modalTitle: 'Изменить логин',
  action: 'editLogin',
  fields: changeLoginFieldList,
};

export const EDIT_NAME: IFormContent = {
  modalTitle: 'Изменить имя',
  action: 'editName',
  fields: changeNameFieldList,
};

export const DELETE_USER: IFormContent = {
  modalTitle: 'Удалить пользователя?',
  action: 'deleteUser',
  fields: [],
};

export const ADD_BOARD: IFormContent = {
  modalTitle: 'Добавить доску',
  action: 'addNewBoard',
  fields: addBoardFieldList,
};

export const DELETE_BOARD: IFormContent = {
  modalTitle: 'Удалить доску?',
  action: 'deleteBoard',
  fields: [],
};

export const EDIT_BOARD: IFormContent = {
  modalTitle: 'Редактирование',
  action: 'editBoard',
  fields: editBoardFieldList,
};

export const modalActions: ModalFormActions = {
  editName,
  editLogin,
  deleteUser,
  addNewBoard,
  deleteBoard,
  editBoard,
};
