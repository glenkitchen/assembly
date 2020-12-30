import { NotFound } from '@assembly/common/components';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Content } from './elements';
import { Client } from './pages/Client';

const App = () => {
  return (
    <Container>
      <Content>
        <Switch>
          <Route exact path="/" component={Client} />
          <Route component={NotFound} />
        </Switch>
      </Content>
    </Container>
  );
};

export default App;
