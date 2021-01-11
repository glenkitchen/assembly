import { Stack } from '@assembly/common/components';
import css from '@styled-system/css';
import React from 'react';

export const StatusBar = () => {
  return (
    <Stack
      justify="space-between"
      align="center"
      css={css({
        position: 'fixed',
        // display: 'flex',
        bottom: 0,
        right: 0,
        left: 0,
        // width: '100%',
        height: 22,
        backgroundColor: 'statusBar.backgroundColor',
        color: 'statusBar.color',
        borderTop: '1px solid',
        borderColor: 'navigationBar.borderColor',
      })}
    >
      Statusbar
    </Stack>
  );
};
