import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import Afterparty from '../img/aftermovie.webm';
import Afterparty2 from '../img/aftermovie.mp4';
// import Slideshow from './Slideshow.js';


class Event extends Component {
    render() {
    return(
    <div className='event'>
          <Nav/>
          <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop >
          <source src={Afterparty2} type='video/mp4'/>
            <source src={Afterparty} type='video/webm'/>
            Your Browser is not suported!
            </video>
          </div >
       <div className="bg-video__footer">
       <Footer/>
        </div>
    </div>
    )
  }
}

export default Event;