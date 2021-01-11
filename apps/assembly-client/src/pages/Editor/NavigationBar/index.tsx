import { Button, Stack } from '@assembly/common/components';
import { css } from '@styled-system/css';
import React from 'react';
import {
  DeployIcon,
  ExplorerIcon,
  GithubIcon,
  LiveIcon,
  SettingsIcon,
} from './icons';

export const NavigationBar = () => {
  return (
    <Stack
      direction="vertical"
      align="center"
      gap={4}
      css={css({
        position: 'fixed',
        top: 48,
        bottom: 22,
        left: 0,
        padding: 2,
        backgroundColor: 'navigationBar.backgroundColor',
        borderRight: '1px solid',
        borderColor: 'navigationBar.borderColor',
      })}
    >
      <Button>
        <DeployIcon />
      </Button>
      <Button>
        <ExplorerIcon />
      </Button>
      <Button>
        <SettingsIcon />
      </Button>
      <Button>
        <GithubIcon />
      </Button>
      <Button>
        <LiveIcon />
      </Button>
    </Stack>
  );
};
