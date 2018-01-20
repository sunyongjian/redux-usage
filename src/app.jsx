import React from 'react';
import DevTools from 'redux-devtools';
import { Link } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  let devTools;
  // if (process.env.NODE_ENV !== 'production') {
  //   devTools = <DevTools />;
  // }
  return (
    <div>
      <ul>
        <li><Link to="/">/</Link></li>
      </ul>
      <Routes />
    </div>
  );
};

export default App;
