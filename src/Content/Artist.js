import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js';
import './Artist.css';
import GridExampleDividedNumber from './Cards/GridExampleDividedNumber.js'
import Slideshow from './Slideshow.js';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

class Artist extends Component {
    render() {
    return(
    <div className='artist__container'>
          <Nav/>
          <div className='artist__banner1 banner1'>
          <h1 id='Banner-centered' >Artist</h1>
          </div>
          <div className='contentArtist'>
          <GridExampleDividedNumber/>
          </div>

        <Footer/>
    </div>
    )
  }
}

export default Artist;