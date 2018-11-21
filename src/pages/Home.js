import React, { Component } from 'react';
import CarouselPage from '../components/CarouselPage'
import ProjectsPage from '../sections/ProjectsPage'
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