import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import CenteringContainer from '../components/СenteringСontainer';
import { useAppSelector } from '../hooks/storeHooks';
import { loaderSelector } from '../store/loaderSlice';
import Loader from '../components/Loader';
import { boardSelector } from '../store/boardSlice';

const Board: FC = () => {
  const { isLoading } = useAppSelector(loaderSelector);
  const { currentBoard } = useAppSelector(boardSelector);

  const param = useParams();
  console.log(param);

  useEffect(() => {}, []);

  return (
    <Grid component="main" style={{ backgroundColor: 'rgb(66, 165, 245)', flex: '1' }}>
      {isLoading && <Loader color="#ffffff" />}
      <CenteringContainer direction="column">
        <Typography variant="h1" component="h3" textAlign="center" fontWeight="bold" color="white">
          {currentBoard.title}
        </Typography>
      </CenteringContainer>
    </Grid>
  );
};

export default Board;
