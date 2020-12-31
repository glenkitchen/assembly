import { NotFound } from '@assembly/common/components';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Client } from './pages/Client';

const App = () => {
  return (
    <Container>
      <Content>
        <Routes>
          <Route path="/" element={<Client />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
`;

const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: auto;
    background-color: ${theme.colors.background}; //
    color: white;
  `}
`;

export default App;
