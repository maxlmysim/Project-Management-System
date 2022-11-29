import React, { FC } from 'react';
import { Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { IBoardResponse } from '../types/responseTypes';
import { useAppDispatch } from '../hooks/storeHooks';
import { setBoard } from '../store/boardSlice';
import { addFieldsInfoModal, showModalWindow } from '../store/modalSlice';
import { DELETE_BOARD, EDIT_BOARD, SHOW_BOARD_INFO } from '../constants/modalField';
import { useNavigate } from 'react-router-dom';
import Endpoints from '../constants/endpoints';
import EditButton from './Buttons/EditButton';
import DeleteButton from './Buttons/DeleteButton';
import InfoButton from './Buttons/InfoButton';
import CenteringContainer from './СenteringСontainer';

interface props {
  board: IBoardResponse;
}

const Board: FC<props> = ({ board }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onShowBoardInfo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(setBoard(board));
    dispatch(addFieldsInfoModal({ title: board.title, owner: board.owner }));
    dispatch(showModalWindow(SHOW_BOARD_INFO));
  };

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
    dispatch(setBoard(board));
    navigate(Endpoints.BOARDS + '/' + board._id);
  };

  return (
    <Card
      key={board._id}
      sx={{ maxWidth: 275, width: 1, minHeight: 100, cursor: 'pointer' }}
      onClick={onOpenBoard}
    >
      <CardContent>
        <CenteringContainer justifyContent="space-between" alignItems="center">
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
          <InfoButton variant="text" onClick={onShowBoardInfo} />
        </CenteringContainer>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          {board.owner}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ m: '0 1rem 1rem' }} color="#696565" />
      <CardActions style={{ justifyContent: 'center' }}>
        <EditButton onClick={onEditBoard} />
        <DeleteButton onClick={onDeleteBoard} />
      </CardActions>
    </Card>
  );
};

export default Board;
