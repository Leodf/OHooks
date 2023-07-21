import React from 'react';
import Header from './components/Header';
import Produtores from './components/Produtores';

const Home: React.FC = () => {
  return <Produtores header={Header} />;
};

export default Home;
