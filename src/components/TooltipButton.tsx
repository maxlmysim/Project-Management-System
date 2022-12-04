import React, { FC } from 'react';
import { IconButton, styled, Tooltip } from '@mui/material';

const Title = styled('span')`
  font-size: 1.2rem;
`;

interface ITooltipButtonProps {
  title: string;
  sizeIcon?: 'large' | 'small' | 'medium';
  color?: string;
  handler: (e: React.MouseEvent<HTMLDivElement>) => void;
  icon?: React.ReactNode;
  backgroundColor?: string;
}

const TooltipButton: FC<ITooltipButtonProps> = ({
  title,
  handler,
  color = 'rgb(237, 108, 2)',
  backgroundColor = 'rgba(255,255,255,0)',
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
