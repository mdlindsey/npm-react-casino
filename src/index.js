import React from 'react';
import ReactDOM from 'react-dom';
import { Route }  from 'react-router';
import { Switch, BrowserRouter } from 'react-router-dom';
// containers
// import Home from './containers/Home';
import Poker from './containers/Poker';
// render app
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route path="/demo/pepper" render={inheritedProps => <GameTable />} /> */}
      <Route render={props => <Poker />} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
