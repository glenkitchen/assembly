import { Icon, Avatar, Stack } from '@assembly/common/components';
import React from 'react';
import { MenuBar } from './MenuBar';
import css from '@styled-system/css';

export const Header = () => {
  return (
    <Stack
      as="header"
      justify="space-between"
      align="center"
      paddingX={2}
      css={css({
        boxSizing: 'border-box',
        height: 12,
        backgroundColor: 'titleBar.inactiveBackground',
        color: 'titleBar.inactiveForeground',
        borderColor: 'titleBar.border',
        borderBottom: '1px solid',
      })}
    >
      <Stack align="center">
        <div style={{ paddingTop: 4 }}>
          <Avatar
            imageUrl="https://avatars3.githubusercontent.com/u/9795765?v=4"
            userName="glenkitchen"
            tooltipTitle="To Dashboard"
          />
        </div>
        <Icon name="backArrow" />
        <div style={{ paddingBottom: 20 }}>
          <MenuBar />
        </div>
      </Stack>
    </Stack>
  );
};
