import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup,} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 
class Carosell extends React.Component {

  

    
  render() {

   
    const children =  React.Children.toArray(this.props.children) 

    return (
      <CarouselProvider
        naturalSlideWidth={1000}
        naturalSlideHeight={600}
        totalSlides={React.Children.count(this.props.children)}
      >
        <Slider>
          {children.map((img, index) => {
            return <Slide index={index}>{img}</Slide>
          })}
        </Slider>
        <DotGroup/>
      </CarouselProvider>
    );
  }
}

export default Carosell;

