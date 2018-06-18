import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js';
// import './Shop.css';
import {Link} from 'react-router-dom';

class Shop extends Component {
    render() {
    return(
    <div className='shop__container'>
          <Nav/>
          <div className='shop__content'>
          <div className='shop__banner'>
          <span className='shop__banner--main'> Comming Soon</span>
          <span className='shop__banner--sub'> 敬请期待</span>
          </div>

          </div>
    </div>
    )
  }
}

export default Shop;