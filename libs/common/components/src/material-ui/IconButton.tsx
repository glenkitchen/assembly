import {
  Button as MuiButton,
  ButtonProps,
  StylesProvider,
} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { css } from '@styled-system/css';

export const IconButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StylesProvider injectFirst>
      <StyledButton disableRipple size="small" {...props}>
        {children}
      </StyledButton>
    </StylesProvider>
  );
};

const StyledButton = styled(MuiButton)<ButtonProps>((props) => {
  return css({
    paddingX: 1,
    paddingY: 1,
    minWidth: 0,
    backgroundColor: 'button.secondaryBackgroundColor',
    color: 'button.secondaryColor',
    ':hover': {
      background: (theme) => theme.colors.button.secondaryHoverBackground,
    },
    ':disabled': { color: 'button.disabledColor' },
  });
});
