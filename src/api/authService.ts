import { api } from './index';
import { AxiosResponse } from 'axios';
import Endpoints from '../constants/endpoints';
import { INewUser, ISignUpResponse, ISignInResponse, IUser } from 'types/userTypes';

export const authService = {
  signInUser(user: IUser): Promise<AxiosResponse<ISignInResponse>> {
    return api.post(Endpoints.SIGN_IN, user);
  },
  signUpUser(user: INewUser): Promise<AxiosResponse<ISignUpResponse>> {
    return api.post(Endpoints.SIGN_UP, user);
  },
};
