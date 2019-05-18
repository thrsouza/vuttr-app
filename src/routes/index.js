import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import ToolsPage from '../pages/Tools';

import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={ToolsPage} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
