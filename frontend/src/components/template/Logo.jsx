import './Logo.css';
import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Logo = (props) => {
  return (<aside className="logo">
    <Link link to="/" className="logo">
      <img src={logo} alt="logo" />
    </Link>
  </aside>);
};

export default Logo;
