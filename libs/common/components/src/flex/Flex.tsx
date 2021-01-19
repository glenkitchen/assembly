import css from '@styled-system/css';
import styled from 'styled-components';
import { Box } from '../Box';

export interface StackProps {
  direction?: React.CSSProperties['flexDirection'];
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  gap?: number; // spacing
}

export const Flex = styled(Box)<StackProps>(
  ({ direction = 'row', justify, align, gap = 0 }) =>
    css({
      display: 'flex',
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align,

      '> *:not(:last-child)': {
        [direction === 'row' ? 'marginRight' : 'marginBottom']: gap,
      },
    })
);
