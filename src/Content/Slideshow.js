import React, { Component } from 'react';
import "./Slideshow.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import Img1 from '../img/edm1.png';
import Img2 from '../img/fan1.png';
import Img3 from '../img/fan2.png';
import Img4 from '../img/Window.JPG';


const items = [
  {
    src: Img1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: Img2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: Img3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: Img4,
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
];

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className='slides' />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} className = 'rounded-0' />
        {slides}
      </Carousel>
    );
  }
}


export default Slideshow;