import React, { FC } from 'react';
import {Button, Typography} from "@mui/material";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';

interface IButtonProps{
  children: React.ReactNode;
  onClick: () => void;
}

const BoardsButton: FC<IButtonProps> = ({onClick, children}) => {
  return (
    <Typography component="div">
      <Button color="inherit" sx={{ fontSize: '1.8rem' }} onClick={onClick}>
        <DashboardRoundedIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
        {children}
      </Button>
    </Typography>
  );
};

export default BoardsButton;