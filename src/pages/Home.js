import React, { Component } from 'react';
import CarouselPage from '../components/CarouselPage'
import MagazinePage from '../sections/MagazinePage'

class Home extends Component {

    render() {
        return (
            <div>
                <CarouselPage />
                <MagazinePage />
            </div>
        )
    }

}
export default Home