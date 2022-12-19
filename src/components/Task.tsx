import React, { FC } from 'react';
import { Box, Card, Typography } from '@mui/material';
import TooltipButton from './TooltipButton';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch } from '../hooks/storeHooks';
import { addFieldsInfoModal, showModalWindow } from '../store/modalSlice';
import { DELETE_TASK, EDIT_TASK, SHOW_TASK_INFO } from '../constants/modalField';
import CenteringContainer from './СenteringСontainer';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { setCurrentTask } from 'store/columnSlice';
import { ITaskResponse } from '../types/taskTypes';
import { DraggableProvided } from 'react-beautiful-dnd';
import DragIcon from './DragIcon';
import DoneIcon from '@mui/icons-material/Done';

interface ITaskProps {
  task: ITaskResponse;
  dropProvided: DraggableProvided;
}

const Task: FC<ITaskProps> = ({ task, dropProvided }) => {
  const dispatch = useAppDispatch();
  const { title, description } = task;

  const onShowTaskInfo = (): void => {
    dispatch(addFieldsInfoModal({ title, owner: description }));
    dispatch(showModalWindow(SHOW_TASK_INFO));
  };

  const onDeleteTask = (): void => {
    dispatch(setCurrentTask(task));
    dispatch(showModalWindow(DELETE_TASK));
  };

  const onEditTask = (): void => {
    dispatch(setCurrentTask(task));
    dispatch(showModalWindow(EDIT_TASK(task.title, task.description)));
  };

  const onDoneTask = (): void => {
    dispatch(setCurrentTask(task));
  };

  return (
    <Card
      sx={{
        overflow: 'visible',
        cursor: 'grab',
        width: '100%',
        margin: '0 auto',
      }}
      ref={dropProvided.innerRef}
      {...dropProvided.draggableProps}
      {...dropProvided.dragHandleProps}
    >
      <CenteringContainer
        style={{ padding: '1.3rem', position: 'relative' }}
        direction="column"
        alignItems="flex-start"
      >
        <DragIcon position="absolute" top="20px" right="10px" />
        <Box>
          <Typography variant="h5" component="h5" display="inline" fontWeight="bold">
            {title}
          </Typography>
          <TooltipButton title="Описание" handler={onShowTaskInfo} icon={<SearchIcon />} />
        </Box>
        <Typography variant="h6" component="h6" fontWeight="normal" marginBottom="1rem">
          {description}
        </Typography>
        <CenteringContainer>
          <TooltipButton
            title="Редактировать"
            color="rgb(25, 118, 210)"
            handler={onEditTask}
            placement="bottom-start"
            size="small"
            icon={<ModeEditIcon sx={{ fontSize: '1.8rem' }} />}
          />
          <TooltipButton
            title="Удалить"
            color="rgb(210,25,25)"
            handler={onDeleteTask}
            placement="bottom-start"
            size="small"
            icon={<DeleteIcon sx={{ fontSize: '1.8rem' }} />}
          />
          <TooltipButton
            title="Выполнено"
            color="#2e7d32"
            handler={onDoneTask}
            placement="bottom-start"
            sxIcon={{ fontSize: '4rem' }}
            size="small"
            icon={<DoneIcon sx={{ fontSize: '1.8rem' }} />}
          />
        </CenteringContainer>
      </CenteringContainer>
    </Card>
  );
};

export default Task;
