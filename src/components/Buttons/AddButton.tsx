import React, { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { IButtonComponent } from './types';

const styleFull = {
  maxWidth: 275,
  width: 1,
  minHeight: '5px',
  fontSize: '1.6rem',
  padding: 'auto',
  flexShrink: 0,
};

const styleSmall = {
  flexShrink: 1,
};

const AddButton: FC<IButtonComponent> = ({
  onClick,
  children,
  variant = 'contained',
  type = 'full',
}) => {
  const isFull = type === 'full';
  return (
    <Button variant={variant} sx={isFull ? styleFull : styleSmall} onClick={onClick}>
      <AddIcon fontSize={isFull ? 'large' : 'medium'} />
      {isFull ? children : ''}
    </Button>
  );
};

export default AddButton;
