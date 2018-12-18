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
    content: {
        height: 200,
    },
    actions: {
        justifyContent: 'center'
    },
    media: {
        height: 140,
        paddingTop: '56.25%', // 16:9
    },
    blue: {
        fontFamily: 'Cabin Sketch',
        color: '#00aae6'
    },

});


class ProjectCard extends React.Component {

    render() {
        const { classes, img, alt, title, content, link } = this.props
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title={alt}
                    />
                    <CardContent className={classes.content}>
                        <h4 className={classes.blue}>
                            {title}
                        </h4>
                        {content}

                    </CardContent>
                </CardActionArea>
                {
                    link ?
                        <CardActions className={classes.actions}>

                            <Button href={link} color="indigo" size="sm">
                                <Fa icon="clone" className="left" /> View project</Button>
                        </CardActions>
                        : 
                        <CardActions className={classes.actions} > <div> &nbsp; </div></CardActions>
                }
            </Card>
        );
    }
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);
