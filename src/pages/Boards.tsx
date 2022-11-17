import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import CenteringContainer from '../components/СenteringСontainer';
import BoardsList from '../components/BoardsList';

const Boards: FC = () => {
  return (
    <Grid
      component="main"
      style={{ backgroundColor: 'rgb(66, 165, 245)', flex: '1', display: 'flex' }}
    >
      <CenteringContainer direction="column">
        <Typography variant="h1" component="h3" textAlign="center" fontWeight="bold" color="white">
          Доски
        </Typography>
        <BoardsList />
      </CenteringContainer>
    </Grid>
  );
};

export default Boards;
