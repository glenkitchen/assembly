import styled from 'styled-components';
import { Element } from './Element';
import css from '@styled-system/css';

export interface StackProps {
  gap?: number; // theme.space
  direction?: 'horizontal' | 'vertical';
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
}

export const Stack = styled(Element)<StackProps>(
  ({ gap = 0, direction = 'horizontal', justify, align }) =>
    css({
      display: 'flex',
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
      justifyContent: justify,
      alignItems: align,

      '> *not(:last-child)': {
        [direction === 'horizontal' ? 'marginRight' : 'marginBottom']: gap,
      },
    })
);
