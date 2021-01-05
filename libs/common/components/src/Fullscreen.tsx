import React from 'react';
import styled from 'styled-components';
import { Element } from './Element';
import { css } from '@styled-system/css';

export const Fullscreen = styled(Element)(() =>
  css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  })
);
