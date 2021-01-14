import { Button } from '@assembly/common/components';
import { makeStyles, Tooltip } from '@material-ui/core';
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
  const classes = useStyles();

  return (
    <>
      {items.map((item) => {
        const Icon = iconMap[item.id];
        return (
          <Tooltip title={item.title} placement="right" classes={classes}>
            <Button onClick={() => setWorkspaceId(item.id)}>
              <Icon />
            </Button>
          </Tooltip>
        );
      })}
    </>
  );
};

//Tooltip Component
const useStyles = makeStyles({
  tooltip: {
    fontSize: 14,
    backgroundColor: 'black',
  },
});

// const Tip = styled(Tooltip)`
//   & .MuiTooltip-tooltip {
//     background-color: black;
//     font-size: 14px;
//   }
// `;
