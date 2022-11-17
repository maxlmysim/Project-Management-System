import React, { FC } from 'react';
import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IBoardResponse } from '../types/responseTypes';
import { useAppDispatch } from '../hooks/storeHooks';
import { setBoard } from '../store/boardSlice';
import { showModalWindow } from '../store/modalSlice';
import { DELETE_BOARD, EDIT_BOARD } from '../constants/modalField';
import { useNavigate } from 'react-router-dom';
import Endpoints from '../constants/endpoints';

interface props {
  board: IBoardResponse;
}

const Board: FC<props> = ({ board }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onDeleteBoard = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(setBoard(board));
    dispatch(showModalWindow(DELETE_BOARD));
  };

  const onEditBoard = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(setBoard(board));
    dispatch(showModalWindow(EDIT_BOARD));
  };

  const onOpenBoard = (): void => {
    navigate(Endpoints.BOARDS + '/' + board._id);
    dispatch(setBoard(board));
  };

  return (
    <Card
      key={board._id}
      sx={{ maxWidth: 275, width: 1, minHeight: 100, cursor: 'pointer' }}
      onClick={onOpenBoard}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: '2.4rem' }}
          variant="h5"
          component="h4"
          gutterBottom
          color="#1565c0"
          fontWeight="bold"
        >
          {board.title}
        </Typography>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          {board.owner}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ m: '0 1rem 1rem' }} color="#696565" />
      <CardActions style={{ justifyContent: 'center' }}>
        <Button variant="contained" color="warning" onClick={onEditBoard}>
          <EditIcon /> Изменить
        </Button>
        <Button variant="contained" color="warning" onClick={onDeleteBoard}>
          <DeleteIcon /> Удалить
        </Button>
      </CardActions>
    </Card>
  );
};

export default Board;
