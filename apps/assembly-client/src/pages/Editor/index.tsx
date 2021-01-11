import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Header } from './Header';
import { NavigationBar } from './NavigationBar';
import { StatusBar } from './StatusBar';
import SplitPane from 'react-split-pane';

export const Editor = () => {
  return (
    <>
      <Helmet>
        <title> - Assembly</title>
      </Helmet>
      <Container>
        <Header />
        <Fullscreen>
          <NavigationBar />
          <SplitPaneContainer>
            <div>One</div>
            {/* <SplitPane>
              <div>one</div>
              <div>two</div>
            </SplitPane> */}
          </SplitPaneContainer>
          <StatusBar />
        </Fullscreen>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  //width: 100%; //
  //height: 100%; //
`;

const Fullscreen = styled.div`
  //display: flex; ////
  //flex: auto; //
  //width: 100%; //
  height: 100%;
  background-color: red;
`;

const SplitPaneContainer = styled.div`
  position: fixed;
  top: 48px;
  bottom: 22px;
  right: 0;
  left: calc(3.5rem + 1px);
  //height: auto; //
  background-color: green;
`;
