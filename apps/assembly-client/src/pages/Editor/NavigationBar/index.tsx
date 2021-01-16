import { IconButton, Tooltip } from '@assembly/common/components';
import { useOvermind } from '../../../overmind';
import React from 'react';
import {
  ExplorerIcon,
  GithubIcon,
  InfoIcon,
  LiveIcon,
  SettingsIcon,
} from './icons';

const items = [
  { title: 'Tenant Info', id: 'tenantInfo' },
  { title: 'Data Connectors', id: 'dataConnectors' },
  { title: 'Templates', id: 'templates' },
  { title: 'Branding', id: 'branding' },
  { title: 'Translations', id: 'translations' },
];

const icons = {
  tenantInfo: InfoIcon,
  dataConnectors: ExplorerIcon,
  templates: SettingsIcon,
  branding: GithubIcon,
  translations: LiveIcon,
};

export const NavigationBar = () => {
  const { actions } = useOvermind();

  return (
    <>
      {items.map(({ id, title }) => {
        const Icon = icons[id];
        return (
          <Tooltip title={title} placement="right">
            <IconButton
              onClick={() => actions.editor.setCurrentWorkspaceId({ id })}
            >
              <Icon />
            </IconButton>
          </Tooltip>
        );
      })}
    </>
  );
};
