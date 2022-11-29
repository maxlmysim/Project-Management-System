import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface IModalTitle {
  children: React.ReactNode;
}

const ModalTitle: FC<IModalTitle> = ({ children }) => {
  return (
    <Typography
      id="modal-modal-title"
      variant="h3"
      component="h3"
      fontWeight="bold"
      marginBottom="2rem"
      textAlign="center"
    >
      {children}
    </Typography>
  );
};

export default ModalTitle;
