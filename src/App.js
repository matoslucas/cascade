import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Router, Route, Switch, Redirect, } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import NavbarPage from './components/NavbarPage'
import FooterPage from './components/FooterPage'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Services from './pages/Services'
import LegacyFarmsProject from './pages/LegacyFarmsProject'

import ReactGA from 'react-ga'

const history = createBrowserHistory()
ReactGA.initialize('UA-129885689-1');
history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
  console.log(action, location.pathname, location.state);
});


class App extends Component {

  componentDidMount() {
   

}

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <NavbarPage />
            <Switch>
              
              <Route exact strict path="/" render={({location}) => {
                    if (location.pathname === window.location.pathname) {
                        return <Redirect to="/home" />;
                    }
                    return null;
                }} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/careers" component={Careers} />
              <Route path="/legacyfarms" component={LegacyFarmsProject} />
              
            </Switch>
            <FooterPage />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
