import React, { useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@assembly/common/components';
import { IconStyle } from './Actions';
import {
  Divider as MuiDivider,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  StylesProvider,
} from '@material-ui/core';
import css from '@styled-system/css';
import styled from 'styled-components';

export const ActionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  return (
    <>
      <Button onClick={(event) => setAnchorEl(event.currentTarget)}>
        <MoreVertIcon style={IconStyle} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <MenuItem>My Profile</MenuItem>
        <Divider />
        <MuiDivider />
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Documentation</MenuItem>
        <MenuItem>Search </MenuItem>
        <MenuItem>Upgrade to Pro</MenuItem>
        <Divider />
        <MenuItem>Storage Management</MenuItem>
        <MenuItem>Preferences</MenuItem>
        <Divider />
        <MenuItem>Submit Feedback</MenuItem>
      </Menu>
    </>
  );
};

const Menu = styled(MuiMenu)(
  css({
    '.MuiPaper-root': {
      backgroundColor: 'header.backgroundColor',
      color: 'header.color',
    },
  })
);

const MenuItem: React.FC = ({ children, ...props }) => {
  return (
    <StyledMenuItem dense {...props}>
      {children}
    </StyledMenuItem>
  );
};

const StyledMenuItem = styled(MuiMenuItem)(() => {
  return css({
    ':hover': {
      background: (theme) => theme.colors.button.hoverBackground,
    },
    fontFamily: 'sans-serif',
  });
});

const Divider = styled(MuiDivider)(
  css({
    '&&': {
      backgroundColor: 'header.bordercolor',
    },
  })
);

// position
// icon
