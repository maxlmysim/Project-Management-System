import React, { FC } from 'react';
import { styled, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { authSelector, signIn, signUp } from '../store/authSlice';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { AppDispatch } from 'store/store';
import LoadingButton from '@mui/lab/LoadingButton';
import { INewUser, IUser } from 'types/userTypes';
import { IFieldProps } from '../constants/modalField';

const Form = styled('form')`
  max-width: 400px;
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

  button {
    width: 100%;
    font-size: 1.5rem;
    background-color: #1976d2;
    color: white;

    &:hover {
      background-color: #1565c0;
    }

    svg {
      color: white;
    }
  }
`;

interface props {
  fields: IFieldProps[];
  action: typeof signIn | typeof signUp;
  buttonText: string;
}

const AuthField: FC<props> = ({ action, buttonText, fields }) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(authSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser & INewUser>({
    mode: 'onBlur',
  });

  const onSubmit = (data: INewUser & IUser): void => {
    dispatch(action(data) as AppDispatch);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {fields &&
        fields.map((field) => (
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
      <LoadingButton type="submit" loading={isLoading} loadingPosition="center" variant="outlined">
        {buttonText}
      </LoadingButton>
    </Form>
  );
};

export default AuthField;
