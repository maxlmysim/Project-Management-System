export type IBoard = {
  title: string;
  owner: string;
  users: string[];
};

export type IColumn = {
  title: string;
  users: string[];
  owner: string;
  order: number;
};

export type ITask = {
  title: string;
  order: number;
  description: string;
  userId: string;
  users: string[];
};
