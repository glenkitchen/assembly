import { Stack } from '@assembly/common/components';
import css from '@styled-system/css';
import React from 'react';
import { Helmet } from 'react-helmet';
import SplitPane from 'react-split-pane';
import styled from 'styled-components';
import { useOvermind } from '../../overmind';
import { Content } from './Content';
import { Header } from './Header';
import { NavigationBar } from './NavigationBar';
import { StatusBar } from './StatusBar';
import { Workspace } from './Workspace';

export const Editor = () => {
  const { state } = useOvermind();

  const hideNavigation = false; // state.workspace.workspaceHidden
  const hideStatusBar = state.editor.hideStatusBar;

  return (
    <>
      <Title />
      <Container>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <NavigationBarContainer>
          <NavigationBar />
        </NavigationBarContainer>
        <SplitPaneContainer
          hideNavigation={hideNavigation}
          hideStatusBar={hideStatusBar}
        >
          <SplitPane split="vertical" defaultSize={250} minSize={100}>
            <Workspace />
            <Content />
          </SplitPane>
        </SplitPaneContainer>
        {!hideStatusBar && (
          <StatusBarContainer>
            <StatusBar />
          </StatusBarContainer>
        )}
      </Container>
    </>
  );
};

const Title = () => (
  <Helmet>
    <title> - Assembly</title>
  </Helmet>
);

const Container = styled.div(
  css({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  })
);

const HeaderContainer = ({ children }) => (
  <Stack
    as="header"
    justify="space-between"
    align="center"
    paddingX={2}
    css={css({
      height: 12,
      fontSize: '0.8125rem',
      backgroundColor: 'header.backgroundColor',
      color: 'header.color',
      borderBottom: '1px solid',
      borderColor: 'header.borderColor',
    })}
  >
    {children}
  </Stack>
);

interface LayoutProps {
  hideNavigation: boolean;
  hideStatusBar: boolean;
}

const SplitPaneContainer = styled.div<LayoutProps>(
  ({ hideNavigation, hideStatusBar }) =>
    css({
      position: 'fixed',
      top: 48,
      right: 0,
      bottom: 22,
      left: hideNavigation ? 0 : 'calc(3.5rem + 1px)',
      height: hideStatusBar ? '100%' : 'calc(100% - 4.35rem)',
      backgroundColor: 'editor.backgroundColor',
      color: 'editor.color',
    })
);

const NavigationBarContainer = ({ children }) => (
  <Stack
    direction="vertical"
    align="center"
    gap={4}
    padding={2}
    css={css({
      position: 'fixed',
      top: 48,
      bottom: 22,
      left: 0,
      backgroundColor: 'navigationBar.backgroundColor',
      color: 'navigationBar.color',
      borderRight: '1px solid',
      borderColor: 'navigationBar.borderColor',
    })}
  >
    {children}
  </Stack>
);

const StatusBarContainer = ({ children }) => (
  <Stack
    justify="space-between"
    align="center"
    css={css({
      height: 22,
      position: 'fixed',
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'statusBar.backgroundColor',
      color: 'statusBar.color',
      borderTop: '1px solid',
      borderColor: 'statusBar.borderColor',
    })}
  >
    {children}
  </Stack>
);
