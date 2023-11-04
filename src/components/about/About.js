import React from 'react'; 
import logo from './../../logo.svg';
import './About.css';

function About (){ 
    return (
        <div className="About">
          <header className="About-header">
            <img src={logo} className="About-logo" alt="logo" />
            <p>
              Belcaricature
            </p>
            <a
              className="About-link"
              href="https://www.facebook.com/people/belkacem-caricatures/100050603164367/"
              target="_target"
              rel="noopener noreferrer"
            >
              About Me
            </a>
          </header>
        </div>
      );
    }
  
export default About;
