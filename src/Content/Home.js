import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js';
import Slideshow from './Slideshow.js';


class Home extends Component {
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

export default Home;