import React, { Component } from 'react';
import "./Footer.css";
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
    return(
    <div className="footer">
    <div className='footer__content'>
    <div className='footer__socialMedia'>
<a href='https://www.facebook.com/lovesurvivellc/' className='hvr-float-shadow'>
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g id="Facebook">
        <g data-name="&lt;Group&gt;" id="_Group_">
            <path d="M21,1.5H3A1.5,1.5,0,0,0,1.5,3V21A1.5,1.5,0,0,0,3,22.5h8.5v-8h-2v-3h2v-2a4,4,0,0,1,4-4h3v3h-3a1,1,0,0,0-1,1v2h4l-.5,3H14.5v8H21A1.5,1.5,0,0,0,22.5,21V3A1.5,1.5,0,0,0,21,1.5Z"
            data-name="&lt;Path&gt;" id="_Path_" fill="wheat" stroke="#303c42" strokeLinecap="round"
            strokeLinejoin="round" />
        </g>
    </g>
</svg>
</a>
<a href='https://www.instagram.com/love.survive/' className='hvr-float-shadow'>
<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <g id='Instagram'>
        <g data-name='&lt;Group&gt;' id='_Group_' fill='none' stroke='#303c42'
        strokeLinecap='round' strokeLinejoin='round'>
            <rect data-name='&lt;Path&gt;' height='21' id='_Path_' rx='5.48' ry='5.48'
            width='21' x='1.5' y='1.5' fill='wheat' />
            <circle cx='12' cy='12' data-name='&lt;Path&gt;' id='_Path_2' r='5.5'
            />
            <circle cx='18' cy='5' data-name='&lt;Path&gt;' id='_Path_3' r='0.5' />
        </g>
    </g>
</svg>
</a>
<a href='https://mp.weixin.qq.com/mp/profile_ext?action=home&amp;__biz=MzA5MzUxMDQ2OQ==&amp;scene=110#wechat_redirect' className='hvr-float-shadow'>
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' fill='wheat'>
    <path d='M 19 6 C 9.746094 6 2 12.359375 2 20.5 C 2 24.894531 4.292969 28.679688 7.835938 31.324219 L 5.179688 39.304688 L 13.472656 34.167969 C 15.1875 34.707031 17.082031 35 19 35 C 19.746094 35 20.472656 34.945313 21.195313 34.863281 C 23.378906 39.105469 28.328125 42 34 42 C 35.722656 42 37.316406 41.675781 38.796875 41.234375 L 45.644531 45.066406 L 43.734375 38.515625 C 46.3125 36.375 48 33.394531 48 30 C 48 23.789063 42.597656 18.835938 35.75 18.105469 C 34.398438 11.125 27.324219 6 19 6 Z M 19 8 C 26.308594 8 32.328125 12.351563 33.703125 18.011719 C 26.183594 18.148438 20 23.355469 20 30 C 20 31.019531 20.160156 32.003906 20.4375 32.941406 C 19.964844 32.980469 19.484375 33 19 33 C 17.101563 33 15.199219 32.710938 13.632813 32.15625 L 13.183594 32 L 8.820313 34.699219 L 10.1875 30.59375 L 9.5625 30.171875 C 6.082031 27.820313 4 24.445313 4 20.5 C 4 13.640625 10.65625 8 19 8 Z M 13 14 C 11.898438 14 11 14.898438 11 16 C 11 17.101563 11.898438 18 13 18 C 14.101563 18 15 17.101563 15 16 C 15 14.898438 14.101563 14 13 14 Z M 25 14 C 23.898438 14 23 14.898438 23 16 C 23 17.101563 23.898438 18 25 18 C 26.101563 18 27 17.101563 27 16 C 27 14.898438 26.101563 14 25 14 Z M 34 20 C 40.746094 20 46 24.535156 46 30 C 46 32.957031 44.492188 35.550781 42.003906 37.394531 L 41.445313 37.8125 L 42.355469 40.933594 L 39.105469 39.109375 L 38.683594 39.25 C 37.285156 39.71875 35.6875 40 34 40 C 27.253906 40 22 35.464844 22 30 C 22 24.535156 27.253906 20 34 20 Z M 29.5 26 C 28.699219 26 28 26.699219 28 27.5 C 28 28.300781 28.699219 29 29.5 29 C 30.300781 29 31 28.300781 31 27.5 C 31 26.699219 30.300781 26 29.5 26 Z M 38.5 26 C 37.699219 26 37 26.699219 37 27.5 C 37 28.300781 37.699219 29 38.5 29 C 39.300781 29 40 28.300781 40 27.5 C 40 26.699219 39.300781 26 38.5 26 Z'
    id='surface1' />
</svg>
</a>
</div>
<div className="footer__subtitles">
<Link to="/Shop" >Shop</Link>
<Link to="/Shop" >Event</Link>
<Link to="/Shop" >Contact</Link>
  </div>
<div className="footer__copyright">©2018. LoveSurvive.LLC All rights reserved.</div>
</div>
    </div>
    )
  }
}

export default Footer;