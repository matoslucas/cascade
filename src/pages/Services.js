import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        backgroundColor: '#fff',
    },
    media: {
        height: 200
    },
    title: {
        textAlign: 'center',
        color: '#333',
        textTransform: 'uppercase',
        fontSize: '1em',
    },
    header: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
    }

};

class Services extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>

                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="https://firebasestorage.googleapis.com/v0/b/cascade-build.appspot.com/o/Siding01.jpg?alt=media&token=8708f49e-ac6f-47c3-af36-c64590e18523"
                        title="Siding picture"
                    />
                    <CardContent>
                        <div className={classes.header}>
                            <span className={classes.title}>
                                Siding
                            </span>
                        </div>
                        <p>
                            Your building should look good inside and out.
                            It should instill confidence in you and your clientele from the very first look and from every angle.
                        </p>
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>

                <br />

                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="https://firebasestorage.googleapis.com/v0/b/cascade-build.appspot.com/o/stucco02.jpg?alt=media&token=db1a785e-7503-40d6-af00-2a2d2d9206ef"
                        title="Stucco picture"
                    />
                    <CardContent>
                        <div className={classes.header}>
                            <span className={classes.title}>
                                Stucco
                                </span>
                        </div>
                        <p>
                            Stucco is a popular choice for a look that is even, consistent,
                            and low maintenance. It is naturally flame resistant and durable,
                            so it can take whatever the elements dish out and stay strong.
                            </p>
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                <br />

                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="https://firebasestorage.googleapis.com/v0/b/cascade-build.appspot.com/o/Brick01.jpg?alt=media&token=d44e20f1-00c4-4e92-b1e3-709946cb2cf4"
                        title="Brick picture"
                    />
                    <CardContent>
                        <div className={classes.header}>
                            <span className={classes.title}>
                                Brick
                            </span>
                        </div>
                        <p>
                            Brick lends your building a classic look that is hard to beat.
                            It plays on nostalgia for historic downtown businesses and small-town charm,
                            instilling trust at the first look.
                        </p>
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>

                <br />
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="https://firebasestorage.googleapis.com/v0/b/cascade-build.appspot.com/o/Stone02.jpg?alt=media&token=b8be6902-7ea9-4a46-b391-30bcff9d7492"
                        title="Stone picture"
                    />
                    <CardContent>
                        <div className={classes.header}>
                            <span className={classes.title}>
                                Stone
                            </span>
                        </div>
                        <p>
                            Stone has an inherent strength and durability that transfers directly to your building’s aesthetic.
                            We work with leading manufacturers to provide a large variety of both natural and manufactured stones.
                        </p>
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>

                <br />
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="https://firebasestorage.googleapis.com/v0/b/cascade-build.appspot.com/o/FS02.jpg?alt=media&token=371fa9c3-161a-47e3-a683-bf063e47c8f4"
                        title="Soffit & Fascia picture"
                    />
                    <CardContent>
                        <div className={classes.header}>
                            <span className={classes.title}>
                                Soffit & Fascia
                            </span>
                        </div>
                        <p>
                            Soffit and fascia work together to beautify your building and improve its performance. 
                            Soffit is placed on the underside of eaves and helps moderate your building’s ventilation.
                        </p>
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                <br />

                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="https://firebasestorage.googleapis.com/v0/b/cascade-build.appspot.com/o/GR01.jpg?alt=media&token=4e92ab8d-98bd-4d9a-ac99-bb308b3404c5"
                        title="Rain Gutters"
                    />
                    <CardContent>
                        <div className={classes.header}>
                            <span className={classes.title}>
                                Rain Gutters
                            </span>
                        </div>
                        <p>
                            Rain gutters are a necessity in utility, but they can also be an opportunity for style. 
                            We provide gutters in a variety of materials and colors.
                        </p>
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                <br />

            </div>
        )
    }
}

Services.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);
