import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Header } from './Header.tsx';

export const Editor = () => {
  return (
    <>
      <Helmet>
        <title> - Assembly</title>
      </Helmet>
      <Container>
        <Header />
      </Container>
    </>
  );
};

// Fixed
const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
