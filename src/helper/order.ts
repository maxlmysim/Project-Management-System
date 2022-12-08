import { IColumnResponse, IColumnSet } from '../types/columnTypes';

export const reorderColumn = (
  list: IColumnResponse[],
  startIndex: number,
  endIndex: number
): IColumnResponse[] => {
  const result: IColumnResponse[] = [...list];
  const [moveItem] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, moveItem);

  return result.map((column, index) => ({ ...column, order: index }));
};

export const reorderTask = (
  currentColumn: IColumnResponse,
  nextColumn: IColumnResponse,
  startIndex: number,
  endIndex: number
): [IColumnResponse, IColumnResponse] => {
  const current: IColumnResponse = JSON.parse(JSON.stringify(currentColumn));
  const next: IColumnResponse = JSON.parse(JSON.stringify(nextColumn));

  if (next._id === current._id) {
    const [moveItem] = next.tasks.splice(startIndex, 1);
    next.tasks.splice(endIndex, 0, moveItem);
    next.tasks = next.tasks.map((column, index) => ({ ...column, order: index }));
    return [next, next];
  }

  const [moveItem] = current.tasks.splice(startIndex, 1);
  next.tasks.splice(endIndex, 0, moveItem);
  current.tasks = current.tasks.map((item, index) => ({ ...item, order: index }));
  next.tasks = next.tasks.map((item, index) => ({ ...item, order: index }));

  return [current, next];
};

export const newSetColumnOrder = (columns: IColumnResponse[]): IColumnSet[] => {
  return columns.map((column) => ({
    order: column.order,
    _id: column._id,
  }));
};

export const combineColumns = (
  columns: IColumnResponse[],
  newCurrentColumn: IColumnResponse,
  newNextColumn: IColumnResponse
): IColumnResponse[] => {
  return newNextColumn._id === newCurrentColumn._id
    ? columns.map((column) => (column._id === newNextColumn._id ? newNextColumn : column))
    : columns.map((column) => {
        if (column._id === newNextColumn._id) return newNextColumn;
        if (column._id === newCurrentColumn._id) return newCurrentColumn;
        return column;
      });
};
