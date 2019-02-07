import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../screens';

export function App(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
