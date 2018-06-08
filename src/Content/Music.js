import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js';
import Slideshow from './Slideshow.js';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

class Music extends Component {
    render() {
    return(
    <div >
          <Nav/>
       <Slideshow/>
        <Footer/>
    </div>
    )
  }
}

export default Music;