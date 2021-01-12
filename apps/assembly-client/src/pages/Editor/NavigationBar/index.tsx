import { Button } from '@assembly/common/components';
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
    <>
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
    </>
  );
};
