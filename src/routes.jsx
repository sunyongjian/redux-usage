import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home';

const Routes = () => (
  <div style={{ margin: '20px auto' }}>
    <Route exact path="/" component={Home} />
  </div>
);

export default Routes;
