import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { closeModalWindow } from '../../store/modalSlice';
import { currentBoardSelector } from '../../store/boardSlice';
import CloseButton from '../Buttons/CloseButton';
import ModalTitle from './ModalTitle';
import ModalDescription from './ModalDescription';

const ModalInfo: FC = () => {
  const { title, owner } = useAppSelector(currentBoardSelector);
  const dispatch = useAppDispatch();
  const handleClose = (): void => {
    dispatch(closeModalWindow());
  };
  return (
    <>
      <ModalTitle>Название: {title}</ModalTitle>
      <ModalDescription>Описание: {owner}</ModalDescription>
      <CloseButton handleClose={handleClose} />
    </>
  );
};

export default ModalInfo;
