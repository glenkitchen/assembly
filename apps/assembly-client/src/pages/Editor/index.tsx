import { Stack } from '@assembly/common/components';
import css from '@styled-system/css';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Header } from './Header';
import { NavigationBar } from './NavigationBar';
import { StatusBar } from './StatusBar';

export const Editor = () => {
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
        <SplitPaneContainer>
          <div>One</div>
          {/* <SplitPane>
              <div>one</div>
              <div>two</div>
            </SplitPane> */}
        </SplitPaneContainer>
        <StatusBarContainer>
          <StatusBar />
        </StatusBarContainer>
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

const SplitPaneContainer = styled.div(
  css({
    position: 'fixed',
    top: 48,
    right: 0,
    bottom: 22,
    left: 'calc(3.5rem + 1px)',
    backgroundColor: 'green',
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
