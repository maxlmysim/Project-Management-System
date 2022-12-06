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
}
