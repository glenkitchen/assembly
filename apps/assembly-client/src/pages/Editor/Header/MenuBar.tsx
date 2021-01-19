import { Divider, Menu, MenuItem, SubMenu } from '@assembly/common/components';
import React from 'react';
import { useOvermind } from '../../../overmind';

export const MenuBar = () => {
  const { actions } = useOvermind();

  return (
    <Menu onClick={(menuInfo) => console.log(menuInfo)} mode="horizontal">
      <SubMenu title="File" key="1" popupOffset={[0, 0]}>
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
      <SubMenu title="Edit" key="2" popupOffset={[0, 0]}>
        <MenuItem key="_2-1">Undo</MenuItem>
      </SubMenu>
      <SubMenu title="Selection" key="3" popupOffset={[0, 0]}>
        <MenuItem key="_2-1">Undo</MenuItem>
      </SubMenu>
      <SubMenu title="View" key="4" popupOffset={[0, 0]}>
        <SubMenu key="_3-11" title="Appearance">
          <MenuItem
            key="_3-1"
            onClick={() => {
              actions.editor.toggleNavigationBar();
            }}
          >
            Show Navigation Bar
          </MenuItem>
          <MenuItem
            key="_3-1"
            onClick={() => {
              actions.editor.toggleStatusBar();
            }}
          >
            Show Status Bar
          </MenuItem>
        </SubMenu>
      </SubMenu>
      <SubMenu title="Go" key="5" popupOffset={[0, 0]}>
        <MenuItem key="_2-1">Undo</MenuItem>
      </SubMenu>
      <SubMenu title="Help" key="6" popupOffset={[0, 0]}>
        <MenuItem key="_2-1">Undo</MenuItem>
      </SubMenu>
    </Menu>
  );
};
