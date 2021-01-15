import css from '@styled-system/css';
import styled from 'styled-components';
import { Box } from './Box';

// breakpoints
export interface StackProps {
  direction?: 'horizontal' | 'vertical'; //  React.CSSProperties[flexDirection]
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  gap?: number; // spacing
}

export const Stack = styled(Box)<StackProps>(
  ({ direction = 'horizontal', justify, align, gap = 0 }) =>
    css({
      display: 'flex',
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
      justifyContent: justify,
      alignItems: align,

      '> *:not(:last-child)': {
        [direction === 'horizontal' ? 'marginRight' : 'marginBottom']: gap,
      },
    })
);
