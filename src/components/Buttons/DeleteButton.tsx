import React, { FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { IButton } from './types';

const DeleteButton: FC<IButton> = ({ onClick, type = 'full', variant = 'contained' }) => {
  return (
    <Button variant={variant} color="warning" onClick={onClick}>
      <DeleteIcon /> {type === 'full' ? 'Удалить' : ''}
    </Button>
  );
};

export default DeleteButton;
