import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import 'babel-polyfill';
import store from './store';
import App from './app';
import './index.less';

const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

if (module.hot) { // hmr necessary
  module.hot.accept();
}

render(<Root />, document.getElementById('root'));
