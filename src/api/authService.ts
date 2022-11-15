import { api } from './index';
import { AxiosResponse } from 'axios';
import Endpoints from '../constants/endpoints';
import { INewUser, IUser } from 'types/userTypes';
import { ISignInResponse, ISignUpResponse } from 'types/responseTypes';

export const authService = {
  signInUser(user: IUser): Promise<AxiosResponse<ISignInResponse>> {
    return api.post(Endpoints.SIGN_IN, user);
  },
  signUpUser(user: INewUser): Promise<AxiosResponse<ISignUpResponse>> {
    return api.post(Endpoints.SIGN_UP, user);
  },
};
