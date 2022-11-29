import React, { FC } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';

interface IEditButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const EditButton: FC<IEditButton> = ({ onClick }) => {
  return (
    <Button variant="contained" color="warning" onClick={onClick}>
      <EditIcon /> Изменить
    </Button>
  );
};

export default EditButton;
