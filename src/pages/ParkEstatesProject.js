import React, { Component } from 'react';

// import ParallaxSample from '../sections/ParallaxSample'
import ParallaxComp from '../components/ParallaxComp'

class ParkEstatesProject extends Component {

    render() {
        
        const images = [
            require('../assets/img/projects/parkEstates/Edison_Traditinoal_at_Ivory_Ridge_1.jpg'),
            require('../assets/img/projects/parkEstates/Edison_Traditinoal_at_Ivory_Ridge_2.jpg'),
            require('../assets/img/projects/parkEstates/Edison_Traditinoal_at_Ivory_Ridge_3.jpg'),
          ]

        const data = [
           // stage  0
            {
                image: {
                    stage: 0,
                    next:1,
                    src: images[0]
                }
            },
            {
                box: {
                    stage: 0,
                    next: 1,
                    title: 'PARK ESTATES',
                    text: "Utah Valley’s top-selling community, is a hand-crafted, 35-foot wooden water tower — the remarkable entry monument to D.R. Horton’s new master-planned community in Saratoga Springs.",
                }
            },
            //stage 1
            {
                image: {
                    stage: 1,
                    next:2,
                    src: images[1]
                }
            },
            {
                box: {
                    stage: 1,
                    next: 2,
                    title: 'PARK ESTATES',
                    text: "Utah Valley’s top-selling community, is a hand-crafted, 35-foot wooden water tower — the remarkable entry monument to D.R. Horton’s new master-planned community in Saratoga Springs.",
                }
            },
            // stage 2
            {
                image: {
                    stage: 2,
                    next:0,
                    src: images[2]
                }
            },
            {
                box: {
                    stage: 2,
                    next:0,
                    title: 'PARK ESTATES',
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
export default ParkEstatesProject