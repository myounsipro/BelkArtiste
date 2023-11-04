

import React, { Component } from 'react'; 
import { BrowserRouter as Router,Routes, Route, Link  } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Footer from './components/footer/Footer';

class App extends Component { 
  render() { 
      return (
          <div className="App"> 
               <Home/>
               <About/>
               <Contact/>
               <Footer/>
          </div>
  ); 
  } 
} 
    
  export default App;