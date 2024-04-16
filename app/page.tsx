import React from 'react';
import Home from './pages/home';
import Header from './components/header';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
