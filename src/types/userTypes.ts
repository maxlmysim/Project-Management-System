export interface IUserData {
  name: string;
  login: string;
}

export interface IUser {
  password: string;
  login: string;
}

export interface INewUser {
  name: string;
  password: string;
  login: string;
}

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
