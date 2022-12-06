import React, { FC } from 'react';
import { Box, Card, Typography } from '@mui/material';
import AddButton from './Buttons/AddButton';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { useAppDispatch } from '../hooks/storeHooks';
import { showModalWindow } from '../store/modalSlice';
import { ADD_TASK } from '../constants/modalField';
import { setCurrentColumn } from '../store/columnSlice';
import Task from './Task';
import ColumnHeader from './ColumnHeader';
import { Draggable } from 'react-beautiful-dnd';
import { IColumnResponse } from 'types/columnTypes';

export interface IColumnProps {
  column: IColumnResponse;
}

const style: SxProps<Theme> = {
  maxWidth: 275,
  width: 1,
  minHeight: 100,
  cursor: 'pointer',
  flexShrink: 0,
  maxHeight: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '1rem',
};

const Column: FC<IColumnProps> = ({ column }) => {
  const dispatch = useAppDispatch();
  const onAddTask = (): void => {
    dispatch(setCurrentColumn(column));
    dispatch(showModalWindow(ADD_TASK));
  };

  return (
    <Draggable draggableId={column._id} index={column.order}>
      {(provided, snapshot) => (
        <Card
          sx={style}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ColumnHeader {...column} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflow: 'auto' }}>
            {column.tasks.map((task) => (
              <Task key={task._id} task={task} />
            ))}
          </Box>
          <AddButton type="small" onClick={onAddTask}>
            {'Добавить задачу'}
          </AddButton>
          <Typography>{column.order}</Typography>
        </Card>
      )}
    </Draggable>
  );
};

export default Column;
