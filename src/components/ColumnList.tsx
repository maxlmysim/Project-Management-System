import React, { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import Loader from './Loader';
import AddButton from './Buttons/AddButton';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { loaderSelector } from '../store/loaderSlice';
import { columnSelector } from '../store/columnSlice';
import { showModalWindow } from '../store/modalSlice';
import { ADD_COLUMN } from '../constants/modalField';
import Column from './Column';
import { Box, styled } from '@mui/material';
import { DragDropContext, Droppable, DropResult, ResponderProvided } from 'react-beautiful-dnd';
import { IColumnResponse } from 'types/columnTypes';

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
    setColumns(columnsFromState);
  }, [columnsFromState]);

  const onAddColumn = (): void => {
    dispatch(showModalWindow(ADD_COLUMN));
  };

  const onDragEnd = useCallback(
    (result: DropResult, provided: ResponderProvided) => {
      if (!result.destination) {
        return;
      }
      console.log(result);

      const moveItem = columns[result.source.index];
      const newArray: IColumnResponse[] = [
        ...columns.slice(0, result.source.index - 1),
        ...columns.slice(result.source.index, columns.length),
      ];
      newArray.splice(result.destination.index, 0, moveItem);
      console.log(newArray);
      console.log(moveItem);
    },
    [columnsFromState]
  );

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
            {/*{columns.map((column, index) => (*/}
            {/*  <Column key={index} column={column} />*/}
            {/*))}*/}
          </>
        )}
      </Box>
    </DragDropContext>
  );
};

export default ColumnList;
