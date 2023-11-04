import React from 'react'; 
import logo from './../../logo.svg';
import './Footer.css';

function Footer (){ 
    return (
        <div className="Footer">
          <header className="Footer-header">
            <img src={logo} className="Footer-logo" alt="logo" />
            <p>
              Belcaricature
            </p>
            <a
              className="Footer-link"
              href="https://www.facebook.com/people/belkacem-caricatures/100050603164367/"
              target="_target"
              rel="noopener noreferrer"
            >
              Footer
            </a>
          </header>
        </div>
      );
    }
  
export default Footer;
