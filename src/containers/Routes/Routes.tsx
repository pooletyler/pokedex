import React, { FC } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Pokedex from '../Pokedex/Pokedex';

const Routes: FC<any> = () => {
  const history = createBrowserHistory();
  const path = (/#!(\/.*)$/.exec(window.location.href) || [])[1];
  if (path) {
    history.replace(path);
  }

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Pokedex} />
      </Switch>
    </Router>
  );
};

export default Routes;
