import React, { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button, styled, Tooltip } from '@mui/material';
import { IButtonComponent } from './types';

const Title = styled('span')`
  font-size: 1.2rem;
`;

const styleFull = {
  maxWidth: 275,
  width: 1,
  minHeight: '5px',
  fontSize: '1.6rem',
  padding: 'auto',
  flexShrink: 0,
};

const styleSmall = {
  flexShrink: 1,
};

const AddButton: FC<IButtonComponent> = ({
  onClick,
  children,
  variant = 'contained',
  type = 'full',
  style,
  dropProvided,
}) => {
  const isFull = type === 'full';
  return (
    <Tooltip
      title={children && <Title>{children}</Title>}
      arrow
      sx={{ fontSize: '1.6rem' }}
      style={style}
      ref={dropProvided?.innerRef}
      {...dropProvided?.draggableProps}
      {...dropProvided?.dragHandleProps}
    >
      <Button variant={variant} sx={isFull ? styleFull : styleSmall} onClick={onClick}>
        <AddIcon fontSize={isFull ? 'large' : 'medium'} />
        {isFull ? children : ''}
      </Button>
    </Tooltip>
  );
};

export default AddButton;
