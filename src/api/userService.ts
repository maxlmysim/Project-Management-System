import { AxiosResponse } from 'axios';
import { api } from './index';
import Endpoints from '../constants/endpoints';
import { IUserData } from '../types/userTypes';
import { IResponseUserData } from '../types/responseTypes';

export const userService = {
  getUser(userId: string): Promise<AxiosResponse<IResponseUserData>> {
    return api.get(`${Endpoints.USERS}/${userId}`);
  },
  updateUser(userId: string, data: IUserData): Promise<AxiosResponse<IResponseUserData>> {
    return api.put(`${Endpoints.USERS}/${userId}`, data);
  },
  deleteUser(userId: string): Promise<AxiosResponse<IResponseUserData>> {
    return api.delete(`${Endpoints.USERS}/${userId}`);
  },
};
