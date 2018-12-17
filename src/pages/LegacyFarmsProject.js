import React, { Component } from 'react';

// import ParallaxSample from '../sections/ParallaxSample'
import ParallaxComp from '../components/ParallaxComp'

class LegacyFarmsProject extends Component {

    componentDidMount() {
        var ee = require('../data/legacyFarmsData.json')
        console.log('componentDidMount', ee)

        this.loadData(ee)

    }

    loadData(url) {

        fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    console.log(response)
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }

    render() {

        const images = [
            require('../assets/img/projects/legacyFarms/Legacy_Farms.jpg'),
            require('../assets/img/projects/legacyFarms/Clover_Legacy_188-1.jpg'),
            require('../assets/img/projects/legacyFarms/Clover_Legacy_188-2.jpg'),
        ]

        const data = [
            // stage  0
            {
                image: {
                    stage: 0,
                    next: 1,
                    src: images[0]
                }
            },
            {
                box: {
                    stage: 0,
                    next: 1,
                    title: 'LEGACY FARMS',
                    text: "As a confident partner we have work with more than 800 homes builded by D.R. Horton company. Located at Saratoga Springs wich is the Utah Valley’s top-selling community.",
                }
            },
            //stage 1
            {
                image: {
                    stage: 1,
                    next: 2,
                    src: images[1]
                }
            },
            {
                box: {
                    stage: 1,
                    next: 2,
                    title: 'LEGACY FARMS',
                    text: "Utah Valley’s top-selling community, is a hand-crafted, 35-foot wooden water tower — the remarkable entry monument to D.R. Horton’s new master-planned community in Saratoga Springs.",
                }
            },
            // stage 2
            {
                image: {
                    stage: 2,
                    next: 0,
                    src: images[2]
                }
            },
            {
                box: {
                    stage: 2,
                    next: 0,
                    title: 'LEGACY FARMS',
                    text: "Utah Valley’s top-selling community, is a hand-crafted, 35-foot wooden water tower — the remarkable entry monument to D.R. Horton’s new master-planned community in Saratoga Springs.",
                }

            },

        ]
        return (
            <div>
                <ParallaxComp data={data} images={images} />
            </div>
        )
    }

}
export default LegacyFarmsProject