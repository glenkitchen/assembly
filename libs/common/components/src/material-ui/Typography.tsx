import React from 'react';
import {
  Typography as MuiTypography,
  TypographyProps,
} from '@material-ui/core';

export const Typography: React.FC<TypographyProps> = ({
  children,
  ...props
}) => {
  return <MuiTypography {...props}>{children}</MuiTypography>;
};

// Typography (muted: 'mutedColor'  color: rgb(153, 153, 153))
