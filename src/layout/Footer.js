import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    MuiDivider: {
        backgroundColor: '#ccc',
    },
    MuiListItemText: {
        display: 'flex',
        alignItems: 'center',
    }
});

class Footer extends Component {
    render() {
        const { classes } = this.props;
        const anchorStyle = {
            textDecoration: 'none',
            color: '#fff',
        }
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#333'
            }}>
                <List component="nav" style={{ width: '50%' }}>
                    <ListItem button={false} component="div">
                        {this.props.children}
                    </ListItem>

                    <ListItem button={false} component="div">
                        <div style={{
                            color: '#fff',
                            textAlign: 'justify',
                            fontSize: 'x-small'
                        }}>
                            We are building the legacy buildings of tomorrow,
                            the designs that future generations will look back on for inspiration.
                            We believe the only way to give them something worth looking at is by working together:
                            you have the vision, and we have the know-how.
                   </div>
                    </ListItem>

                </List>


                <List component="nav" style={{ width: '50%' }}>
                    <ListItem button={false} component="div">
                        <div style={{
                            display: 'flex',
                            color: '#fff',
                            flexDirection: 'column',

                        }}>
                            <a style={anchorStyle} target="_blank" rel="noopener noreferrer"
                                href="https://www.google.com/maps/dir/?api=1&destination=352+Gold+Tip+Dr+OREM+UT+84058">

                                <span>
                                    Contact Us
                            </span>
                                <br />
                                <span style={{ fontSize: 'x-small' }}>
                                    352 Gold Tip Drive, Orem, UT 84058
                            </span>
                            </a>
                        </div>
                    </ListItem>
                    <Divider className={classes.MuiDivider} />
                    <ListItem button>
                        <ListItemText className={classes.MuiListItemText} primary="Phone:" secondary=" (801) 980-3393" />
                    </ListItem>

                    <Divider className={classes.MuiDivider} />
                    <ListItem button>
                        <ListItemText className={classes.MuiListItemText} primary="Fax:" secondary="(801) 881-8100" />
                    </ListItem>
                    <Divider className={classes.MuiDivider} />
                    <ListItem button={false} component="div">
                        <div style={{
                            display: 'flex',
                            color: '#fff',

                        }}>
                            <a style={anchorStyle} target="_blank" rel="noopener noreferrer"
                               href="mailto:info@cascade.build?Subject=Contact"
                               >

                                <span>
                                    Email:                             
                                    info@cascade.build
                            </span>
                            </a>
                        </div>
                    </ListItem>
                </List>

            </div>

        )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
