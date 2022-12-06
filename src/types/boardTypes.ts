export type IBoard = {
  title: string;
  owner: string;
  users: string[];
};

export interface IBoardResponse extends IBoard {
  _id: string;
}
