import {
  Button as MuiButton,
  ButtonProps,
  StylesProvider,
} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { css } from '@styled-system/css';

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StylesProvider injectFirst>
      <StyledButton disableRipple size="small" {...props}>
        {children}
      </StyledButton>
    </StylesProvider>
  );
};

interface StyledButtonProps {
  color?: 'primary' | 'secondary';
}

const StyledButton = styled(MuiButton)(
  css({
    textTransform: 'none',
    fontSize: '0.85rem',
    backgroundColor: 'button.backgroundColor',
    color: 'button.color',
    ':hover': {
      // background is not a Styled System shortcut like backgroundColor,
      // so use the theme directly.
      background: (theme) => theme.colors.button.hoverBackground,
    },
    ':disabled': { color: 'button.disabledColor' },
  })
);
