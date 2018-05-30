import React, { Component } from 'react';
import "./Nav.css";
import {Link} from 'react-router-dom';
import ls from '../ls.jpg'
class Nav extends Component {
    render() {
    return(
      <div className="nav">
        <img src={ls} width='96px'/>
        <Link to="/Artist" className="nav-item">Artist</Link>
        <Link to="/Music" className="nav-item">Music</Link>
        <Link to="/Event" className="nav-item">Event</Link>
        <Link to="/Shop" className="nav-item">Shop</Link>
      </div>
    )
  }
}

export default Nav;
