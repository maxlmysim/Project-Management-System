import React, { FC } from 'react';
import { Button, styled, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { signIn, signUp } from '../store/authSlice';
import { useAppDispatch } from '../hooks/storeHooks';
import { NewUser, User } from '../api/authService';
import { IAuthFieldProps } from '../constants/auth';
import { AppDispatch } from 'store/store';

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
`;

interface props {
  fields: IAuthFieldProps[];
  action: typeof signIn | typeof signUp;
  buttonText: string;
}

const AuthField: FC<props> = ({ action, buttonText, fields }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User & NewUser>({
    mode: 'onBlur',
  });

  const onSubmit = (data: NewUser & User): void => {
    dispatch(action(data) as AppDispatch);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{}}>
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
      <Button variant="contained" type="submit" sx={{ width: 1, fontSize: '1.5rem' }}>
        {buttonText}
      </Button>
    </Form>
  );
};

export default AuthField;
