import {
  Button as MuiButton,
  ButtonProps,
  StylesProvider,
} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { css } from '@styled-system/css';

// Outer Component
//  Pass props to  and render inner Component
//  Render children as children of inner component
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StylesProvider injectFirst>
      <StyledButton disableRipple size="small" {...props}>
        {children}
      </StyledButton>
    </StylesProvider>
  );
};

// Styled & Themed Inner Compoment
const StyledButton = styled(MuiButton)<ButtonProps>(({ color }) => {
  return css({
    textTransform: 'none',
    fontSize: '0.85rem',
    backgroundColor:
      color === 'secondary'
        ? 'button.secondaryBackgroundColor'
        : 'button.backgroundColor',
    color: color === 'secondary' ? 'button.secondaryColor' : 'button.color',
    ':hover': {
      // background is not a Styled System shortcut, so just use the theme prop
      background: (theme) => theme.colors.button.hoverBackground,
    },
    ':disabled': { color: 'button.disabledColor' },
  });
});
