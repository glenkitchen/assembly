/* eslint-disable @typescript-eslint/no-explicit-any */
import RCCollapse, { Panel as RCPanel } from 'rc-collapse';
import React from 'react';
import styled from 'styled-components';

export const Collapse: React.FC<any> = ({ children, ...props }) => {
  return <RCCollapse {...props}>{children}</RCCollapse>;
};

export const Panel: React.FC<any> = ({ children, ...props }) => {
  return <StyledPanel {...props}>{children}</StyledPanel>;
};

const StyledPanel = styled(RCPanel)`
  &&& {
    /* border: none;*/
    /* border-radius: 0px;  */
    /* background-color: red; */
    /* box-shadow: none; */
  }
`;
