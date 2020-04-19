import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const LoginPage = loadable(() => import('./pages/LoginPage'));
const SchedulePage = loadable(() => import('./pages/SchedulePage'));

function App() {
  return (
    <Switch>
      <Route path="/" component={SchedulePage} exact />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}

export default App;
