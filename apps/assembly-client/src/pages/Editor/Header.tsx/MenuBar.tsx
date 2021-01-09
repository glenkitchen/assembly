import Menu, {
  Divider as RCDivider,
  MenuItem as RCMenuItem,
  SubMenu as RCSubMenu,
  SubMenuProps,
} from 'rc-menu';
import React, { useState } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { css } from '@styled-system/css';

export const MenuBar = () => {
  return (
    <Menu onClick={(menuInfo) => console.log(menuInfo)} mode="horizontal">
      <SubMenu title="File" key="1">
        <MenuItem key="1-1">New File</MenuItem>
        <MenuItem key="1-2">New Sandbox...</MenuItem>
        <Divider />
        <MenuItem key="1-3">Save</MenuItem>
        <MenuItem key="1-4">Save As...</MenuItem>
        <MenuItem key="1-5">Save All</MenuItem>
        <Divider />
        <MenuItem key="1-6">Fork Sandbox</MenuItem>
        <MenuItem key="1-7">Export to Zip</MenuItem>
        <Divider />
        <MenuItem key="1-8">New File</MenuItem>
        <MenuItem key="1-9">New Sandbox...</MenuItem>
        <Divider />
        <MenuItem key="1-10">Auto Save</MenuItem>
        <SubMenu key="1-11" title="Preferences">
          <MenuItem key="2-1">Settings</MenuItem>
          <MenuItem key="2-2">CodeSandbox Settings</MenuItem>
          <Divider />
          <MenuItem key="2-3">Keyboard Shortcuts</MenuItem>
          <Divider />
          <MenuItem key="2-6">User Snippets</MenuItem>
          <Divider />
          <MenuItem key="1-12">Color Theme</MenuItem>
          <MenuItem key="1-13">File Icon Theme</MenuItem>
        </SubMenu>
        <Divider />
        <MenuItem key="1-12">Revert File</MenuItem>
        <MenuItem key="1-13">Close Editor</MenuItem>
      </SubMenu>
      <SubMenu title="Edit" key="2">
        <MenuItem key="_2-1">Undo</MenuItem>
      </SubMenu>
      <SubMenu title="Selection" key="3">
        <MenuItem key="_2-1">Undo</MenuItem>
      </SubMenu>
      <SubMenu title="View" key="4">
        <MenuItem key="_2-1">Undo</MenuItem>
      </SubMenu>
      <SubMenu title="Go" key="5">
        <MenuItem key="_2-1">Undo</MenuItem>
      </SubMenu>
      <SubMenu title="Help" key="6">
        <MenuItem key="_2-1">Undo</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const SubMenu: React.FC<SubMenuProps> = ({ children, ...props }) => {
  const [active, setActive] = useState(false);

  return (
    <StyledSubmenu
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      isActive={active}
      {...props}
    >
      {children}
    </StyledSubmenu>
  );
};

interface StyledSubmenuProps {
  // SubMenuProps already has a propery named active,
  // so use the name isActive.
  isActive?: boolean;
}

const StyledSubmenu = styled(RCSubMenu)<StyledSubmenuProps>(
  ({ isActive }: StyledSubmenuProps) => {
    return css({
      backgroundColor: isActive ? 'grays.500' : 'rgb(28, 32, 34)',
      color: isActive ? 'white' : 'rgb(204, 204, 204)',
      fontSize: '0.8125rem',
    });
  }
);

const MenuItem = ({ children, ...props }) => {
  const [active, setActive] = useState(false);

  return (
    <ThemeConsumer>
      {(theme) => {
        return (
          <RCMenuItem
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            {...props}
            style={theme.menu(active)}
          >
            {children}
          </RCMenuItem>
        );
      }}
    </ThemeConsumer>
  );
};

const Divider = styled(RCDivider)(
  css({
    backgroundColor: 'titleBar.divider',
  })
);
