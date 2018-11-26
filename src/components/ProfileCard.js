import React from 'react';
import {
    CardImage, Card, CardBody,
    CardFooter, Fa, 
} from 'mdbreact';
import ReactCardFlip from 'react-card-flip';

class ProfileCard extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            flipped: false,
        };

        this.handleFlipping = this.handleFlipping.bind(this);
    }

    componentDidMount() {
        const { bio } = this.props
        if (typeof bio.props.children === 'string') {
            const bios = bio.props.children.split(". ");
            
        }       
    }

    handleFlipping() {
        this.setState({ flipped: !this.state.flipped });
    }

    render() {
        const { img, title, name, bio } = this.props
        let bios1, bios2 = ""
        let bios =[]
        if (typeof bio.props.children === 'string') {
            bios = bio.props.children.split("|");
            bios1 = bios[0]
            bios2 = bios[1]
        }  
        return (
            <div style={{ width: '100%', minHeight: 750 }}>
                <ReactCardFlip isFlipped={this.state.flipped}>
                    <Card key="front">
                        <CardImage
                            className="img-fluid"
                            
                            src={img}
                            top alt={name} />

                        <CardBody>

                            <span style={{
                                fontSize: 20
                            }}>
                                {name}
                            </span>

                            <p className="font-weight-bold blue-text">{title}</p>
                            <p style={{
                                textAlign: 'left',
                                minHeight: 150,
                                maxHeight: 150,
                                }}>
                                {bios1}
                            </p>
                            <a
                                href="#!"
                                className="rotate-btn"
                                data-card="card-1"
                                onClick={this.handleFlipping}
                            >
                                <Fa icon="repeat" /> read more ...
                            </a>


                            <CardFooter className="px-1 d-flex justify-content-around">
                                <i className="fab fa-facebook" />
                                <i className="fab fa-twitter" />
                                <i className="fab fa-instagram" />
                            </CardFooter>
                        </CardBody>
                    </Card>
                    <Card className="face back" key="back">
                        <CardBody>
                            <div style={{
                                maxHeight: 470,
                                minHeight: 470,
                                overflowY: 'auto',
                                textAlign: 'left',
                                fontSize: 14,
                            }}>
                                {bios2}
                            </div>

                            <hr />

                            <a
                                href="#!"
                                className="rotate-btn"
                                data-card="card-1"
                                onClick={this.handleFlipping}
                            >
                                <Fa icon="undo" /> Click here to rotate back
                        </a>
                        </CardBody>
                    </Card>

                </ReactCardFlip>
            </div>
        )
    }
}

export default ProfileCard;