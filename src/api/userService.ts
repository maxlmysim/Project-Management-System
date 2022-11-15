import { AxiosResponse } from 'axios';
import { api } from './index';
import Endpoints from '../constants/endpoints';
import { UserData } from '../types/userTypes';
import { ResponseUserData } from '../types/responseTypes';

export const userService = {
  getUser(userId: string): Promise<AxiosResponse<ResponseUserData>> {
    return api.get(`${Endpoints.USERS}/${userId}`);
  },
  updateUser(userId: string, data: UserData): Promise<AxiosResponse<ResponseUserData>> {
    return api.put(`${Endpoints.USERS}/${userId}`, data);
  },
};
