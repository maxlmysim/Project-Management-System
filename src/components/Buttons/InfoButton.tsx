import React, { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

interface IInfoButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'contained' | 'text' | 'outlined';
}

const InfoButton: FC<IInfoButton> = ({ onClick, variant = 'text' }) => {
  return (
    <Button color="warning" onClick={onClick} variant={variant}>
      <SearchIcon />
      {variant === 'contained' && 'Описание'}
    </Button>
  );
};

export default InfoButton;
