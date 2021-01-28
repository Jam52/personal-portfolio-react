import React from 'react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import classes from './Carousel.module.scss';

class Carousel extends React.Component {
  render() {
    const slides = this.props.urls.map((img, index) => {
      return (
        <Slide index={index}>
          {<img className={classes.img} src={img} alt=""></img>}
        </Slide>
      );
    });

    const dots = this.props.urls.map((url, index) => {
      return <Dot className="dot" slide={index} />;
    });
    return (
      <CarouselProvider
        isPlaying={true}
        interval={4000}
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={this.props.urls.length}
      >
        <div className={classes.slider}>
          <Slider>{slides}</Slider>
        </div>
        <div className={classes.dots}>{dots}</div>
      </CarouselProvider>
    );
  }
}

export default Carousel;
