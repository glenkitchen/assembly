import React from 'react';
import { Avatar as MuiAvatar, AvatarProps } from '@material-ui/core';

export const Avatar: React.FC<AvatarProps> = ({ children, ...props }) => {
  return <MuiAvatar {...props}>{children}</MuiAvatar>;
};
