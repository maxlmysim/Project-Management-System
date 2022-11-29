import React, { FC } from 'react';
import { IconButton, styled, Tooltip } from '@mui/material';

const Title = styled('span')`
  font-size: 1.2rem;
`;

interface props {
  title: string;
  sizeIcon?: 'large' | 'small' | 'medium';
  color?: string;
  handler: () => void;
  icon?: React.ReactNode;
}

const TooltipButton: FC<props> = ({ title, handler, color = 'rgb(237, 108, 2)', icon }) => {
  return (
    <Tooltip title={<Title>{title}</Title>} placement="right-end" onClick={handler}>
      <IconButton sx={{ color: color }} aria-label="upload picture" component="label">
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default TooltipButton;
