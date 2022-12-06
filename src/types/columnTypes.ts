import { ITaskResponse } from './taskTypes';

export type IColumn = {
  title: string;
  users: string[];
  owner: string;
  order: number;
};

export type IColumnSet = Pick<IColumnResponse, '_id' | 'order'>;

export interface IColumnResponse extends IColumn {
  _id: string;
  boardId: string;
  tasks: ITaskResponse[];
}
