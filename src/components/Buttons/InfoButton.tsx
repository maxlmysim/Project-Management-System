import React, { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { IButton } from './types';

const InfoButton: FC<IButton> = ({ onClick, type = 'full', variant = 'contained' }) => {
  return (
    <Button color="warning" onClick={onClick} variant={variant}>
      <SearchIcon />
      {type === 'full' ? 'Описание' : ''}
    </Button>
  );
};

export default InfoButton;
