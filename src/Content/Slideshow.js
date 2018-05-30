import React, { Component } from 'react';
import "./Slideshow.css";
import Img1 from '../img/Cat.JPG';
import Img2 from '../img/Cat2.JPG';
import Img3 from '../img/Walk.JPG';
import Img4 from '../img/Window.JPG';
import { Carousel } from 'react-responsive-carousel';
class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {Img: [Img1,Img2,Img3,Img4],curr:0};
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {

    }
    handleClick(e) {
    console.log(e.target.dataset.value)
    var id = e.target.dataset.value

     this.setState((prevState) => ({
     curr: id
}))
    }
    handleMouseEnter(e) {
       e.target.style.backgroundColor='whitesmoke'
    }
    handleMouseLeave(e) {
        e.target.style.backgroundColor=''
     }
    render() {
    return(
    <div className="Slideshow">
    <ul className='buts'>
     <li data-value='0'className='but' onClick={this.handleClick} onMouseEnter={(e)=> this.handleMouseEnter(e)} onMouseLeave={(e)=>this.handleMouseLeave(e)}></li>
     <li data-value='1' className='but' onClick={this.handleClick} onMouseEnter={(e)=> this.handleMouseEnter(e)} onMouseLeave={(e)=>this.handleMouseLeave(e)}></li>
     <li data-value='2' className='but' onClick={this.handleClick} onMouseEnter={(e)=> this.handleMouseEnter(e)} onMouseLeave={(e)=>this.handleMouseLeave(e)}></li>
     <li data-value='3' className='but' onClick={this.handleClick} onMouseEnter={(e)=> this.handleMouseEnter(e)} onMouseLeave={(e)=>this.handleMouseLeave(e)}></li>
     </ul>
    <div className="Imge">
     <img src ={this.state.Img[this.state.curr]} alt='as'/>
     </div>
    </div>
    )
  }
}
export default Slideshow;