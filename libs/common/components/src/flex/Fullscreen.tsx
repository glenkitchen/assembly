import { css } from '@styled-system/css';
import styled from 'styled-components';
import { Box } from '../Box';

export const Fullscreen = styled(Box)(() =>
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'grays.900',
    color: 'white',
  })
);
