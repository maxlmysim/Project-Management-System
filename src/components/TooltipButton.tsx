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
  backgroundColor?: string;
}

const TooltipButton: FC<props> = ({
  title,
  handler,
  color = 'rgb(237, 108, 2)',
  backgroundColor = 'rgba(0,0,0,0.8)',
  icon,
}) => {
  return (
    <Tooltip title={title && <Title>{title}</Title>} placement="right-end" onClick={handler} arrow>
      <IconButton sx={{ color, backgroundColor }} aria-label="upload picture" component="label">
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default TooltipButton;
