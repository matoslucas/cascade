import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Footer from "./layout/Footer";
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home'
import LocationCity from '@material-ui/icons/LocationCity'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import './App.css';
// import PrimarySearchAppBar from './comp/PrimarySearchAppBar'
import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#424242', contrastText: '#ffffff' },
    secondary: { main: '#42A5F5', contrastText: '#FAFAFA' }
  },
});


const drawerWidth = 260;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});


class App extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      mobileOpen: false,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle() {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;
    const CascadeLogo = (<img alt="Cascade Logo"
      style={{ height: 50 }}
      src="https://firebasestorage.googleapis.com/v0/b/cascade-build.appspot.com/o/logo.png?alt=media&token=718cbe52-2130-4242-8dea-cfd3f88fe490"
    />)
    const MenuContent = (
      <div>
        <div className={classes.toolbar} style={{ backgroundColor: '#333' }} >
          {CascadeLogo}
        </div>
        <Divider />

        <List>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
          </Link>

          <Link to="/home#about" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon><LocationCity /></ListItemIcon>
              <ListItemText primary={'About'} />
            </ListItem>
          </Link>


          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );


    return (
      <MuiThemeProvider theme={theme}>
      <Router>
        <div className={classes.root} >
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar} >
            <Toolbar style={{ backgroundColor: "#333" }}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Hidden smUp>
                {CascadeLogo}
              </Hidden>
              <Typography variant="h6" color="inherit" noWrap>

              </Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            {/* The implementation can be swap with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {MenuContent}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {MenuContent}
              </Drawer>
            </Hidden>
          </nav>
          <div style={{
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/cascade-build.appspot.com/o/bg.jpg?alt=media&token=eac61b26-e3ff-4388-ba84-31450be8e969)',
            backgroundColor: '#e8e8e8'
          }}>
            <main className={classes.content} >
              <div className={classes.toolbar} />
              
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  <Route component={PageNotFound} />
                </Switch>
             

            </main>
            <Footer>{CascadeLogo}</Footer>
          </div>

        </div>
        </Router>
      </MuiThemeProvider>

    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
