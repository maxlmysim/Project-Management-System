import ModalForm from './ModalForm';
import { Box, Modal } from '@mui/material';
import React, { FC } from 'react';
import ModalInfo from './ModalInfo';
import { closeModalWindow, modalSelector } from '../../store/modalSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  width: 1,
  bgcolor: 'rgb(255, 255, 255)',
  border: '2px solid rgba(0, 0, 0, 0.12)',
  boxShadow:
    'rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px',
  borderRadius: '5px',
  p: '3.2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const ModalWindow: FC = () => {
  const dispatch = useAppDispatch();
  const handleClose = (): void => {
    dispatch(closeModalWindow());
  };
  const { isShowModal, action } = useAppSelector(modalSelector);
  const isInfo = action === 'showBoard';
  return (
    <Modal
      open={isShowModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{isInfo ? <ModalInfo /> : <ModalForm />}</Box>
    </Modal>
  );
};

export default ModalWindow;
