import { Avatar, Icon, Stack } from '@assembly/common/components';
import React from 'react';
import { css } from '@styled-system/css';

/**
 * Tooltip
 *  Link
 *   Stack
 *    Icon
 *   Avatar
 */

export const HeaderIcon = () => {
  return (
    <>
      <Avatar
        imageUrl="https://avatars3.githubusercontent.com/u/9795765?v=4"
        userName="glenkitchen"
        tooltipTitle="To Dashboard"
      />
      <Stack
        css={css({
          opacity: 0,
          transition: '0.15s ease opacity',
          position: 'absolute',
          left: 4,
          top: 4,
          zIndex: 10,
          borderRadius: 'small',
        })}
      >
        <Icon style={{ color: 'white' }} name="backArrow" />
      </Stack>
    </>
  );
};
