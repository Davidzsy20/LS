import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js';
import Slideshow from './Slideshow.js';
import {Link} from 'react-router-dom';

class Music extends Component {
    render() {
    return(
    <div height='1000px'>
          <Nav/>
          <div></div>
    
        <Footer/>
    </div>
    )
  }
}

export default Music;