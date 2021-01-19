import { Flex } from '@assembly/common/components';
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

const HEADER_HEIGHT = 48;
const STATUS_BAR_HEIGHT = 22;

export const Editor = () => {
  const { state } = useOvermind();

  const hideNavigationBar = state.editor.hideNavigationBar;
  const hideStatusBar = state.editor.hideStatusBar;

  return (
    <>
      <Title />
      <Container>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <NavigationBarContainer
          hideNavigationBar={hideNavigationBar}
          hideStatusBar={hideStatusBar}
        >
          <NavigationBar />
        </NavigationBarContainer>
        <SplitPaneContainer
          hideNavigationBar={hideNavigationBar}
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
  <Flex
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
  </Flex>
);

interface LayoutProps {
  hideNavigationBar: boolean;
  hideStatusBar: boolean;
}

const SplitPaneContainer = styled.div<LayoutProps>(
  ({ hideNavigationBar, hideStatusBar }) =>
    css({
      position: 'fixed',
      top: HEADER_HEIGHT,
      right: 0,
      bottom: hideStatusBar ? 0 : STATUS_BAR_HEIGHT,
      left: hideNavigationBar ? 0 : 'calc(3.5rem + 1px)',
      backgroundColor: 'editor.backgroundColor',
      color: 'editor.color',
    })
);

const NavigationBarContainer: React.FC<LayoutProps> = ({
  hideStatusBar,
  children,
}) => (
  <Flex
    direction="column"
    align="center"
    gap={4}
    padding={2}
    css={css({
      position: 'fixed',
      top: HEADER_HEIGHT,
      bottom: hideStatusBar ? 0 : STATUS_BAR_HEIGHT,
      left: 0,
      backgroundColor: 'navigationBar.backgroundColor',
      color: 'navigationBar.color',
      borderRight: '1px solid',
      borderColor: 'navigationBar.borderColor',
    })}
  >
    {children}
  </Flex>
);

const StatusBarContainer = ({ children }) => (
  <Flex
    justify="space-between"
    align="center"
    css={css({
      height: STATUS_BAR_HEIGHT,
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
  </Flex>
);
