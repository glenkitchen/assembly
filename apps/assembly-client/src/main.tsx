import { themes } from '@assembly/common/themes';
import { Provider as OvermindProvider } from 'overmind-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './app';
import './main.css';
import { overmind } from './overmind';

overmind.initialized.then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <OvermindProvider value={overmind}>
        <ThemeProvider theme={themes['dark']}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </OvermindProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
