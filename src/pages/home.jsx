import React from 'react';
import Count from '../component/count';

const Home = () => {
  return (
    <div>
      <img src={require('../logo.svg')} alt="logo" />
      <Count />
    </div>
  );
};

export default Home;
