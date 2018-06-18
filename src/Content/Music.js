import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js';
import './Music.css';
import { Embed } from 'semantic-ui-react'

class Music extends Component {
    render() {
    return(
    <div className= "music__container">
          <Nav/>
          <div className= "music__content">

    {/* <iframe width="560" height="349" src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen></iframe> */}
          </div>
        <Footer/>
    </div>
    )
  }
}

export default Music;