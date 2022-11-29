import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { currentBoardSelector, getBoard } from '../store/boardSlice';
import { modalSelector } from '../store/modalSlice';
import { AppRoutes } from '../constants/routes';
import BoardHeader from '../components/BoardHeader';
import ColumnList from '../components/ColumnList';

const BoardPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isShowModal } = useAppSelector(modalSelector);
  const { title, _id, owner } = useAppSelector(currentBoardSelector);
  useEffect(() => {
    dispatch(getBoard(_id));
    !_id && navigate(AppRoutes.BOARDS);
  }, [title, _id, owner, navigate, dispatch, isShowModal]);
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
