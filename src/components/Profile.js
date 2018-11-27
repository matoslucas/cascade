import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import Icon from '@material-ui/core/Icon';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
// import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 350,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    icon: {
        margin: 1,
    },

    iconHover: {
        margin: 1,
        '&:hover': {
            color: red[800],
        },
    },

    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class Profile extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes, img, title, name, bio } = this.props
        let bios1, bios2 = ""
        let bios = []
        if (typeof bio.props.children === 'string') {
            bios = bio.props.children.split("|");
            bios1 = bios[0]
            bios2 = bios[1]
        }

        return (
            <Card className={classes.card}>

                <CardMedia
                    className={classes.media}
                    image={img}
                    title={name}
                />
                <CardContent>
                    <span style={{
                        fontSize: 22
                    }}>
                        {name}
                    </span>
                    <div className="font-weight-bold blue-text">{title}</div>
                    <Typography component="p" className="text-left">
                        {bios1}
                    </Typography>
                </CardContent>

                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Instagram">
                        <Icon className={classnames(classes.icon, 'fab fa-instagram')} />
                    </IconButton>
                    <IconButton aria-label="Twitter">
                        <Icon className={classnames(classes.icon, 'fab fa-twitter')} />
                    </IconButton>
                    {/*
                    <Button variant="extendedFab" aria-label="More">
                        More
                        <ExpandMoreIcon />
                    </Button>

                    */}
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography className="text-justify">
                            {bios2}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
