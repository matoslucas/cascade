import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {
    Button,
    Fa,
} from 'mdbreact';

const styles = theme => ({
    card: {
        maxWidth: 800,
        margin: 10,
    },
    content:{
        height: 220,
    },
    actions: {
        justifyContent: 'center'
    },
    media: {
        height: 140,
        paddingTop: '56.25%', // 16:9
    },
    grey: {
        fontFamily: 'Cabin Sketch',
        color: '#9e9e9e'
    },
    cyan: {
        fontFamily: 'Cabin Sketch',
        color: '#00bcd4'
    },
    red: {
        fontFamily: 'Cabin Sketch',
        color: '#f44336'
    },
    green: {
        fontFamily: 'Cabin Sketch',
        color: '#4caf50'
    },
    orange: {
        fontFamily: 'Cabin Sketch',
        color: '#ff9800'
    }
});


class ServiceCard extends React.Component {

    render() {
        const { classes, img, alt, title, link, icon, content, color } = this.props
        
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title={alt}
                    />
                    <CardContent  className={classes.content}>
                    <h4 className={classes[color] }>
                        {icon}
                        {title}
                    </h4>
                        {content}
                        
                    </CardContent>
                </CardActionArea>
                {
                    link ?
                        <CardActions className="d-flex justify-content-end justify-content-lg-center">

                            <Button href={link} color="primary" size="sm">
                                Read more
                                <Fa icon="chevron-right" className="ml-1" /> </Button>
                        </CardActions>
                        : 
                        <CardActions className={classes.actions} > <div> &nbsp; </div></CardActions>
                }
            </Card>
        );
    }
}

ServiceCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceCard);
