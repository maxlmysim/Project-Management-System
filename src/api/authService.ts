import { api } from './index';
import { AxiosResponse } from 'axios';
import Endpoints from '../constants/endpoints';
import { NewUser, User } from 'types/userTypes';
import { SignInResponse, SignUpResponse } from 'types/responseTypes';

export const authService = {
  signInUser(user: User): Promise<AxiosResponse<SignInResponse>> {
    return api.post(Endpoints.SIGN_IN, user);
  },
  signUpUser(user: NewUser): Promise<AxiosResponse<SignUpResponse>> {
    return api.post(Endpoints.SIGN_UP, user);
  },
};
