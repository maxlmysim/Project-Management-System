import React, { FC } from 'react';
import { Box, Button, Modal, styled, TextField, Typography } from '@mui/material';
import CenteringContainer from './СenteringСontainer';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { closeModalWindow, confirmModalAction, modalSelector } from '../store/modalSlice';
import { AppFormTypes } from '../types/formTypes';
import { modalActions } from '../constants/modalField';
import { AppDispatch } from '../store/store';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';

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
};

const Form = styled('form')`
  min-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  label,
  input {
    font-size: 1.5rem;
  }

  legend {
    font-size: 1.1rem;
  }

  p {
    font-size: 1.3rem;
  }
`;

const ModalWindow: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppFormTypes>({
    mode: 'onBlur',
  });

  const { isShowModal, fieldProps, modalTitle, action, isLoading } = useAppSelector(modalSelector);
  const dispatch = useAppDispatch();

  const handleClose = (): void => {
    dispatch(closeModalWindow());
  };

  const onSubmit = (data: AppFormTypes): void => {
    dispatch(confirmModalAction());
    dispatch(modalActions[action](data) as Parameters<AppDispatch>[0]);
  };

  return (
    <Modal
      open={isShowModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h3"
          component="h3"
          fontWeight="bold"
          marginBottom="2rem"
          textAlign="center"
        >
          {modalTitle}
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {fieldProps.map((field) => (
            <TextField
              key={field.name}
              label={field.label}
              placeholder={field.placeholder}
              type={field.type}
              {...register(field.name, field.registerOptions)}
              sx={{ width: 1 }}
              error={!!errors[field.name as keyof typeof errors]}
              helperText={
                errors[field.name as keyof typeof errors] &&
                `${errors[field.name as keyof typeof errors]?.message}`
              }
            />
          ))}
          <CenteringContainer justifyContent="flex-end" gap="1rem">
            <LoadingButton
              loadingPosition="start"
              startIcon={<DoneIcon />}
              variant="contained"
              color="success"
              type="submit"
              style={{ fontSize: ' 1.6rem' }}
              loading={isLoading}
            >
              Подтвердить
            </LoadingButton>
            <Button
              variant="contained"
              color="warning"
              type="submit"
              style={{ fontSize: ' 1.6rem' }}
              startIcon={<CloseIcon />}
              onClick={handleClose}
            >
              Закрыть
            </Button>
          </CenteringContainer>
        </Form>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
