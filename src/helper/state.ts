import { ITaskResponse, ITaskUpdate } from '../types/taskTypes';

type IGetTaskInfoForUpdate = (task: ITaskResponse) => {
  boardId: string;
  taskId: string;
  columnId: string;
  data: ITaskUpdate;
};
export const getTaskInfoForUpdate: IGetTaskInfoForUpdate = (task) => {
  const { _id: taskId, boardId, columnId, title, users, order, description, userId, isDone } = task;
  const data = {
    title,
    description,
    isDone,
    users,
    order,
    userId,
    columnId,
  };

  return { boardId, columnId, taskId, data };
};
