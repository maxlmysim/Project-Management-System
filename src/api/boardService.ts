import { api } from './index';
import { AxiosResponse } from 'axios';
import Endpoints from '../constants/endpoints';
import { IBoardsResponse } from 'types/responseTypes';
import { IBoard } from '../types/boardTypes';

export const boardService = {
  addNewBoard(data: IBoard): Promise<AxiosResponse<IBoardsResponse>> {
    return api.post(Endpoints.BOARDS, data);
  },
};
