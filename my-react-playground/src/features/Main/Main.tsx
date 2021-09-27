import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Others from '../Others/Others';
import TestCollection1 from '../TestCollection1/TestCollection1';

const Main = () => (
  /* The Switch decides which component to show based on the current URL. */
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/others" component={Others} />
    <Route exact path="/testcollection1" component={TestCollection1} />
  </Switch>
);

export default Main;
