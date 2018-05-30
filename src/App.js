import React, { Component } from 'react';
import Logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav.js'
import Footer from './Footer/Footer.js';
import Slideshow from './Content/Slideshow.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Slideshow/>
        <div className='selector'></div>
        <Footer/>
      </div>
    );
  }
}

export default App;
