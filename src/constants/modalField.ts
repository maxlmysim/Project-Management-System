import { IModalContent, ModalFormActions } from '../types/formTypes';
import { deleteUser, editLogin, editName } from '../store/authSlice';
import { addNewBoard, deleteBoard, editBoard } from 'store/boardSlice';
import {
  addNewColumn,
  addNewTask,
  deleteColumn,
  deleteTask,
  editColumn,
  editTask,
  setTaskNotDone,
  setTaskDone,
} from 'store/columnSlice';

type fieldName = 'login' | 'password' | 'name' | 'owner' | 'title' | 'description';

export interface IFieldPropsInput {
  label: string;
  name: fieldName;
  placeholder: string;
  type: string;
  registerOptions: IRegisterOptions;
  defaultValue?: boolean | string;
}

export interface IFieldPropsInfo {
  title: string;
  owner?: string;
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

const fieldLogin: IFieldPropsInput = {
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

const fieldPassword: IFieldPropsInput = {
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

const fieldName: IFieldPropsInput = {
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

const boardName = (value = ''): IFieldPropsInput => {
  return {
    label: 'Название доски',
    name: 'title',
    type: 'text',
    placeholder: 'Введите название доски',
    defaultValue: value,
    registerOptions: {
      required,
      minLength: {
        value: 2,
        message: 'Минимальная длинна названия 2 символа',
      },
      maxLength: {
        value: 20,
        message: 'Максимальная длинна названия 20 символов',
      },
    },
  };
};

const boardDescription = (value = ''): IFieldPropsInput => {
  return {
    label: 'Описание',
    name: 'owner',
    type: 'text',
    placeholder: 'Введите описание',
    defaultValue: value,
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
};

const columnName = (value = ''): IFieldPropsInput => {
  return {
    label: 'Название списка',
    name: 'title',
    type: 'text',
    placeholder: 'Введите название',
    defaultValue: value,
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
};

const taskName = (value = ''): IFieldPropsInput => {
  return {
    label: 'Название задачи',
    name: 'title',
    type: 'text',
    placeholder: 'Введите название задачи',
    defaultValue: value,
    registerOptions: {
      required,
      minLength: {
        value: 2,
        message: 'Минимальная длинна названия 2 символа',
      },
      maxLength: {
        value: 30,
        message: 'Максимальная длинна названия 30 символов',
      },
    },
  };
};

const taskDescription = (value = ''): IFieldPropsInput => {
  return {
    label: 'Описание задачи',
    name: 'description',
    type: 'text',
    placeholder: 'Введите описание задачи',
    defaultValue: value,
    registerOptions: {
      required,
      minLength: {
        value: 2,
        message: 'Минимальная длинна названия 4 символа',
      },
      maxLength: {
        value: 100,
        message: 'Максимальная длинна названия 100 символов',
      },
    },
  };
};

export const signInFieldList: IFieldPropsInput[] = [fieldLogin, fieldPassword];
export const registrationFieldList: IFieldPropsInput[] = [fieldName, fieldLogin, fieldPassword];
const changeNameFieldList: IFieldPropsInput[] = [fieldName, fieldPassword];
const changeLoginFieldList: IFieldPropsInput[] = [fieldLogin, fieldPassword];

const addColumnFieldList: IFieldPropsInput[] = [columnName()];
const editColumnFieldList = (title = ''): IFieldPropsInput[] => [columnName(title)];
const addTaskFieldList: IFieldPropsInput[] = [taskName(), taskDescription()];
const editTaskFieldList = (title = '', owner = ''): IFieldPropsInput[] => [
  taskName(title),
  taskDescription(owner),
];

const addBoardFieldList: IFieldPropsInput[] = [boardName(), boardDescription()];
const editBoardFieldList = (title = '', owner = ''): IFieldPropsInput[] => [
  boardName(title),
  boardDescription(owner),
];

export const EDIT_LOGIN: IModalContent = {
  modalTitle: 'Изменить логин',
  action: 'editLogin',
  fieldsInput: changeLoginFieldList,
};

export const EDIT_NAME: IModalContent = {
  modalTitle: 'Изменить имя',
  action: 'editName',
  fieldsInput: changeNameFieldList,
};

export const DELETE_USER: IModalContent = {
  modalTitle: 'Удалить пользователя?',
  action: 'deleteUser',
};

export const ADD_BOARD: IModalContent = {
  modalTitle: 'Добавить доску',
  action: 'addNewBoard',
  fieldsInput: addBoardFieldList,
};

export const DELETE_BOARD: IModalContent = {
  modalTitle: 'Удалить доску?',
  action: 'deleteBoard',
};

export const EDIT_BOARD = (title = '', owner = ''): IModalContent => {
  return {
    modalTitle: 'Редактирование',
    action: 'editBoard',
    fieldsInput: editBoardFieldList(title, owner),
  };
};

export const ADD_COLUMN: IModalContent = {
  modalTitle: 'Создать список задач',
  action: 'addNewColumn',
  fieldsInput: addColumnFieldList,
};

export const SHOW_BOARD_INFO: IModalContent = {
  modalTitle: 'Доска',
  isHideConfirmButton: true,
};

export const DELETE_COLUMN: IModalContent = {
  modalTitle: 'Удалить список?',
  action: 'deleteColumn',
};

export const SHOW_COLUMN_INFO: IModalContent = {
  modalTitle: 'Колонка',
  isHideConfirmButton: true,
};

export const EDIT_COLUMN = (title = ''): IModalContent => {
  return {
    modalTitle: 'Редактирование',
    action: 'editColumn',
    fieldsInput: editColumnFieldList(title),
  };
};

export const SHOW_TASK_INFO: IModalContent = {
  modalTitle: 'Задача',
  isHideConfirmButton: true,
};

export const ADD_TASK: IModalContent = {
  modalTitle: 'Добавить задачу',
  action: 'addNewTask',
  fieldsInput: addTaskFieldList,
};

export const DELETE_TASK: IModalContent = {
  modalTitle: 'Удалить задачу?',
  action: 'deleteTask',
};

export const EDIT_TASK = (title = '', owner = ''): IModalContent => {
  return {
    modalTitle: 'Редактирование',
    action: 'editTask',
    fieldsInput: editTaskFieldList(title, owner),
  };
};

export const SET_TASK_DONE: IModalContent = {
  modalTitle: 'Задача выполнена?',
  action: 'setTaskDone',
};

export const SET_TASK_NOT_DONE: IModalContent = {
  modalTitle: 'Задача не выполнена?',
  action: 'setTaskNotDone',
};

export const modalActions: ModalFormActions = {
  editName,
  editLogin,
  deleteUser,
  addNewBoard,
  deleteBoard,
  editBoard,
  addNewColumn,
  deleteColumn,
  editColumn,
  addNewTask,
  deleteTask,
  editTask,
  setTaskDone,
  setTaskNotDone,
};
