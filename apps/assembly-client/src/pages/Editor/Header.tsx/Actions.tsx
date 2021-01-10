import { Button, Icon, Stack } from '@assembly/common/components';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react';

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
      <Button>Create App</Button>
      <Button>
        <NotificationsIcon
          style={{
            color: 'rgb(204, 204, 204)',
            width: 20,
            height: 20,
          }}
        />
      </Button>
      <Button>Kebab Menu</Button>
    </Stack>
  );
};
