import React from 'react';
import styled from 'styled-components';
import { Element } from './Element';
import { css } from '@styled-system/css';

export interface TextProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  size?: number;
  align?: string;
  weight?: string;
  block?: boolean;
}

export const Text = styled(Element).attrs((props) => ({
  as: ((props as unknown) as { as: string }).as || 'span',
}))<TextProps>(({ size, align, weight, block }) =>
  css({
    fontSize: size || 'inherit', //Styled System theme key: fontSizes
    textAlign: align || 'left',
    fontWeight: weight || null, // Styled System theme key: fontWeights
    lineHeight: 'normal',
    display: block ? 'block' : 'inline',
  })
);
