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
import {HashRouter, BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Music from './Content/Music';
import Home from './Content/Home';
import Artist from './Content/Artist';
import Event from './Content/Event';
import Shop from './Content/Shop';


// import faStyles from 'font-awesome/css/font-awesome.css'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
        

         <Route exact={true} path='/' component={Home}/>
        <Route  path={`${process.env.PUBLIC_URL}/Music`} component={Music}/>
        <Route path={`${process.env.PUBLIC_URL}/Artist`} component={Artist}/>
        <Route path={`${process.env.PUBLIC_URL}/Event`} component={Event}/>
        <Route path={`${process.env.PUBLIC_URL}/Shop`} component={Shop}/>
        </Switch>
      </Router>


      </div>
    );
  }
}

export default App;
