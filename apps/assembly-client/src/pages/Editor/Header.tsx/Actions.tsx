import { Button, Stack } from '@assembly/common/components';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
        <NotificationsIcon style={IconStyle} />
      </Button>
      <Button>
        <MoreVertIcon style={IconStyle} />
      </Button>
    </Stack>
  );
};

const IconStyle = {
  width: 20,
  height: 20,
};
