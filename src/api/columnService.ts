import { IBoard } from '../types/boardTypes';
import { AxiosResponse } from 'axios';
import { IBoardResponse } from '../types/responseTypes';
import { api } from './index';
import Endpoints from '../constants/endpoints';

export const columnService = {
  addNewBoard(data: IBoard): Promise<AxiosResponse<IBoardResponse>> {
    return api.post(Endpoints.BOARDS, data);
  },
  getAllBoards(): Promise<AxiosResponse<IBoardResponse[]>> {
    return api.get(Endpoints.BOARDS);
  },
  deleteBoard(id: string): Promise<AxiosResponse<IBoardResponse>> {
    return api.delete(Endpoints.BOARDS + '/' + id);
  },
  editBoard(id: string, data: IBoard): Promise<AxiosResponse<IBoardResponse>> {
    return api.put(Endpoints.BOARDS + '/' + id, data);
  },
  getBoard(id: string): Promise<IBoardResponse> {
    return api.get(Endpoints.BOARDS + '/' + id);
  },
};
