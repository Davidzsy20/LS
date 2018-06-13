import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js';
import './Shop.css';
import {Link} from 'react-router-dom';

class Shop extends Component {
    render() {
    return(
    <div className='shopContainer'>
          <Nav/>
          <div className='shopContent'>
          <div className='shopBanner'>
          <h1> Comming Soon.</h1>
          <h1> 敬请期待</h1>
          </div>

          </div>

        <Footer/>
    </div>
    )
  }
}

export default Shop;