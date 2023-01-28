import { AxiosResponse } from 'axios';
import { api } from './index';
import Endpoints from '../constants/endpoints';
import { IColumn, IColumnResponse, IColumnsSet } from 'types/columnTypes';
import {
  IPointTask,
  IPointTaskResponse,
  ITask,
  ITaskResponse,
  ITasksSet,
  ITaskUpdate,
} from 'types/taskTypes';

export const columnService = {
  getAllColumnsByBoard(id: string): Promise<AxiosResponse<IColumnResponse[]>> {
    return api.get(`${Endpoints.BOARDS}/${id}${Endpoints.COLUMNS}`);
  },
  deleteColumn(idBoard: string, _id: string): Promise<AxiosResponse<IColumnResponse>> {
    return api.delete(`${Endpoints.BOARDS}/${idBoard}${Endpoints.COLUMNS}/${_id}`);
  },
  editColumn(idBoard: string, _id: string, data: IColumn): Promise<AxiosResponse<IColumnResponse>> {
    return api.put(`${Endpoints.BOARDS}/${idBoard}${Endpoints.COLUMNS}/${_id}`, data);
  },
  addNewColumn(id: string, data: IColumn): Promise<AxiosResponse<IColumnResponse>> {
    return api.post(`${Endpoints.BOARDS}/${id}${Endpoints.COLUMNS}`, data);
  },
  updateColumnsSet(data: IColumnsSet[]): Promise<AxiosResponse<IColumnResponse[]>> {
    return api.patch(`${Endpoints.COLUMNS_SET}`, data);
  },
  updateTasksSet(data: ITasksSet[]): Promise<AxiosResponse<IColumnResponse[]>> {
    return api.patch(`${Endpoints.TASKS_SET}`, data);
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
    data: ITaskUpdate
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
  addPointTask(data: IPointTask): Promise<AxiosResponse<IPointTaskResponse>> {
    return api.post(`${Endpoints.POINTS}`, data);
  },
};
