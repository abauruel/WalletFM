import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';
import Header from './components/header';
import history from './services/history';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
};
export default App;
