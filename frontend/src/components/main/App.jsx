import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import Logo from '../template/Logo';
import Nav from '../template/Nav';
import Footer from '../template/Footer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Routes></Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
