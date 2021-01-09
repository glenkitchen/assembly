import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Element, ElementProps } from './Element';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ElementProps {
  variant?: 'primary' | 'secondary' | 'link' | 'danger';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  loading,
  css = {},
  ...props
}) => {
  const styles = { ...commonStyles, ...css };
  console.log(
    '🚀 ~ file: Button.tsx ~ line 19 ~ styles',
    JSON.stringify(styles, null, 2)
  );

  return (
    <Element as="button" type="button" css={styles}>
      {loading ? <AnimatingDots /> : props.children}
    </Element>
  );
};

const variantStyles = {
  primary: {
    backgroundColor: 'button.background',
    color: 'button.foreground',
    ':hover:not(:disabled)': { background: 'button.hoverBackground' },
    ':focus:not(:disabled)': { background: 'button.hoverBackground}' },
  },
  secondary: {
    backgroundColor: 'secondaryButton.background',
    color: 'secondaryButton.foreground',
    ':hover:not(:disabled)': { background: 'secondaryButton.hoverBackground' },
    ':focus:not(:disabled)': { background: 'secondaryButton.hoverBackground}' },
  },
  link: {
    backgroundColor: '',
    color: '',
    ':hover:not(:disabled)': { background: '' },
    ':focus:not(:disabled)': { background: '' },
  },
  danger: {
    backgroundColor: 'dangerButton.background',
    color: 'dangerButton.foreground',
    ':hover:not(:disabled)': { background: 'dangerButton.hoverBackground' },
    ':focus:not(:disabled)': { background: 'dangerButton.hoverBackground}' },
  },
};

const commonStyles = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 'none', // as a flex child
  cursor: 'pointer',
  paddingY: 0,
  width: '100%',
  paddingX: 2,
  //   height: '26px', // match with inputs
  //   fontSize: 2,
  //   fontWeight: 'medium',
  //   lineHeight: 1, // trust the height
  //   border: 'none',
  //   borderRadius: 'small',
  //   transition: 'all ease-in',
  //   textDecoration: 'none',
  //   transitionDuration: (theme) => theme.speeds[2],

  //   ':focus': {
  //     outline: 'none',
  //   },
  //   ':active:not(:disabled)': {
  //     transform: 'scale(0.98)',
  //   },
  //   ':disabled': {
  //     opacity: '0.4',
  //     cursor: 'not-allowed',
  //   },
  //   '&[data-loading="true"]': {
  //     opacity: 1,
  //     cursor: 'default',
  //   },
  //   '&[data-auto-width="true"]': {
  //     width: 'fit-content',
  //   },
};

const transition = keyframes({
  '0%': { opacity: 0.6 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0.6 },
});

const Dot = styled.span`
  font-size: 18px;
  animation: ${transition} 1.5s ease-out infinite;
`;

const AnimatingDots = () => (
  <span>
    <Dot>.</Dot>
    <Dot style={{ animationDelay: '200ms' }}>.</Dot>
    <Dot style={{ animationDelay: '400ms' }}>.</Dot>
  </span>
);
