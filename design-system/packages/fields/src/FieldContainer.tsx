/* @jsx jsx */

import { ReactNode } from 'react';
import { jsx } from '@k6ui/core';

type FieldContainerProps = {
  children: ReactNode;
  className?: string;
};

export const FieldContainer = ({ children, ...props }: FieldContainerProps) => {
  return <div {...props}>{children}</div>;
};
