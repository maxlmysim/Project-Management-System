import { IBoard, IColumn, ITask } from './boardTypes';

export interface IResponseUserData {
  _id: string;
  name: string;
  login: string;
}

export interface ISignInResponse {
  token: string;
  name: string;
  login: string;
  userId: string;
}

export type ISignUpResponse = IResponseUserData;

export interface IBoardResponse extends IBoard {
  _id: string;
}

export interface IColumnResponse extends IColumn {
  _id: string;
  boardId: string;
  tasks: ITaskResponse[];
}

export interface ITaskResponse extends ITask {
  _id: string;
  boardId: string;
  columnId: string;
}
