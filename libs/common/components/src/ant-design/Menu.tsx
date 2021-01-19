import { css } from '@styled-system/css';
import RCMenu, {
  Divider as RCDivider,
  MenuItem as RCMenuItem,
  MenuItemProps,
  MenuProps,
  SubMenu as RCSubMenu,
  SubMenuProps,
} from 'rc-menu';
import React, { useState } from 'react';
import styled from 'styled-components';

export const Menu: React.FC<MenuProps> = ({ children, ...props }) => {
  return <RCMenu {...props}>{children}</RCMenu>;
};

export const SubMenu: React.FC<SubMenuProps> = ({ children, ...props }) => {
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
      backgroundColor: isActive
        ? 'header.activeBackgroundColor'
        : 'header.backgroundColor',
      color: isActive ? 'header.activeColor' : 'header.color',
      fontSize: '0.8125rem',
    });
  }
);

export const MenuItem: React.FC<MenuItemProps> = ({ children, ...props }) => {
  const [active, setActive] = useState(false);

  return (
    <StyledMenuItem
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      isActive={active}
      {...props}
    >
      {children}
    </StyledMenuItem>
  );
};

interface StyledMenuItemProps {
  // MenuItemProps already has a propery named active,
  // so use the name isActive.
  isActive?: boolean;
}

const StyledMenuItem = styled(RCMenuItem)<StyledMenuItemProps>(
  ({ isActive }: StyledMenuItemProps) => {
    return css({
      backgroundColor: isActive
        ? 'header.activeBackgroundColor'
        : 'header.backgroundColor',
      color: isActive ? 'header.activeColor' : 'header.color',
      fontSize: '0.8125rem',
    });
  }
);

export const Divider = styled(RCDivider)(
  css({
    backgroundColor: 'header.borderColor',
  })
);
