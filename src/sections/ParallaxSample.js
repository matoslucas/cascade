import React from 'react'
import { Parallax } from 'react-spring/dist/addons'
import FooterPage from '../components/FooterPage'

import image1 from '../assets/img/projects/legacyFarms/Legacy_Farms_Community.jpg'
// Little helpers ...
//const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class ParallaxSample extends React.Component {
    render() {
       const { data } = this.props
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3} style={{ backgroundColor: '#333' }}>

                {/**Stage 2 */}
                <Parallax.Layer offset={2} speed={-0.4} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center',  }}>
                    <FooterPage />
                </Parallax.Layer>
                <Parallax.Layer
                    offset={2}
                    speed={-0}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => this.parallax.scrollTo(0)}>
                    
                </Parallax.Layer>

                {/**Stage 1 */}
                <Parallax.Layer offset={1} speed={1}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: 'url(' + require('../assets/img/projects/legacyFarms/Legacy_Farms_-800x600.jpg') + ')',
                        backgroundSize: 'cover',
                    }}
                />
                
                <Parallax.Layer
                    offset={1}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                    
                    <div style={{
                        margin: 10,
                        backgroundColor: '#fff',
                        padding: '0px 15px 0px 15px',
                        width: 262,
                        height: 220,
                    }}>
                        <span style={{
                            fontSize: '2em',
                            fontWeight: 600,
                        }}>LEGACY FARMS</span>
                        <p style={{ textAlign: 'left' }}>
                            Utah Valley’s top-selling community, is a hand-crafted,
                            35-foot wooden water tower — the remarkable entry monument to D.R. Horton’s
                            new master-planned community in Saratoga Springs.
                        </p>
                    </div>
                </Parallax.Layer>

                {/**Stage 0 */}

                <Parallax.Layer
                    offset={0}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: 'url(' + image1 + ')',
                        backgroundSize: 'cover',
                    }}>


                </Parallax.Layer>

                <Parallax.Layer
                    offset={0}
                    speed={1}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    }}
                >
                    <div style={{
                        margin: 10,
                        backgroundColor: '#fff',
                        padding: '0px 15px 0px 15px',
                        width: 262,
                        height: 220,
                    }}>
                        <span style={{
                            fontSize: '2em',
                            fontWeight: 600,
                        }}>LEGACY FARMS</span>
                        <p style={{ textAlign: 'left' }}>
                            Utah Valley’s top-selling community, is a hand-crafted,
                            35-foot wooden water tower — the remarkable entry monument to D.R. Horton’s
                            new master-planned community in Saratoga Springs.
                        </p>
                    </div>
                </Parallax.Layer>
            </Parallax>
        )
    }
}

export default ParallaxSample