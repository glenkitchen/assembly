import { useOvermind } from '../../../overmind';
import React from 'react';
import { Branding } from './screens/Branding';
import { DataConnectors } from './screens/DataConnectors';
import { Templates } from './screens/Templates';
import { TenantInfo } from './screens/TenantInfo';
import { Translations } from './screens/Translations';

const Workspaces = {
  tenantInfo: TenantInfo,
  dataConnectors: DataConnectors,
  templates: Templates,
  branding: Branding,
  translations: Translations,
};

export const Workspace = () => {
  const { state } = useOvermind();

  const Component = Workspaces[state.editor.currentWorkSpaceId];

  return <Component />;
};
