import React, { Component } from 'react';
import "./Nav.css";
import {Link} from 'react-router-dom';
import ls from '../ls.png'

class Nav extends Component {
  constructor(props){
    super(props);
    this.state={isTop: true, isHovered:false,height: props.height, width: props.width, mobile: false, burger: false};
    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleBurgerClick=this.handleBurgerClick.bind(this)
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.handleScroll(isTop);
      }
    });
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    this.setState({height: window.innerHeight + 'px'});
    //this component is different
    this.setState({width: window.innerWidth})
    if(window.innerWidth>600){
      this.setState({mobile:true})
    } else{
      this.setState({mobile:false})
    }

  };
    componentWillMount(){
     this.updateDimensions();
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }
  handleScroll(isTop) {
    this.setState({ isTop });
  }
  handleBurgerClick() {
    this.setState(prevState => ({
      burger: !prevState.burger
    }));
  }

    render() {
      const navStatus =this.state.isTop?'nav': 'nav myPurple';
      console.log(this.state.width)
      // const itemStatus = this.state.isHovered?'nav-item': 'nav-item myPurple';
      // console.log(this.state.height)
      const Burger = this.state.burger ? (
        <BurgerOn  onClick={this.handleBurgerClick} />
      ) : (
        <BurgerOff onClick={this.handleBurgerClick}/>
      );
      console.log(this.burger,'xxx')
      if(this.state.width<768) {

        return (
          <div className='nav'>
           {Burger}

           </div>
        )
      }
      else{
    return(
    <div className={navStatus} onScroll={(e)=>{this.handleScroll(e);}}>
    <div className='navItems'>
        <Link to="/"><img src={ls} className='logo'/></Link>
        <Link to="/Artist" className="nav-item hvr-float-shadow">Artist</Link>
        <Link to="/Music" className="nav-item hvr-float-shadow">Music</Link>
        <Link to="/Event" className="nav-item hvr-float-shadow">Event</Link>
        <Link to="/Shop" className="nav-item hvr-float-shadow">Shop</Link>
        </div>
      </div>
    )
  }
}
}

export default Nav;


function BurgerOff(props) {
  return (
     <div className='burger' onClick={props.onClick}><i className="fa fa-3x fa-bars" color='red'></i></div>
  )
}
function BurgerOn(props) {
  return (
    <div className ='burgerOn'>
     <div className='burger' onClick={props.onClick}><i className="fa fa-3x fa-times" color='red'></i></div>
     <div className='burgerOn-Links'>
     <Link to="/Artist" className="nav-item hvr-float-shadow">Artist</Link>
        <Link to="/Music" className="nav-item hvr-float-shadow">Music</Link>
        <Link to="/Event" className="nav-item hvr-float-shadow">Event</Link>
        <Link to="/Shop" className="nav-item hvr-float-shadow">Shop</Link>
        </div>
     </div>
  )
}