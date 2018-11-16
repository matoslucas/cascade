import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

// import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        backgroundColor: '#fff',
    },
    title: {
            textAlign: 'center',
            color: '#333',
            textTransform: 'uppercase',
            fontSize: '0.75em',   
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: 'solid 1px #00aae6',
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
    }

};

class Home extends Component {
    render() {
        const { classes } = this.props;
        const legendStyle = {
            display: 'flex',
            backgroundColor: 'transparent',
            opacity: 1,
            fontSize: '4em',
            alignItems: 'center',
            justifyContent: 'center'
        }


        return (
            <div>

                <Carousel infiniteLoop={true} autoPlay={true}>
                    <div>
                        <img alt="casa 1" src="https://firebasestorage.googleapis.com/v0/b/cascade-build.appspot.com/o/casa1.jpg?alt=media&token=c80e1a6c-33f2-47ce-98de-cd5eaf5eabae" />
                        <div className="legend" style={legendStyle} >Stucco</div>
                    </div>
                    <div>
                        <img alt="casa 2" src="https://firebasestorage.googleapis.com/v0/b/cascade-build.appspot.com/o/casa2.jpg?alt=media&token=7a8682c5-af89-4f9e-991e-179725720f43" />
                        <div className="legend" style={legendStyle} >Stone</div>
                    </div>
                    <div>
                        <img alt="casa 3" src="https://firebasestorage.googleapis.com/v0/b/cascade-build.appspot.com/o/casa3.jpg?alt=media&token=563bd9d1-6671-476e-8225-9113ddca1815" />
                        <div className="legend" style={legendStyle} >Brick</div>
                    </div>
                </Carousel>

                <br />

                <Card className={classes.card}>
                    <CardHeader
                        title={
                            <div className={classes.header}>
                                <span className={classes.title}>
                                    At Cascade, your exterior project is in good hands.
                                </span>
                            </div>
                        }

                    />
                    <CardContent className={classes.box}>
                        <p>
                            We partner with our clients to give them exactly the look they envision with professional guidance and execution.
                            Because we work directly with you, you’ll never have to worry about having your vision supplanted with another’s.
                            You are our focus, and your success is our success.
                            Call us today and get the look you want with the service you want.
                        </p>
                    </CardContent>
                    <CardActions className={classes.box}>
                        <Button size="small" color="primary">
                            Looking to work for a company that you can grow with?
                        </Button>
                        <Button variant="outlined" color="primary" >
                            Contact
                        </Button>

                    </CardActions>
                </Card>
                <br />

                <Card className={classes.card}>
                    <CardHeader
                        title={
                            <div className={classes.header}>
                                <span className={classes.title}>
                                    The Cascade Way
                                </span>
                            </div>
                        }
                    />
                    <CardContent className={classes.box}>
                        <p>
                            We are building the legacy buildings of tomorrow,
                            the designs that future generations will look back on for inspiration.
                            We believe the only way to give them something worth looking at is by working together:
                            you have the vision, and we have the know-how.
                            Our estimators will work with you to create efficient and durable buildings that perform to expectations,
                            all while keeping within budget.
                            We’re continuously innovating and finding better ways to design and build.
                            We’re cutting costs and waste while improving quality and aesthetics. Let’s get started.
                        </p>
                    </CardContent>
                    <CardActions className={classes.box}>
                        <Button size="small" color="primary">
                            Looking to work for a company that you can grow with?
                        </Button>
                        <Button variant="outlined"  color="primary">
                            Contact
                        </Button>

                    </CardActions>
                </Card>
               
            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
