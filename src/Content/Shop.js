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
          <span className='shopBanner-main'> Comming Soon</span>
          <span className='shopBanner-sub'> 敬请期待</span>
          </div>

          </div>
    </div>
    )
  }
}

export default Shop;