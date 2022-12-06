import React, { FC, useEffect, useState } from 'react';
import Loader from './Loader';
import AddButton from './Buttons/AddButton';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { loaderSelector } from '../store/loaderSlice';
import { columnSelector, updateColumnsSet } from '../store/columnSlice';
import { showModalWindow } from '../store/modalSlice';
import { ADD_COLUMN } from '../constants/modalField';
import Column from './Column';
import { Box, styled } from '@mui/material';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { IColumnResponse, IColumnSet } from 'types/columnTypes';

const Container = styled('div')`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  overflow: auto;
  position: absolute;
  max-height: 100%;
  height: 100%;
  padding-bottom: 0.5rem;
`;

const ColumnList: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(loaderSelector);
  const { columns: columnsFromState } = useAppSelector(columnSelector);

  const [columns, setColumns] = useState<IColumnResponse[]>(columnsFromState);

  useEffect(() => {
    const sortColumns = [...columnsFromState].sort((a, b) => a.order - b.order);
    setColumns(sortColumns);
  }, [columnsFromState]);

  const onAddColumn = (): void => {
    dispatch(showModalWindow(ADD_COLUMN));
  };

  const reorder = (
    list: IColumnResponse[],
    startIndex: number,
    endIndex: number
  ): IColumnResponse[] => {
    const result: IColumnResponse[] = [...list];
    const [moveItem] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, moveItem);

    return result.map((column, index) => ({ ...column, order: index }));
  };

  const onDragEnd = (result: DropResult): void => {
    if (!result.destination) {
      return;
    }
    const newList: IColumnResponse[] = reorder(
      columns,
      result.source.index,
      result.destination.index
    );
    setColumns(newList);

    const newListOrder: IColumnSet[] = newList.map((column) => ({
      order: column.order,
      _id: column._id,
    }));
    dispatch(updateColumnsSet(newListOrder));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box sx={{ position: 'relative', flexGrow: 1 }}>
        {isLoading ? (
          <Loader color="#ffffff" />
        ) : (
          <>
            <Droppable droppableId={columns[0]?.boardId || 'id'} direction="horizontal">
              {(provided) => (
                <Container {...provided.droppableProps} ref={provided.innerRef}>
                  {columns.map((column) => (
                    <Column key={column._id} column={column} />
                  ))}
                  {<AddButton onClick={onAddColumn}>{'Добавить список'}</AddButton>}
                  {provided.placeholder}
                </Container>
              )}
            </Droppable>
          </>
        )}
      </Box>
    </DragDropContext>
  );
};

export default ColumnList;
