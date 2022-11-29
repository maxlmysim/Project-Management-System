import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { currentBoardSelector, getBoard } from '../store/boardSlice';
import { modalSelector } from '../store/modalSlice';
import { AppRoutes } from '../constants/routes';
import BoardHeader from '../components/BoardHeader';

const BoardPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isShowModal } = useAppSelector(modalSelector);
  const { title, _id, owner } = useAppSelector(currentBoardSelector);
  useEffect(() => {
    !_id && navigate(AppRoutes.BOARDS);
  }, [title, _id, owner, navigate, dispatch]);
  useEffect(() => {
    dispatch(getBoard(_id));
  }, [isShowModal, _id, dispatch]);
  return (
    <Grid component="main" style={{ backgroundColor: 'rgb(66, 165, 245)', flex: '1' }}>
      {<BoardHeader title={title} />}
    </Grid>
  );
};

export default BoardPage;
