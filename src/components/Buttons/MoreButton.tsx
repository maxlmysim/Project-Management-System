import React, { FC } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IButton } from './types';
import { Button } from '@mui/material';

const MoreButton: FC<IButton> = ({ onClick, onBlur, variant = 'contained' }) => {
  return (
    <Button color="warning" onClick={onClick} onBlur={onBlur} variant={variant}>
      <MoreVertIcon />
    </Button>
  );
};

export default MoreButton;
