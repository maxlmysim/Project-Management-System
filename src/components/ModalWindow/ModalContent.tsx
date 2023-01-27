import React, { FC } from 'react';
import { styled, TextField } from '@mui/material';
import ConfirmButton from '../Buttons/ConfirmButton';
import CloseButton from '../Buttons/CloseButton';
import CenteringContainer from '../СenteringСontainer';
import { closeModalWindow, confirmModalAction, modalSelector } from '../../store/modalSlice';
import { AppFormTypes } from '../../types/formTypes';
import { modalActions } from '../../constants/modalField';
import { AppDispatch } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { useForm } from 'react-hook-form';
import ModalTitle from './ModalTitle';
import ModalInfo from './ModalInfo';
import { useTranslation } from 'react-i18next';

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

const ModalContent: FC = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppFormTypes>({
    mode: 'onBlur',
  });
  const dispatch = useAppDispatch();
  const handleClose = (): void => {
    dispatch(closeModalWindow());
  };
  const { fieldProps, action, isLoading, modalTitle, fieldsInfo, isHideConfirmButton } =
    useAppSelector(modalSelector);
  const onSubmit = (data: AppFormTypes): void => {
    dispatch(confirmModalAction());
    dispatch(modalActions[action](data) as Parameters<AppDispatch>[0]);
  };
  return (
    <>
      <ModalTitle>{t(modalTitle)}</ModalTitle>
      {fieldsInfo && <ModalInfo title={fieldsInfo.title} owner={fieldsInfo.owner} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {fieldProps.map(({ name, label, placeholder, type, registerOptions, defaultValue }) => (
          <TextField
            key={name}
            label={t(label)}
            placeholder={`${t(placeholder)}`}
            type={type}
            defaultValue={defaultValue}
            {...register(name, registerOptions)}
            sx={{ width: 1 }}
            error={!!errors[name as keyof typeof errors]}
            helperText={
              errors[name as keyof typeof errors] &&
              t(`${errors[name as keyof typeof errors]?.message}`)
            }
          />
        ))}
        <CenteringContainer justifyContent="flex-end" gap="1rem">
          {isHideConfirmButton || <ConfirmButton isLoading={isLoading} />}
          <CloseButton handleClose={handleClose} />
        </CenteringContainer>
      </Form>
    </>
  );
};

export default ModalContent;
