import React, { FC, useState } from 'react';
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

interface ITaskProps {
  task: ITaskResponse;
}

const Task: FC<ITaskProps> = ({ task }) => {
  const dispatch = useAppDispatch();
  const { title, description } = task;

  const [currentElement, setCurrentElement] = useState<HTMLElement>();

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

  function onDragOver(e: React.DragEvent<HTMLDivElement>, task: ITaskResponse): void {
    e.preventDefault();
    const target = e.target as HTMLElement;
    console.log(e.clientX, e.clientY);
    target.style.backgroundColor = 'red';
    target.style.position = 'relative';
    target.style.top = `100px`;
  }

  function onDragLeave(e: React.DragEvent<HTMLDivElement>): void {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = 'white';
  }

  function onDragStart(e: React.DragEvent<HTMLDivElement>): void {
    const target = e.target as HTMLElement;
    setCurrentElement(target);
  }

  function onDragEnd(e: React.DragEvent<HTMLDivElement>): void {}

  function onDrop(e: React.DragEvent<HTMLDivElement>, task: ITaskResponse): void {
    e.preventDefault();
  }

  return (
    <Card
      sx={{ overflow: 'visible', cursor: 'grab' }}
      data-card="dragDrop"
      draggable={true}
      onDragOver={(e) => onDragOver(e, task)}
      onDragLeave={(e) => onDragLeave(e)}
      onDragStart={(e) => onDragStart(e)}
      onDragEnd={(e) => onDragEnd(e)}
      onDrop={(e) => onDrop(e, task)}
    >
      <CenteringContainer style={{ padding: '1.3rem' }} direction="column" alignItems="flex-start">
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
          <ModeEditIcon
            sx={{ color: 'rgb(25, 118, 210)', fontSize: '2rem', cursor: 'pointer' }}
            onClick={onEditTask}
          />
          <DeleteIcon
            sx={{ color: 'rgb(210,25,25)', fontSize: '2rem', cursor: 'pointer' }}
            onClick={onDeleteTask}
          />
        </CenteringContainer>
      </CenteringContainer>
    </Card>
  );
};

export default Task;
