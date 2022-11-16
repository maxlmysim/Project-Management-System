import { api } from './index';
import { AxiosResponse } from 'axios';
import Endpoints from '../constants/endpoints';
import { IBoardResponse } from 'types/responseTypes';
import { IBoard } from '../types/boardTypes';

export const boardService = {
  addNewBoard(data: IBoard): Promise<AxiosResponse<IBoardResponse>> {
    return api.post(Endpoints.BOARDS, data);
  },
  getAllBoards(): Promise<AxiosResponse<IBoardResponse[]>> {
    return api.get(Endpoints.BOARDS);
  },
};
