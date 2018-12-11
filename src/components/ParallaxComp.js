import React from 'react'
import { Parallax } from 'react-spring/dist/addons'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'



class ParallaxComp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            photoIndex: 0,
            isOpen: false,
        }
    }

    render() {
        const { data, images } = this.props
        const { photoIndex, isOpen } = this.state;

        return (
            <div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}

                <Parallax ref={ref => (this.parallax = ref)} pages={3} style={{
                    backgroundImage: 'url(' + require('../assets/img/Blueprints-for-house-1.jpg') + ')',
                    backgroundColor: '#333',
                    backgroundSize: 'cover',
                }}>

                    {data && Array.isArray(data) ?
                        data.map((item, index) => {
                            console.log(item)
                            if (item && item.box) {

                                return (<Parallax.Layer
                                    offset={item.box.stage}
                                    key={index}
                                    speed={2}
                                    onClick={() => this.parallax.scrollTo(item.box.next)}
                                    style={{ width: 0, }}>

                                    <div style={{
                                        bottom: 25,
                                        left: 18,
                                        position: 'absolute',
                                        backgroundColor: '#fff',
                                        padding: '0px 15px 0px 15px',
                                        width: 285,
                                        height: 210,
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
                                        onClick={() => this.setState({ isOpen: true })}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundImage: 'url(' + item.image.src + ')',
                                            backgroundSize: '110%',
                                            height: '100vh'
                                        }}
                                    >

                                        <a href="/projects" target="_self" style={{
                                            backgroundColor: '#333',
                                            backgroundImage: 'url(' + require('../assets/img/logo.png') + ')',
                                            backgroundSize: 200,
                                            width: 200,
                                            height: 60,
                                            bottom: 290,
                                            left: 'calc(50% - 100px)',
                                            position: 'absolute',
                                            zIndex: 100,
                                        }}>&nbsp;</a>

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