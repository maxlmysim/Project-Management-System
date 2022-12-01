import React, { FC } from 'react';
import { Box, Card, Typography } from '@mui/material';
import TooltipButton from './TooltipButton';
import SearchIcon from '@mui/icons-material/Search';
import { ITaskResponse } from '../types/responseTypes';
import { useAppDispatch } from '../hooks/storeHooks';
import { addFieldsInfoModal, showModalWindow } from '../store/modalSlice';
import { SHOW_TASK_INFO } from '../constants/modalField';
import CenteringContainer from './СenteringСontainer';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

interface ITaskProps {
  task: ITaskResponse;
}

const Task: FC<ITaskProps> = ({ task }) => {
  const dispatch = useAppDispatch();
  const { title, description } = task;

  const onShowTaskInfo = (): void => {
    dispatch(addFieldsInfoModal({ title, owner: description }));
    dispatch(showModalWindow(SHOW_TASK_INFO));
  };

  return (
    <Card>
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
          <ModeEditIcon sx={{ color: 'rgb(25, 118, 210)', fontSize: '2rem' }} />
          <DeleteIcon sx={{ color: 'rgb(210,25,25)', fontSize: '2rem' }} />
        </CenteringContainer>
      </CenteringContainer>
    </Card>
  );
};

export default Task;
