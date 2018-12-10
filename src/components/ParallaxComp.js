import React from 'react'
import { Parallax } from 'react-spring/dist/addons'

class ParallaxComp extends React.Component {
    render() {
        const { data } = this.props
        // const length = data.length

        return (
            <div>
                <a href="/projects" target="_self" style={{
                    backgroundColor: '#333',
                    backgroundImage: 'url(' + require('../assets/img/logo.png') + ')',
                    backgroundSize: 200,
                    width: 200,
                    height: 60,
                    left: 'calc(50% - 100px)',
                    position: 'absolute',
                    zIndex: 100,
                }}>&nbsp;</a>
                <Parallax ref={ref => (this.parallax = ref)} pages={3} style={{ backgroundColor: '#333' }}>

                    {data && Array.isArray(data) ?
                        data.map((item, index) => {
                            console.log(item)
                            if (item && item.box) {

                                return (<Parallax.Layer
                                    offset={item.box.stage}
                                    key={index}
                                    speed={2}
                                    onClick={() => this.parallax.scrollTo(item.box.next)}
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
                                        }}>{item.box.title}</span>
                                        <p style={{ textAlign: 'left' }}>
                                            {item.box.text}
                                        </p>
                                    </div>
                                </Parallax.Layer>)

                            } else {
                                return (
                                    <Parallax.Layer offset={item.image.stage} speed={1} key={index}
                                        onClick={() => this.parallax.scrollTo(item.image.next)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundImage: 'url(' + item.image.src + ')',
                                            backgroundSize: '110%',
                                            height: '100vh'
                                        }}
                                    >
                                      
                                    </Parallax.Layer>
                                )
                            }

                        })
                        : null}

                </Parallax>
            </div>
        )
    }
}

export default ParallaxComp