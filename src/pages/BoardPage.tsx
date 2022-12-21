import React, { FC, useLayoutEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { currentBoardSelector } from '../store/boardSlice';
import BoardHeader from '../components/BoardHeader';
import ColumnList from '../components/ColumnList';
import { useParams } from 'react-router-dom';
import { getAllColumnsByBoard } from '../store/columnSlice';

const BoardPage: FC = () => {
  const dispatch = useAppDispatch();

  const { title, owner } = useAppSelector(currentBoardSelector);
  const { idBoard } = useParams();

  useLayoutEffect(() => {
    if (idBoard) {
      dispatch(getAllColumnsByBoard(idBoard));
    }
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'rgb(66, 165, 245)',
        p: '1rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <BoardHeader title={title} owner={owner} />
      <ColumnList />
    </Box>
  );
};

export default BoardPage;
