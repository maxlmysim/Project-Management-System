import React, { FC } from 'react';
import { IconButton, styled, Theme, Tooltip } from '@mui/material';
import { SxProps } from '@mui/system';
import { OverridableStringUnion } from '@mui/types';
import { IconButtonPropsSizeOverrides } from '@mui/material/IconButton/IconButton';

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
  sxIcon?: SxProps<Theme>;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  size?: OverridableStringUnion<'small' | 'medium' | 'large', IconButtonPropsSizeOverrides>;
}

const TooltipButton: FC<ITooltipButtonProps> = ({
  title,
  handler,
  color = 'rgb(237, 108, 2)',
  backgroundColor = 'rgba(255,255,255,0)',
  icon,
  placement = 'right-end',
  sxIcon,
  size,
}) => {
  return (
    <Tooltip title={title && <Title>{title}</Title>} placement={placement} onClick={handler} arrow>
      <IconButton
        size={size}
        sx={{ color, backgroundColor, ...sxIcon }}
        aria-label="upload picture"
        component="label"
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default TooltipButton;
