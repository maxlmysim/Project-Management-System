import React, { FC } from 'react';
import Title from './Title';
import CenteringContainer from './СenteringСontainer';
import InfoButton from './Buttons/InfoButton';
import EditButton from './Buttons/EditButton';
import DeleteButton from './Buttons/DeleteButton';
import { addFieldsInfoModal, showModalWindow } from '../store/modalSlice';
import { DELETE_BOARD, EDIT_BOARD, SHOW_BOARD_INFO } from '../constants/modalField';
import { useAppDispatch } from '../hooks/storeHooks';

interface IBoardHeader {
  title: string;
  owner: string;
}

const BoardHeader: FC<IBoardHeader> = ({ title, owner }) => {
  const dispatch = useAppDispatch();
  const onShowBoardInfo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(addFieldsInfoModal({ title, owner }));
    dispatch(showModalWindow(SHOW_BOARD_INFO));
  };
  const onDeleteBoard = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(showModalWindow(DELETE_BOARD));
  };
  const onEditBoard = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(showModalWindow(EDIT_BOARD(title, owner)));
  };
  return (
    <CenteringContainer direction="column" flex="0 1 auto" style={{ marginBottom: '1rem' }}>
      <Title>{title}</Title>
      <CenteringContainer justifyContent="space-between" gap={'5px'}>
        <InfoButton variant="contained" onClick={onShowBoardInfo} />
        <EditButton onClick={onEditBoard} />
        <DeleteButton onClick={onDeleteBoard} />
      </CenteringContainer>
    </CenteringContainer>
  );
};

export default BoardHeader;
