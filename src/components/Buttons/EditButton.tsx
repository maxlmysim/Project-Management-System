import React, { FC } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { IButton } from './types';

const EditButton: FC<IButton> = ({ onClick, type = 'full', variant = 'contained' }) => {
  return (
    <Button variant={variant} color="warning" onClick={onClick}>
      <EditIcon /> {type === 'full' ? 'Изменить' : ''}
    </Button>
  );
};

export default EditButton;
