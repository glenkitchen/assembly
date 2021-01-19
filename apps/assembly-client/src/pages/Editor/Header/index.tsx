import { Flex, Typography, Avatar } from '@assembly/common/components';
import React from 'react';
import { Actions } from './Actions';
import { MenuBar } from './MenuBar';

export const Header = () => {
  return (
    <>
      <Flex align="center">
        <Avatar
          src="https://avatars3.githubusercontent.com/u/9795765?v=4"
          alt="glenkitchen"
          variant="square"
          style={{ borderRadius: 2, width: 36, height: 36 }}
        />
        <div style={{ paddingBottom: 14 }}>
          <MenuBar />
        </div>
      </Flex>
      <Typography style={{ fontSize: '0.85rem' }}>tenant-name</Typography>
      <Actions />
    </>
  );
};
