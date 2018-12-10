import React, { Component } from 'react';

// import ParallaxSample from '../sections/ParallaxSample'
import ParallaxComp from '../components/ParallaxComp'

class LegacyFarmsProject extends Component {

    render() {
        const data = [
           // stage  0
            {
                image: {
                    stage: 0,
                    next:1,
                    src: require('../assets/img/projects/legacyFarms/Legacy_Farms_-800x600.jpg')
                }
            },
            {
                box: {
                    stage: 0,
                    next: 1,
                    title: 'LEGACY FARMS',
                    text: "Utah Valley’s top-selling community, is a hand-crafted, 35-foot wooden water tower — the remarkable entry monument to D.R. Horton’s new master-planned community in Saratoga Springs.",
                }
            },
            //stage 1
            {
                image: {
                    stage: 1,
                    next:2,
                    src: require('../assets/img/projects/legacyFarms/Clover_Legacy_188-1.jpg')
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
                    next:0,
                    src: require('../assets/img/projects/legacyFarms/Clover_Legacy_188-2.jpg')
                }
            },
            {
                box: {
                    stage: 2,
                    next:0,
                    title: 'LEGACY FARMS',
                    text: "Utah Valley’s top-selling community, is a hand-crafted, 35-foot wooden water tower — the remarkable entry monument to D.R. Horton’s new master-planned community in Saratoga Springs.",
                }

            },
            
        ]
        return (
            <div>
                <ParallaxComp data={data} />
            </div>
        )
    }

}
export default LegacyFarmsProject