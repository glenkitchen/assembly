import React from 'react';
import styled from 'styled-components';
import { css } from '@styled-system/css';
import Menu, { SubMenu, MenuItem, Divider } from 'rc-menu';
// import './MenuBar.css';

export const MenuBar = () => {
  const nestSubMenu = (
    <SubMenu
      title={<span className="submenu-title-wrapper">offset sub menu 2</span>}
      key="4"
      popupOffset={[10, 15]}
    >
      <MenuItem key="4-1">inner inner</MenuItem>
      <Divider />
      <SubMenu
        key="4-2"
        title={<span className="submenu-title-wrapper">sub menu 1</span>}
      >
        <SubMenu
          title={<span className="submenu-title-wrapper">sub 4-2-0</span>}
          key="4-2-0"
        >
          <MenuItem key="4-2-0-1">inner inner</MenuItem>
          <MenuItem key="4-2-0-2">inner inner2</MenuItem>
        </SubMenu>
        <MenuItem key="4-2-1">inn</MenuItem>
        <SubMenu
          title={<span className="submenu-title-wrapper">sub menu 4</span>}
          key="4-2-2"
        >
          <MenuItem key="4-2-2-1">inner inner</MenuItem>
          <MenuItem key="4-2-2-2">inner inner2</MenuItem>
        </SubMenu>
        <SubMenu
          title={<span className="submenu-title-wrapper">sub menu 3</span>}
          key="4-2-3"
        >
          <MenuItem key="4-2-3-1">inner inner</MenuItem>
          <MenuItem key="4-2-3-2">inner inner2</MenuItem>
        </SubMenu>
      </SubMenu>
    </SubMenu>
  );

  const dark = false;

  const children1 = [
    <SubMenu
      title="Edit"
      key="2"
      style={{
        backgroundColor: 'black',
        color: 'white',
        fontSize: '0.8125rem',
      }}
    >
      <MenuItem
        key="_2-1"
        style={{
          backgroundColor: 'black',
          color: 'white',
          fontSize: '0.8125rem',
          cursor: 'pointer',
        }}
      >
        Undo
      </MenuItem>
    </SubMenu>,
  ];

  return (
    <Menu
      onClick={(menuInfo) => {
        console.log(menuInfo);
      }}
      mode="horizontal"
      // expandIcon={<span>Mes</span>}
      style={{
        backgroundColor: 'black',
        color: 'white',
        fontSize: '0.8125rem',
      }}
      // getPopupContainer={(parent) => {
      //   return (parent as any).menuPopUpContainer;
      // }}
    >
      {children1}
    </Menu>
  );
};

// <Container>
//   <Child>MenuBar</Child>
// </Container>

export const Container = styled.div`
  background-color: rgb(204, 204, 204);
  color: wheat;
`;

// export const Container = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 0.5rem;
// `;

export const Child = styled.div`
  align-items: center;
  height: 38px;
  font-size: 0.8125rem;
`;

//  <MenuItem key="1-1">New File</MenuItem>
//       <MenuItem key="1-2">New Sandbox...</MenuItem>
//       <Divider />
//       <MenuItem key="1-3">Save</MenuItem>
//       <MenuItem key="1-4">Save As...</MenuItem>
//       <MenuItem key="1-5">Save All</MenuItem>
//       <Divider />
//       <MenuItem key="1-6">Fork Sandbox</MenuItem>
//       <MenuItem key="1-7">Export to Zip</MenuItem>
//       <Divider />
//       <MenuItem key="1-8">New File</MenuItem>
//       <MenuItem key="1-9">New Sandbox...</MenuItem>
//       <Divider />
//       <MenuItem key="1-10">Auto Save</MenuItem>
//       <SubMenu key="1-11" title="Preferences">
//         <MenuItem key="2-1">Settings</MenuItem>
//         <MenuItem key="2-2">CodeSandbox Settings</MenuItem>
//         <Divider />
//         <MenuItem key="2-3">Keyboard Shortcuts</MenuItem>
//         <Divider />
//         <MenuItem key="2-6">User Snippets</MenuItem>
//         <Divider />
//         <MenuItem key="1-12">Color Theme</MenuItem>
//         <MenuItem key="1-13">File Icon Theme</MenuItem>
//       </SubMenu>
//       <Divider />
//       <MenuItem key="1-12">Revert File</MenuItem>
//       <MenuItem key="1-13">Close Editor</MenuItem>
//     </SubMenu>,
//     <SubMenu title="Edit" key="2">
//       <MenuItem key="_2-1">Undo</MenuItem>
//     </SubMenu>
//     <SubMenu title="Selection" key="3"></SubMenu>,
//     <SubMenu title="View" key="4"></SubMenu>,
//     <SubMenu title="Go" key="5"></SubMenu>,
//     <SubMenu title="Help" key="6"></SubMenu>,
