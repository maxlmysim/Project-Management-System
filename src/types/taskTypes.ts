export type ITask = {
  title: string;
  order: number;
  description: string;
  userId: string;
  users: string[];
};

export interface ITaskResponse extends ITask {
  _id: string;
  boardId: string;
  columnId: string;
  isDone: boolean;
}

export type ITasksSet = Pick<ITaskResponse, '_id' | 'order'>;

export interface IPointTask {
  title: string;
  taskId: string;
  boardId: string;
  done: boolean;
}

export interface IPointTaskResponse extends IPointTask {
  _id: string;
}
