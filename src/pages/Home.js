import React, { Component } from 'react';
import CarouselPage from '../components/CarouselPage'
import FeaturesPage from '../sections/FeaturesPage'

class Home extends Component {

    render() {
        return (
            <div>
                <CarouselPage />
                <FeaturesPage />
            </div>
        )
    }

}
export default Home