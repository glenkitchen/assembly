import { IconButton, Tooltip } from '@assembly/common/components';
import React from 'react';
import {
  ExplorerIcon,
  GithubIcon,
  InfoIcon,
  LiveIcon,
  SettingsIcon,
} from './icons';
import { setWorkspaceId } from '../Workspace';

const items = [
  { title: 'Tenant Info', id: 'tenantInfo' },
  { title: 'Data Connectors', id: 'dataConnectors' },
  { title: 'Templates', id: 'templates' },
  { title: 'Branding', id: 'branding' },
  { title: 'Translations', id: 'translations' },
];

const iconMap = {
  tenantInfo: InfoIcon,
  dataConnectors: ExplorerIcon,
  templates: SettingsIcon,
  branding: GithubIcon,
  translations: LiveIcon,
};

export const NavigationBar = () => {
  return (
    <>
      {items.map((item) => {
        const Icon = iconMap[item.id];
        return (
          <Tooltip title={item.title} placement="right">
            <IconButton onClick={() => setWorkspaceId(item.id)}>
              <Icon />
            </IconButton>
          </Tooltip>
        );
      })}
    </>
  );
};
