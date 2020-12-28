import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AssemblyMaterialProps {}

const StyledAssemblyMaterial = styled.div`
  color: pink;
`;

export function AssemblyMaterial(props: AssemblyMaterialProps) {
  return (
    <StyledAssemblyMaterial>
      <h1>Welcome to assembly-material!</h1>
    </StyledAssemblyMaterial>
  );
}

export default AssemblyMaterial;
