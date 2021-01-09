import { Stack } from '@assembly/common/components';
import { Avatar, Typography } from '@material-ui/core';
import css from '@styled-system/css';
import React from 'react';
import { Actions } from './Actions';
import { MenuBar } from './MenuBar';

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
        fontSize: '0.8125rem',
      })}
    >
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
      <Typography variant="body2">tenant-name</Typography>
      <Actions />
    </Stack>
  );
};
