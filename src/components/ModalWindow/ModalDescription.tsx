import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface IModalDescription {
  children: React.ReactNode;
}

const ModalDescription: FC<IModalDescription> = ({ children }) => {
  return (
    <Typography
      id="modal-modal-description"
      variant="h5"
      component="h5"
      fontWeight="normal"
      marginBottom="1rem"
      textAlign="center"
    >
      {children}
    </Typography>
  );
};

export default ModalDescription;
