import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js';
import { Embed } from 'semantic-ui-react'
import Slideshow from './Slideshow.js';
import {Link} from 'react-router-dom';
console.log(Nav)
class Music extends Component {
    render() {
    return(
    <div>
          <Nav/>
          <div className='musicContent'>
          <Embed id='O6Xo21L0ybE'  source='youtube' />
          </div>
        <Footer/>
    </div>
    )
  }
}

export default Music;