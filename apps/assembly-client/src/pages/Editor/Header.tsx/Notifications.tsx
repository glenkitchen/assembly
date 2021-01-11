import { Button } from '@assembly/common/components';
import React, { useState } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Popover, Typography } from '@material-ui/core';
import { IconStyle } from './Actions';

export const Notifications = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  return (
    <>
      <Button onClick={(event) => setAnchorEl(event.currentTarget)}>
        <NotificationsIcon style={IconStyle} />
      </Button>
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <Typography>Notifications</Typography>
      </Popover>
    </>
  );
};
