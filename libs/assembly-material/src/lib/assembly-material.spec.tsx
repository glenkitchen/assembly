import React from 'react';
import { render } from '@testing-library/react';

import AssemblyMaterial from './assembly-material';

describe('AssemblyMaterial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AssemblyMaterial />);
    expect(baseElement).toBeTruthy();
  });
});
