import React, { FC } from 'react';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { Property } from 'csstype';

interface IProps<TLength = (string & object) | 0> {
  position?: Property.Position | undefined;
  top?: Property.Top<TLength> | undefined;
  left?: Property.Left<TLength> | undefined;
  bottom?: Property.Bottom<TLength> | undefined;
  right?: Property.Right<TLength> | undefined;
  color?: Property.Color | undefined;
  size?: Property.FontSize<TLength> | undefined;
  transform?: Property.Transform | undefined;
}

const DragIcon: FC<IProps> = ({
  size,
  bottom,
  top,
  right,
  position,
  left,
  color,
  transform = 'translate(-50%, -50%)',
}) => {
  const styleDragIcon: SxProps<Theme> = {
    fontSize: size,
    color,
    position,
    top,
    left,
    bottom,
    right,
    transform,
    zIndex: 5,
  };
  return <DragIndicatorIcon sx={styleDragIcon} />;
};

export default DragIcon;
