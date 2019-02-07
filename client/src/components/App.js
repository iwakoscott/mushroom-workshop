import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, PartOne } from '../screens';

export function App(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/part-one" component={PartOne} />
    </Switch>
  );
}
