import React, { FC } from 'react';
import { Box } from '@mui/material';
import { useAppSelector } from '../hooks/storeHooks';
import { currentBoardSelector } from '../store/boardSlice';
import BoardHeader from '../components/BoardHeader';
import ColumnList from '../components/ColumnList';

const BoardPage: FC = () => {
  const { title, owner } = useAppSelector(currentBoardSelector);

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'rgb(66, 165, 245)',
        overflowY: 'hidden',
        p: '1rem',
        w: 1,
      }}
    >
      <BoardHeader title={title} owner={owner} />
      <ColumnList />
    </Box>
  );
};

export default BoardPage;
