import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">/</Link></li>
        <li><Link to="/list">list</Link></li>
      </ul>
      <Routes />
    </div>
  );
};

export default App;
