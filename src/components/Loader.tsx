import React, { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface props {
  sizeLoader?: number;
}

const Loader: FC<props> = ({ sizeLoader = 50 }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={sizeLoader} />
    </Box>
  );
};

export default Loader;
