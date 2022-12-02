import { AxiosResponse } from 'axios';
import { IColumnResponse, ITaskResponse } from '../types/responseTypes';
import { api } from './index';
import Endpoints from '../constants/endpoints';
import { IColumn, ITask } from '../types/boardTypes';

export const columnService = {
  getAllColumnsByBoard(id: string): Promise<AxiosResponse<IColumnResponse[]>> {
    return api.get(`${Endpoints.BOARDS}/${id}${Endpoints.COLUMNS}`);
  },
  addNewColumn(id: string, data: IColumn): Promise<AxiosResponse<IColumnResponse>> {
    return api.post(`${Endpoints.BOARDS}/${id}${Endpoints.COLUMNS}`, data);
  },
  addNewTask(
    idBoard: string,
    idColumn: string,
    data: ITask
  ): Promise<AxiosResponse<ITaskResponse>> {
    return api.post(
      `${Endpoints.BOARDS}/${idBoard}${Endpoints.COLUMNS}/${idColumn}${Endpoints.TASKS}`,
      data
    );
  },
  editTask(
    idBoard: string,
    idColumn: string,
    idTask: string,
    data: ITask
  ): Promise<AxiosResponse<ITaskResponse>> {
    return api.put(
      `${Endpoints.BOARDS}/${idBoard}${Endpoints.COLUMNS}/${idColumn}${Endpoints.TASKS}/${idTask}`,
      data
    );
  },
  getAllTasksByBoard(idBoard: string): Promise<AxiosResponse<ITaskResponse[]>> {
    return api.get(`${Endpoints.TASKS_SET}/${idBoard}`);
  },
  deleteTask(
    idBoard: string,
    idColumn: string,
    idTask: string
  ): Promise<AxiosResponse<ITaskResponse>> {
    return api.delete(
      `${Endpoints.BOARDS}/${idBoard}${Endpoints.COLUMNS}/${idColumn}${Endpoints.TASKS}/${idTask}`
    );
  },
};
