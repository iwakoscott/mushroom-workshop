import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, PartOne, PartTwo } from '../screens';

export function App(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/part-one" component={PartOne} />
      <Route path="/part-two" component={PartTwo} />
    </Switch>
  );
}
