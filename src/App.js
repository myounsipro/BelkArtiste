

import React, { Component } from 'react'; 
import { BrowserRouter as Router,Routes, Route, Link  } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";

class App extends Component { 
  render() { 
      return ( 
      <Router> 
          <div className="App"> 
              <ul className="App-header"> 
              <li> 
                  <Link to="/">Home</Link> 
              </li> 
              <li> 
                  <Link to="/about">About Us</Link> 
              </li> 
              <li> 
                  <Link to="/contact">Contact Us</Link> 
              </li> 
              </ul> 
          <Routes> 
                  <Route exact path='/' element={< Home />}></Route> 
                  <Route exact path='/about' element={< About />}></Route> 
                  <Route exact path='/contact' element={< Contact />}></Route> 
                  <Route exact path='/*' element={< Home />}></Route> 
          </Routes> 
          </div> 
      </Router> 
  ); 
  } 
} 
    
  export default App;