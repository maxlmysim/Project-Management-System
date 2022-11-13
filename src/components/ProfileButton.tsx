import React, { FC } from 'react';
import {Button, Typography} from "@mui/material";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

interface IButtonProps{
  children: React.ReactNode;
  onClick: () => void;
}

const ProfileButton: FC<IButtonProps> = ({onClick, children}) => {
  return (
    <Typography component="div">
      <Button color="inherit" sx={{ fontSize: '1.8rem' }} onClick={onClick}>
        <AccountBoxRoundedIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
        {children}
      </Button>
    </Typography>
  );
};

export default ProfileButton;