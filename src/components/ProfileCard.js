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
        let bios = []
        if (typeof bio.props.children === 'string') {
            bios = bio.props.children.split("|");
            bios1 = bios[0]
            bios2 = bios[1]
        }
        return (
            <div style={{ width: '100%', minHeight: 500 }}>
                <ReactCardFlip isFlipped={this.state.flipped}>
                    <Card key="front">
                        <CardImage
                            className="img-fluid"

                            src={img}
                            top alt={name} />

                        <CardBody style={{ padding: '0 10px 0 10px' }}>
                            <span style={{
                                fontSize: 22
                            }}>
                                {name}
                            </span>
                            <div className="font-weight-bold blue-text">{title}</div>
                            <p onClick={this.handleFlipping} style={{
                                cursor: 'pointer',
                                textAlign: 'left',
                                minHeight: 85,
                                maxHeight: 85,
                                fontSize: 14,
                            }}>
                                {bios1}...
                            </p>
                            <div className="d-flex justify-content-around" style={{padding: '0 0 15px 0'}}>
                                <i className="fab fa-facebook" />
                                <i className="fab fa-twitter" />
                                <i className="fab fa-instagram" />
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="face back" key="back">
                        <CardBody onClick={this.handleFlipping}>
                            <div style={{
                                cursor: 'pointer',
                                maxHeight: 440,
                                minHeight: 440,
                                overflowY: 'auto',
                                textAlign: 'left',
                                fontSize: 14,
                            }}>
                                {bios2}
                            </div>
                        </CardBody>
                    </Card>

                </ReactCardFlip>
            </div>
        )
    }
}

export default ProfileCard;