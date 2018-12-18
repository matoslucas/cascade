import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <Carousel 
      activeItem={1} 
      length={6} 
      showControls={true} 
      showIndicators={true} 
      className="z-depth-1"
      style={{ fontFamily: 'Cabin Sketch', backgroundColor: '#d2d2d2'}}
      >
        <CarouselInner>
          <CarouselItem itemId="1">
            <View>
              <img className="d-block w-100" src={require('../assets/img/slide-stucco.jpg')} alt="Stucco" />
              <Mask overlay="black-strong" />
            </View>
            <CarouselCaption>
              <h1 className="display-3">Stucco</h1>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img className="d-block w-100" src={require('../assets/img/slide-siding.png')} alt="Siding" />
              <Mask overlay="black-strong" />
            </View>
            <CarouselCaption>
              <h1 className="display-3">Siding</h1>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img className="d-block w-100" src={require('../assets/img/slide-stone.jpg')} alt="Stone" />
              <Mask overlay="black-strong" />
            </View>
            <CarouselCaption>
              <h1 className="display-3">Stone</h1>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="4">
            <View>
              <img className="d-block w-100" src={require('../assets/img/slide-brick.jpg')} alt="Brick" />
              <Mask overlay="black-strong" />
            </View>
            <CarouselCaption>
              <h1 className="display-3">Brick</h1>
            </CarouselCaption>
          </CarouselItem>

          <CarouselItem itemId="5">
            <View>
              <img className="d-block w-100" src={require('../assets/img/slide-soffit-fascia.jpg')} alt="Soffit & Fascia" />
              <Mask overlay="black-strong" />
            </View>
            <CarouselCaption>
              <h1 className="display-4">Soffit & Fascia</h1>
            </CarouselCaption>
          </CarouselItem>

          <CarouselItem itemId="6">
            <View>
              <img className="d-block w-100" src={require('../assets/img/slide-rain-gutters.jpg')} alt="Rain Gutters" />
              <Mask overlay="black-strong" />
            </View>
            <CarouselCaption>
              <h1 className="display-4">Rain Gutters</h1>
            </CarouselCaption>
          </CarouselItem>

        </CarouselInner>
      </Carousel>
    );
  }
}

export default CarouselPage;