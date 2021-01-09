import { Stack, Text } from '@assembly/common/components';
import css from '@styled-system/css';
import React from 'react';
import { Actions } from './Actions';
import { HeaderIcon } from './HeaderIcon';
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
        <div style={{ marginTop: 4 }}>
          <HeaderIcon />
        </div>
        <div style={{ paddingBottom: 14 }}>
          <MenuBar />
        </div>
      </Stack>
      <Text>tenant-name</Text>
      <Actions />
    </Stack>
  );
};
