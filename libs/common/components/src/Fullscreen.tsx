import { css } from '@styled-system/css';
import styled from 'styled-components';
import { Element } from './Element';

export const Fullscreen = styled(Element)(() =>
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  })
);
