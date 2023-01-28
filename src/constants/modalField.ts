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
  message: 'fields.message.require',
};

const fieldLogin: IFieldPropsInput = {
  label: 'fields.login.label',
  name: 'login',
  type: 'text',
  placeholder: 'fields.login.placeholder',
  registerOptions: {
    required,
    minLength: {
      value: 4,
      message: 'fields.message.min4',
    },
    maxLength: {
      value: 20,
      message: 'fields.message.max20',
    },
  },
};

const fieldPassword: IFieldPropsInput = {
  label: 'fields.password.label',
  name: 'password',
  registerOptions: {
    required,
    minLength: {
      value: 8,
      message: 'fields.message.min8',
    },
    maxLength: {
      value: 50,
      message: 'fields.message.max50',
    },
  },
  type: 'password',
  placeholder: 'fields.password.placeholder',
};

const fieldName: IFieldPropsInput = {
  label: 'fields.name.label',
  name: 'name',
  type: 'text',
  placeholder: 'fields.name.placeholder',
  registerOptions: {
    required,
    minLength: {
      value: 2,
      message: 'fields.message.min2',
    },
    maxLength: {
      value: 50,
      message: 'fields.message.max50',
    },
  },
};

const boardName = (value = ''): IFieldPropsInput => {
  return {
    label: 'fields.board.label',
    name: 'title',
    type: 'text',
    placeholder: 'fields.board.placeholder',
    defaultValue: value,
    registerOptions: {
      required,
      minLength: {
        value: 2,
        message: 'fields.message.min2',
      },
      maxLength: {
        value: 20,
        message: 'fields.message.max20',
      },
    },
  };
};

const boardDescription = (value = ''): IFieldPropsInput => {
  return {
    label: 'fields.board.description.label',
    name: 'owner',
    type: 'text',
    placeholder: 'fields.board.description.placeholder',
    defaultValue: value,
    registerOptions: {
      required,
      minLength: {
        value: 4,
        message: 'fields.message.min4',
      },
      maxLength: {
        value: 100,
        message: 'fields.message.max100',
      },
    },
  };
};

const columnName = (value = ''): IFieldPropsInput => {
  return {
    label: 'fields.column.label',
    name: 'title',
    type: 'text',
    placeholder: 'fields.column.placeholder',
    defaultValue: value,
    registerOptions: {
      required,
      minLength: {
        value: 2,
        message: 'fields.message.min2',
      },
      maxLength: {
        value: 50,
        message: 'fields.message.max30',
      },
    },
  };
};

const taskName = (value = ''): IFieldPropsInput => {
  return {
    label: 'fields.task.label',
    name: 'title',
    type: 'text',
    placeholder: 'fields.task.placeholder',
    defaultValue: value,
    registerOptions: {
      required,
      minLength: {
        value: 2,
        message: 'fields.message.min2',
      },
      maxLength: {
        value: 30,
        message: 'fields.message.max30',
      },
    },
  };
};

const taskDescription = (value = ''): IFieldPropsInput => {
  return {
    label: 'fields.task.description.label',
    name: 'description',
    type: 'text',
    placeholder: 'fields.task.description.placeholder',
    defaultValue: value,
    registerOptions: {
      required,
      minLength: {
        value: 2,
        message: 'fields.message.min4',
      },
      maxLength: {
        value: 100,
        message: 'fields.message.max100',
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
  modalTitle: 'modalTitle.editLogin',
  action: 'editLogin',
  fieldsInput: changeLoginFieldList,
};

export const EDIT_NAME: IModalContent = {
  modalTitle: 'modalTitle.editName',
  action: 'editName',
  fieldsInput: changeNameFieldList,
};

export const DELETE_USER: IModalContent = {
  modalTitle: 'modalTitle.deleteUser',
  action: 'deleteUser',
};

export const ADD_BOARD: IModalContent = {
  modalTitle: 'modalTitle.addNewBoard',
  action: 'addNewBoard',
  fieldsInput: addBoardFieldList,
};

export const DELETE_BOARD: IModalContent = {
  modalTitle: 'modalTitle.deleteBoard',
  action: 'deleteBoard',
};

export const EDIT_BOARD = (title = '', owner = ''): IModalContent => {
  return {
    modalTitle: 'modalTitle.editBoard',
    action: 'editBoard',
    fieldsInput: editBoardFieldList(title, owner),
  };
};

export const ADD_COLUMN: IModalContent = {
  modalTitle: 'modalTitle.addNewColumn',
  action: 'addNewColumn',
  fieldsInput: addColumnFieldList,
};

export const SHOW_BOARD_INFO: IModalContent = {
  modalTitle: 'modalTitle.board',
  isHideConfirmButton: true,
};

export const DELETE_COLUMN: IModalContent = {
  modalTitle: 'modalTitle.deleteColumn',
  action: 'deleteColumn',
};

export const SHOW_COLUMN_INFO: IModalContent = {
  modalTitle: 'modalTitle.column',
  isHideConfirmButton: true,
};

export const EDIT_COLUMN = (title = ''): IModalContent => {
  return {
    modalTitle: 'modalTitle.editColumn',
    action: 'editColumn',
    fieldsInput: editColumnFieldList(title),
  };
};

export const SHOW_TASK_INFO: IModalContent = {
  modalTitle: 'modalTitle.task',
  isHideConfirmButton: true,
};

export const ADD_TASK: IModalContent = {
  modalTitle: 'modalTitle.addNewTask',
  action: 'addNewTask',
  fieldsInput: addTaskFieldList,
};

export const DELETE_TASK: IModalContent = {
  modalTitle: 'modalTitle.deleteTask',
  action: 'deleteTask',
};

export const EDIT_TASK = (title = '', owner = ''): IModalContent => {
  return {
    modalTitle: 'modalTitle.editTask',
    action: 'editTask',
    fieldsInput: editTaskFieldList(title, owner),
  };
};

export const SET_TASK_DONE: IModalContent = {
  modalTitle: 'modalTitle.setTaskDone',
  action: 'setTaskDone',
};

export const SET_TASK_NOT_DONE: IModalContent = {
  modalTitle: 'modalTitle.setTaskNotDone',
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
