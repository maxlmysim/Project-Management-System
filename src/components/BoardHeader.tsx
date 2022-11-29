import React, { FC } from 'react';
import Title from './Title';
import CenteringContainer from './СenteringСontainer';
import InfoButton from './Buttons/InfoButton';
import EditButton from './Buttons/EditButton';
import DeleteButton from './Buttons/DeleteButton';
import { showModalWindow } from '../store/modalSlice';
import { DELETE_BOARD, EDIT_BOARD, SHOW_BOARD } from '../constants/modalField';
import { useAppDispatch } from '../hooks/storeHooks';

interface IBoardHeader {
  title: string;
}

const BoardHeader: FC<IBoardHeader> = ({ title }) => {
  const dispatch = useAppDispatch();
  const onShowBoardInfo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(showModalWindow(SHOW_BOARD));
  };
  const onDeleteBoard = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(showModalWindow(DELETE_BOARD));
  };
  const onEditBoard = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(showModalWindow(EDIT_BOARD));
  };
  return (
    <CenteringContainer direction="column" sx={{ mb: 1 }}>
      <Title>{title}</Title>
      <CenteringContainer justifyContent="space-between">
        <InfoButton variant="contained" onClick={onShowBoardInfo} />
        <EditButton onClick={onEditBoard} />
        <DeleteButton onClick={onDeleteBoard} />
      </CenteringContainer>
    </CenteringContainer>
  );
};

export default BoardHeader;
