import React, { Component } from 'react';
import "./Nav.css";
import {Link} from 'react-router-dom';
import ls from '../ls.jpg'
class Nav extends Component {
  constructor(props){
    super(props);
    this.state={isTop: true, isHovered:false,height: props.height};
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.handleScroll(isTop);
      }
    });
  }
    componentWillMount(){
      this.setState({height: window.innerHeight + 'px'});
    }


  handleScroll(isTop) {
    this.setState({ isTop });
  }
    render() {
      const navStatus =this.state.isTop?'nav': 'nav myPurple';
      // const itemStatus = this.state.isHovered?'nav-item': 'nav-item myPurple';
      // console.log(this.state.height)
    return(

    <div className={navStatus} onScroll={(e)=>{this.handleScroll(e);}}>

      
        <img src={ls} width='96px'/>
        <Link to="/Artist" className="nav-item hvr-float-shadow">Artist</Link>
        <Link to="/Music" className="nav-item hvr-float-shadow">Music</Link>
        <Link to="/Event" className="nav-item hvr-float-shadow">Event</Link>
        <Link to="/Shop" className="nav-item hvr-float-shadow">Shop</Link>
      </div>
    )
  }
}

export default Nav;
