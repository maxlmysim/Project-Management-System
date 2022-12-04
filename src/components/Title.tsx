import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface ITitle {
  children: string;
  type?: 'board' | 'owner' | '';
}

const Title: FC<ITitle> = ({ children, type = '' }) => {
  if (type === 'board') {
    return (
      <Typography
        sx={{ fontSize: '2.4rem', m: 0, overflowWrap: 'break-word', maxWidth: 275 }}
        variant="h5"
        component="h4"
        gutterBottom
        color="#1565c0"
        fontWeight="bold"
      >
        {children}
      </Typography>
    );
  } else if (type === 'owner') {
    return (
      <Typography sx={{ mb: 0.5 }} color="text.secondary">
        {children}
      </Typography>
    );
  }
  return (
    <Typography variant="h1" component="h3" textAlign="center" fontWeight="bold" color="white">
      {children}
    </Typography>
  );
};

export default Title;
