import React, { Component } from 'react';
import "./Footer.css";
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import soundcloud from '../img/soundcloud.svg';
import snap from '../img/snap.svg';
import youtube from '../img/youtube.svg';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
    return(
    <div className="Footer">
    <div className='socialMedia foot'>
<a href='https://www.google.com' className='hvr-float-shadow'>
<img src={facebook}/>
</a>
<a href='https://www.google.com' className='hvr-float-shadow'>
<img src={instagram} />
</a>
<a href='https://www.google.com' className='hvr-float-shadow'>
<img src={snap}/>
</a>
<a href='https://www.google.com' className='hvr-float-shadow'>
<img src={youtube}/>
</a>
<a href='https://www.google.com' className='hvr-float-shadow'>
<img src={snap}/>
</a>
</div>
<div className="subtitle foot">
<Link to="/Shop" >Shop</Link>
<Link to="/Shop" >Shop</Link>
<Link to="/Shop" >Shop</Link>
<Link to="/Shop" >Shop</Link>
  </div>
<div className="copyright foot">©2018. LoveSurvive.LLC All rights reserved.</div>
    </div>
    )
  }
}

export default Footer;