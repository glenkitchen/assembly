import css from '@styled-system/css';
import styled from 'styled-components';
import { Element } from './Element';

export interface StackProps {
  direction?: 'horizontal' | 'vertical';
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  gap?: number;
}

export const Stack = styled(Element)<StackProps>(
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
