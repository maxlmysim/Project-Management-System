import { AxiosResponse } from 'axios';
import { IColumnResponse } from '../types/responseTypes';
import { api } from './index';
import Endpoints from '../constants/endpoints';
import { IColumn } from '../types/boardTypes';

export const columnService = {
  getAllColumns(id: string): Promise<AxiosResponse<IColumnResponse[]>> {
    return api.get(`${Endpoints.BOARDS}/${id}/${Endpoints.COLUMNS}`);
  },
  addNewColumn(id: string, data: IColumn): Promise<AxiosResponse<IColumnResponse>> {
    return api.post(`${Endpoints.BOARDS}/${id}/${Endpoints.COLUMNS}`, data);
  },
};
