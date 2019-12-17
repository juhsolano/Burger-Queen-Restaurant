import React from 'react';
import Lounge from './pages/Lounge';
import Kitchen from './pages/Kitchen';

//fazer rota e instalar o router

const App = () => {
  if (window.location.pathname === '/kitchen') {
    return (
      <Kitchen />
    );
  }
  return (
    <Lounge />
  );
};

export default App;