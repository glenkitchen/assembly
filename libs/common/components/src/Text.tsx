import React from 'react';
import styled from 'styled-components';
import { Element } from './Element';
import { css } from '@styled-system/css';

export interface TextProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  block?: boolean;
  align?: string;
  size?: number;
  weight?: string;
}

export const Text = styled(Element).attrs((p) => ({
  as: ((p as unknown) as { as: string }).as || 'span',
}))<TextProps>(({ block, align, weight, size }) =>
  css({
    display: block ? 'block' : 'inline',
    textAlign: align || 'left',
    fontSize: size || 'inherit', // theme.fontSizes
    fontWeight: weight || null, // theme.fontWeights
  })
);
