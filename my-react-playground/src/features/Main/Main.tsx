import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Others from '../pages/Others/Others';
import TestCollection1 from '../pages/TestCollection1/TestCollection1';
import TestCollection1Add from '../pages/TestCollection1/TestCollection1Add/TestCollection1Add';

const Main = () => (
  /* The Switch decides which component to show based on the current URL. */
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/others" component={Others} />
    <Route exact path="/testcollection1" component={TestCollection1} />
    <Route exact path="/testcollection1/add" component={TestCollection1Add} />
  </Switch>
);

export default Main;
