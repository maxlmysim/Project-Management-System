import React, { FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

interface IDeleteButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DeleteButton: FC<IDeleteButton> = ({ onClick }) => {
  return (
    <Button variant="contained" color="warning" onClick={onClick}>
      <DeleteIcon /> Удалить
    </Button>
  );
};

export default DeleteButton;
