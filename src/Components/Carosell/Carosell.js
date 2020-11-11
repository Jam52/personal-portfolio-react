import React from 'react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './carosel.scss';

class Carosell extends React.Component {
  render() {
    const children = React.Children.toArray(this.props.children);

    const dots = children.map((child, index) => {
      return <Dot slide={index} />;
    });
    return (
      <CarouselProvider
        naturalSlideWidth={1000}
        naturalSlideHeight={500}
        totalSlides={React.Children.count(this.props.children)}
      >
        <Slider>
          {children.map((img, index) => {
            return <Slide index={index}>{img}</Slide>;
          })}
        </Slider>
        <div className="dot_container">{dots}</div>
      </CarouselProvider>
    );
  }
}

export default Carosell;
