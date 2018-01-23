import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import List from './pages/list';

const Routes = () => (
  <div style={{ margin: '20px auto' }}>
    <Route exact path="/" component={Home} />
    <Route exact path="/list" component={List} />
  </div>
);

export default Routes;
