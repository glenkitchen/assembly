import { Tooltip } from '@material-ui/core';
import { Avatar } from '@assembly/common/components';
import React from 'react';

export const HeaderIcon = () => {
  return (
    <Tooltip title="To Dashboard">
      <span
        style={{
          width: 26,
          height: 26,
          color: 'transparent',
        }}
      >
        <Avatar
          imageUrl="https://avatars3.githubusercontent.com/u/9795765?v=4"
          userName="glenkitchen"
        />
      </span>
    </Tooltip>
  );
};
