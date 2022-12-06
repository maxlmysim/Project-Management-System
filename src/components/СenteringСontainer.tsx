import React, { CSSProperties, FC, LegacyRef, MutableRefObject, Ref } from 'react';
import { oneOfType, func, shape, instanceOf } from 'prop-types';

type Key = string | number;

/**
 * @internal You shouldn't need to use this type since you never see these attributes
 * inside your component or have to validate them.
 */
interface Attributes {
  key?: Key | null | undefined;
}

interface ClassAttributes<T> extends Attributes {
  ref?: LegacyRef<T> | undefined;
}

interface props extends ClassAttributes<HTMLDivElement> {
  children: React.ReactNode | boolean;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
  style?: CSSProperties;
  gap?: string;
  flex?: string;
}

const CenteringContainer: FC<props> = ({
  children,
  justifyContent = 'center',
  alignItems = 'center',
  wrap = 'nowrap',
  direction = 'row',
  style = {},
  gap = '0',
  flex = '1',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: alignItems,
        justifyContent: justifyContent,
        flexDirection: direction,
        flexWrap: wrap,
        gap: gap,
        flex: flex,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default CenteringContainer;
