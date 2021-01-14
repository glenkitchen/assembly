import React from 'react';
import { Branding } from './screens/Branding';
import { DataConnectors } from './screens/DataConnectors';
import { Templates } from './screens/Templates';
import { TenantInfo } from './screens/TenantInfo';
import { Translations } from './screens/Translations';

let workspaceId = 'tenantInfo';
export const setWorkspaceId = (id: string) => {
  workspaceId = id;
};

const WorkspaceMap = {
  tenantInfo: TenantInfo,
  dataConnectors: DataConnectors,
  templates: Templates,
  branding: Branding,
  translations: Translations,
};

export const Workspace = () => {
  const Component = WorkspaceMap[workspaceId];

  return <Component />;
};
