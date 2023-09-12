import './Footer.css';
import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer">
      <span>
        A system, made with <i className="fa fa-heart text-danger"></i> by{' '}
        <strong>
          Gabriel <span className="text-danger">Parizotto</span>
        </strong>
      </span>
    </footer>
  );
};

export default Footer;
