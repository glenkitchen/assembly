import { Stack } from '@assembly/common/components';
import React from 'react';
import { HeaderIcon } from './HeaderIcon';
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
        fontFamily: 'Inter, sans-serif',
        height: 12,
        backgroundColor: 'titleBar.activeBackground',
        color: 'titleBar.activeForeground',
        borderColor: 'titleBar.border',
        borderBottom: '1px solid',
      })}
    >
      <Stack align="center">
        <HeaderIcon />
        <MenuBar />
      </Stack>
    </Stack>
  );
};
