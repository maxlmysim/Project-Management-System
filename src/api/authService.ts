import { api } from './index';
import { AxiosResponse } from 'axios';
import Endpoints from '../constants/endpoints';

export interface User {
  password: string;
  login: string;
}

export interface NewUser {
  name: string;
  password: string;
  login: string;
}

interface SignInResponse {
  token: string;
  name: string;
  login: string;
  userId: string;
}

interface SignUpResponse {
  _id: string;
  name: string;
  login: string;
}

export const authService = {
  signInUser(user: User): Promise<AxiosResponse<SignInResponse>> {
    return api.post(Endpoints.SIGN_IN, user);
  },
  signUpUser(user: NewUser): Promise<AxiosResponse<SignUpResponse>> {
    return api.post(Endpoints.SIGN_UP, user);
  },
};
