import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import styled, { css } from 'styled-components';
import { Editor, ErrorFallback } from './pages';

const NotFound = lazy(() => import('./pages/common/NotFound'));

const App = () => {
  return (
    <Container>
      <ToastContainer />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Content>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Editor />} />
              <Route
                path="/error"
                element={
                  <ErrorFallback
                    error={{ message: 'testing' }}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    resetErrorBoundary={() => {}}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Content>
      </ErrorBoundary>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: auto;
    /* background-color: ${theme.colors.green};
    color: white; */
  `}
`;

export default App;
