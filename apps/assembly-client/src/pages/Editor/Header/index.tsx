import { Stack } from '@assembly/common/components';
import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { Actions } from './Actions';
import { MenuBar } from './MenuBar';

export const Header = () => {
  return (
    <>
      <Stack align="center">
        <Avatar
          src="https://avatars3.githubusercontent.com/u/9795765?v=4"
          alt="glenkitchen"
          variant="square"
          style={{ borderRadius: 2, width: 36, height: 36 }}
        />
        <div style={{ paddingBottom: 14 }}>
          <MenuBar />
        </div>
      </Stack>
      <Typography style={{ fontSize: '0.85rem' }}>tenant-name</Typography>
      <Actions />
    </>
  );
};
