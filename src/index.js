import React from 'react';
import ReactDOM from 'react-dom';
import { Route }  from 'react-router';
import { Switch, BrowserRouter } from 'react-router-dom';
// containers
import Home from './containers/Home';
import Poker from './containers/Poker';
import Pepper from './containers/Pepper';
// render app
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/demo/poker" render={inheritedProps => <Poker />} />
      <Route path="/demo/pepper" render={inheritedProps => <Pepper />} />
      <Route render={props => <Home />} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
