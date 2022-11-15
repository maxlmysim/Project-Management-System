import { IBoard } from './boardTypes';

export interface ResponseUserData {
  _id: string;
  name: string;
  login: string;
}

export interface SignInResponse {
  token: string;
  name: string;
  login: string;
  userId: string;
}

export type SignUpResponse = ResponseUserData;

export interface BoardsResponse extends IBoard {
  _id: string;
}
