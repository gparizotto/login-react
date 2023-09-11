import './Footer.css';
import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer">
      <span>
        Desenvolvido com <i className="fa fa-heart text-danger"></i> por{' '}
        <strong>
          Gabriel <span className="text-danger">Parizotto</span>
        </strong>
      </span>
    </footer>
  );
};

export default Footer;
