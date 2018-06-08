import React, { Component } from 'react';
import Logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import Nav from './Nav/Nav.js'
import Footer from './Footer/Footer.js';
import Slideshow from './Content/Slideshow.js';
import logo from './logo.svg';
import {HashRouter as Router, Route} from 'react-router-dom'
import Music from './Content/Music';
import Home from './Content/Home';
// import faStyles from 'font-awesome/css/font-awesome.css'
class App extends Component {
  render() {
    return (
      <div className="App">

         <Route exact={true} path='/' component={Home}/>
        <Route exact={true} path='/Music' component={Music}/>

      </div>
    );
  }
}

export default App;
