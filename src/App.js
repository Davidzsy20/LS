import React, { Component } from 'react';
import Logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Nav from './Nav/Nav.js'
import Footer from './Footer/Footer.js';
import Slideshow from './Content/Slideshow.js';
import logo from './logo.svg';
import {HashRouter, Route,Switch} from 'react-router-dom'
import Music from './Content/Music';
import Home from './Content/Home';
import Artist from './Content/Artist';
import Events from './Content/Event';
import Shop from './Content/Shop';


// import faStyles from 'font-awesome/css/font-awesome.css'
class App extends Component {

  render() {
    const baseUrl = process.env.PUBLIC_URL
    console.log(baseUrl);
    return (
        <Switch>
         <Route exact={true} path='/' component={Home}/>
        <Route  path='/Music' component={Music}/>
        <Route path='/Artist' component={Artist}/>
        <Route path='/Event' component={Events}/>
        <Route path='/Shop' component={Shop}/>

        </Switch>
    );
  }
}

export default App;
