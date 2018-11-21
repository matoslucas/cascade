import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <Carousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
        <CarouselInner>
          <CarouselItem itemId="1">
            <View>
              <img className="d-block w-100" src={require('../assets/img/slide-stucco.jpg')} alt="Stucco" />
              <Mask overlay="black-strong" />
            </View>
            <CarouselCaption>
              <h1 className="display-3">Stucco.</h1>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img className="d-block w-100" src={require('../assets/img/slide-siding.png')} alt="Siding" />
              <Mask overlay="black-strong" />
            </View>
            <CarouselCaption>
              <h1 className="display-3">Siding.</h1>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img className="d-block w-100" src={require('../assets/img/slide-stone.jpg')} alt="Stone" />
              <Mask overlay="black-strong" />
            </View>
            <CarouselCaption>
              <h1 className="display-3">Stone.</h1>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="4">
            <View>
              <img className="d-block w-100" src={require('../assets/img/slide-brick.jpg')} alt="Brick" />
              <Mask overlay="black-strong" />
            </View>
            <CarouselCaption>
              <h1 className="display-3">Brick.</h1>
            </CarouselCaption>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    );
  }
}

export default CarouselPage;