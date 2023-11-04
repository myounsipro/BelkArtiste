import React from 'react'; 
import logo from './../../logo.svg';
import './Contact.css';

function Contact (){ 
    return (
        <div className="Contact">
          <header className="Contact-header">
            <img src={logo} className="Contact-logo" alt="logo" />
            <p>
              Belcaricature
            </p>
            <a
              className="Contact-link"
              href="https://www.facebook.com/people/belkacem-caricatures/100050603164367/"
              target="_target"
              rel="noopener noreferrer"
            >
              Contact Me
            </a>
          </header>
        </div>
      );
    }
export default Contact;
