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

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
// import Facebook from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 200,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
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
          <Typography component="p">
            {bios1}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        <div className="d-flex justify-content-around" style={{padding: '0 0 15px 0'}}>
                                <i className="fab fa-facebook" />
                                <i className="fab fa-twitter" />
                                <i className="fab fa-instagram" />
                            </div>
          <IconButton aria-label="Add to favorites">
           
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
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
            <Typography>
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
