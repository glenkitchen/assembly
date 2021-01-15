import {
  Tooltip,
  IconButton,
  Button,
  Stack,
} from '@assembly/common/components';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import React from 'react';
import { ActionsMenu } from './ActionsMenu';
import { Notifications } from './Notifications';

export const Actions = () => {
  //const [fadeIn, setFadeIn] = useState(false);

  return (
    <Stack
      align="center"
      gap={2}
      //   style={{
      //     opacity: fadeIn ? 1 : 0,
      //     transition: 'opacity 0.25s ease-in-out',
      //   }}
    >
      <Button>Create Tenant</Button>
      <Notifications />
      <Tooltip title="Toggle Dark/Light Theme">
        <IconButton>
          <Brightness6Icon style={IconStyle} />
        </IconButton>
      </Tooltip>
      <ActionsMenu />
    </Stack>
  );
};

export const IconStyle = {
  width: 20,
  height: 20,
};
