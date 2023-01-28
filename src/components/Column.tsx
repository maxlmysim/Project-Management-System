import React, { FC, ReactElement } from 'react';
import { Card, styled } from '@mui/material';
import AddButton from './Buttons/AddButton';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { useAppDispatch } from '../hooks/storeHooks';
import { showModalWindow } from '../store/modalSlice';
import { ADD_TASK } from '../constants/modalField';
import { setCurrentColumn } from '../store/columnSlice';
import Task from './Task';
import ColumnHeader from './ColumnHeader';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { IColumnResponse } from 'types/columnTypes';
import { ITaskResponse } from '../types/taskTypes';
import { useTranslation } from 'react-i18next';

export interface IColumnProps {
  column: IColumnResponse;
  tasks: ITaskResponse[];
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
  overflow: 'visible',
};

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  min-height: 10px;
`;

const Column: FC<IColumnProps> = ({ column, tasks }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('translation', { keyPrefix: 'fields.task' });

  const onAddTask = (): void => {
    dispatch(setCurrentColumn(column));
    dispatch(showModalWindow(ADD_TASK));
  };

  return (
    <Draggable draggableId={column._id} index={column.order}>
      {(provided): ReactElement => (
        <Card sx={style} ref={provided.innerRef} {...provided.draggableProps}>
          <ColumnHeader column={column} dragHandle={provided.dragHandleProps} />
          <Droppable droppableId={column._id} type="TASK">
            {(dropProvided): ReactElement => (
              <Container {...dropProvided.droppableProps} ref={dropProvided.innerRef}>
                {tasks.map((task) => (
                  <Draggable key={task._id} draggableId={task._id} index={task.order}>
                    {(provided): ReactElement => <Task task={task} dropProvided={provided} />}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </Container>
            )}
          </Droppable>
          <AddButton type="small" onClick={onAddTask}>
            {t('add')}
          </AddButton>
        </Card>
      )}
    </Draggable>
  );
};

export default Column;
