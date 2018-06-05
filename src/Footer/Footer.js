import React, { Component } from 'react';
import "./Footer.css";
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import soundcloud from '../img/soundcloud.svg';
import snap from '../img/snap.svg';
import youtube from '../img/youtube.svg';
import {Link} from 'react-router-dom';

class Footer extends Component {

  handleMouseOver = () => {
    var facebook = document.getElementsByClassName('facebook');
    facebook[0].style.background='red';
  }
    render() {
    return(
    <div className="Footer">
    <div className='socialMedia foot'>
<a href='https://www.google.com'>
<img src={facebook}  onMouseOver/>
</a>
<img src={instagram} />
<img src={snap}/>
<img src={youtube}/>
<img src={snap}/>
</div>
<div className="sutitle foot">
<ul>
  <li>Shop</li>
  <li>Shop</li>
  <li>Shop</li>
  <li>Shop</li>
  </ul>
  </div>
<div className="copyright foot">©2018. LoveSurvive.LLC All rights reserved.</div>
    </div>
    )
  }
}

export default Footer;