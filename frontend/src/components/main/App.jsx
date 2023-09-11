import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import React from 'react';

import Logo from '../template/Logo';
import Nav from '../template/Nav';
import Home from '../home/Home';
import Footer from '../template/Footer';

const App = (props) => {
  return (
    <div className="app">
      <Logo></Logo>
      <Nav></Nav>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default App;
