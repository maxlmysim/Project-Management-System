import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const MainButton: FC<IButtonProps> = ({ onClick, children }) => {
  return (
    <Typography component="div" sx={{ flexGrow: 1 }}>
      <Button color="inherit" sx={{ fontSize: '1.8rem' }} onClick={onClick}>
        <HomeIcon sx={{ fontSize: '1.2em', marginRight: '5px' }} />
        {children}
      </Button>
    </Typography>
  );
};

export default MainButton;
