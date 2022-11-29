import { IFormContent, ModalFormActions } from '../types/formTypes';
import { deleteUser, editLogin, editName } from '../store/authSlice';
import { addNewBoard, deleteBoard, editBoard, showBoard } from 'store/boardSlice';
import { addNewColumn } from 'store/columnSlice';

type fieldName = 'login' | 'password' | 'name' | 'owner' | 'title';

export interface IFieldProps {
  label: string;
  name: fieldName;
  placeholder: string;
  type: string;
  registerOptions: IRegisterOptions;
}

interface IRequired {
  value: boolean;
  message: string;
}

interface IRegisterOptions {
  required?: IRequired;
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
}

const required: IRequired = {
  value: true,
  message: 'Это поле обязательно!',
};

const fieldLogin: IFieldProps = {
  label: 'Логин',
  name: 'login',
  type: 'text',
  placeholder: 'Введите ваш логин',
  registerOptions: {
    required,
    minLength: {
      value: 4,
      message: 'Минимальная длинна логина 4 символа',
    },
    maxLength: {
      value: 20,
      message: 'Максимальная длинна логина 20 символов',
    },
  },
};

const fieldPassword: IFieldProps = {
  label: 'Пароль',
  name: 'password',
  registerOptions: {
    required,
    minLength: {
      value: 8,
      message: 'Минимальная длинна пароля 8 символа',
    },
    maxLength: {
      value: 50,
      message: 'Максимальная длинна пароля 50 символов',
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
    required,
    minLength: {
      value: 2,
      message: 'Минимальная длинна имени 2 символа',
    },
    maxLength: {
      value: 50,
      message: 'Максимальная длинна имени 50 символов',
    },
  },
};

const boardName: IFieldProps = {
  label: 'Название доски',
  name: 'title',
  type: 'text',
  placeholder: 'Введите название доски',
  registerOptions: {
    required,
    minLength: {
      value: 2,
      message: 'Минимальная длинна имени 2 символа',
    },
    maxLength: {
      value: 30,
      message: 'Максимальная длинна имени 30 символов',
    },
  },
};

const boardDescription: IFieldProps = {
  label: 'Описание',
  name: 'owner',
  type: 'text',
  placeholder: 'Введите описание',
  registerOptions: {
    required,
    minLength: {
      value: 4,
      message: 'Минимальная длинна описания 4 символа',
    },
    maxLength: {
      value: 100,
      message: 'Максимальная длинна описания 100 символов',
    },
  },
};

const columnName: IFieldProps = {
  label: 'Название списка',
  name: 'title',
  type: 'text',
  placeholder: 'Введите название',
  registerOptions: {
    required,
    minLength: {
      value: 2,
      message: 'Минимальная длинна имени 2 символа',
    },
    maxLength: {
      value: 50,
      message: 'Максимальная длинна имени 30 символов',
    },
  },
};

export const signInFieldList: IFieldProps[] = [fieldLogin, fieldPassword];
export const registrationFieldList: IFieldProps[] = [fieldName, fieldLogin, fieldPassword];
const changeNameFieldList: IFieldProps[] = [fieldName, fieldPassword];
const changeLoginFieldList: IFieldProps[] = [fieldLogin, fieldPassword];
const addBoardFieldList: IFieldProps[] = [boardName, boardDescription];
const editBoardFieldList: IFieldProps[] = [boardName, boardDescription];
const addColumnFieldList: IFieldProps[] = [columnName];

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

export const ADD_COLUMN: IFormContent = {
  modalTitle: 'Создать cписок задач',
  action: 'addNewColumn',
  fields: addColumnFieldList,
};

export const SHOW_BOARD_INFO: IFormContent = {
  modalTitle: 'Доска ',
  action: 'showBoard',
  fields: [],
};

export const modalActions: ModalFormActions = {
  editName,
  editLogin,
  deleteUser,
  addNewBoard,
  deleteBoard,
  editBoard,
  showBoard,
  addNewColumn,
};
