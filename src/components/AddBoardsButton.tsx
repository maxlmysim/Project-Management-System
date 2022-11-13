import React, {FC} from 'react';
import {Button, Typography} from "@mui/material";
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';

interface IButtonProps{
  children?: React.ReactNode;
  onClick: () => void;
}

const AddBoardsButton: FC<IButtonProps> = ({onClick}) => {
  return (
    <Typography component="div">
      <Button color="inherit" sx={{ fontSize: '1.8rem' }} onClick={onClick}>
        <DashboardCustomizeRoundedIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
        Добавить Доску
      </Button>
    </Typography>
  );
};

export default AddBoardsButton;