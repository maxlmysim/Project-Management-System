import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface ITitle {
  children: string;
}

const Title: FC<ITitle> = ({ children }) => {
  return (
    <Typography variant="h1" component="h3" textAlign="center" fontWeight="bold" color="white">
      {children}
    </Typography>
  );
};

export default Title;
