import React, { FC } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Pokedex from '../containers/Pokedex/Pokedex';
import Pokeprofile from '../containers/Pokeprofile/Pokeprofile';

const Routes: FC<any> = () => {
  const history = createBrowserHistory();
  const path = (/#!(\/.*)$/.exec(window.location.href) || [])[1];
  if (path) {
    history.replace(path);
  }

  return (
    <Router history={history}>
      <Switch>
        <Route path="/pokedex" component={Pokedex} />
        <Route path="/pokemon/:pokemon" component={Pokeprofile} />
      </Switch>
    </Router>
  );
};

export default Routes;
