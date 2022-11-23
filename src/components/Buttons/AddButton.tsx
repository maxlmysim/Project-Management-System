import React, { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

interface IAddButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const style = {
  maxWidth: 275,
  width: 1,
  minHeight: '140px',
  fontSize: '2rem',
  padding: 'auto',
};

const AddButton: FC<IAddButton> = ({ onClick }) => {
  return (
    <Button variant="contained" sx={style} onClick={onClick}>
      <AddIcon fontSize="large" />
      Добавить доску
    </Button>
  );
};

export default AddButton;
