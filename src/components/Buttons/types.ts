import React, { CSSProperties } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';

export interface IButtonComponent extends IButton {
  children?: React.ReactNode;
  dropProvided?: DraggableProvided;
}

export interface IButton {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  variant?: 'contained' | 'text' | 'outlined';
  type?: 'full' | 'small';
  style?: CSSProperties;
}
