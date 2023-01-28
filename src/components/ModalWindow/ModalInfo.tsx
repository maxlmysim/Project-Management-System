import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface props {
  title: string;
  owner?: string;
}
const ModalInfo: FC<props> = ({ title, owner }) => {
  return (
    <>
      <Typography
        variant="h5"
        component="h5"
        fontWeight="bold"
        marginBottom="0.2rem"
        marginRight="auto"
      >
        {title}
      </Typography>
      {owner && (
        <Typography variant="h6" component="h5" marginBottom="1rem" marginRight="auto">
          {owner}
        </Typography>
      )}
    </>
  );
};

export default ModalInfo;
