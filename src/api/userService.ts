import { AxiosResponse } from 'axios';
import { api } from './index';
import Endpoints from '../constants/endpoints';

interface IGetUserResponse {
  _id: 'string';
  name: 'string';
  login: 'string';
}

export const userService = {
  getUser(userId: string): Promise<AxiosResponse<IGetUserResponse>> {
    return api.get(`${Endpoints.GET_USER}/${userId}`);
  },
};
