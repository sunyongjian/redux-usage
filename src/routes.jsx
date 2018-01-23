import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import Poll from './pages/poll';

const Routes = () => (
  <div style={{ margin: '20px auto' }}>
    <Route exact path="/" component={Home} />
    <Route exact path="/polling" component={Poll} />
  </div>
);

export default Routes;
