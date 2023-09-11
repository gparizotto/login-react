import './App.css';
import React from 'react';

import Logo from '../template/Logo';
import Nav from '../template/Nav';
import Main from '../template/Main';
import Footer from '../template/Footer';

const App = (props) => {
  return (
    <div className="app">
      <Logo></Logo>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default App;
