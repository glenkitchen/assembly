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
      <StyledButton
        disableRipple
        size="small"
        {...props}
        isText={typeof children === 'string'}
      >
        {children}
      </StyledButton>
    </StylesProvider>
  );
};

// Styled & Themed Inner Compoment
const StyledButton = styled(MuiButton)<ButtonProps & { isText?: boolean }>(
  ({ isText, color }) => {
    return css({
      textTransform: 'none',
      fontSize: '0.85rem',
      paddingX: isText ? 2 : 1,
      paddingY: 1,
      minWidth: 0,
      whiteSpace: 'nowrap',
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
  }
);
