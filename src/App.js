import React, { Component } from 'react';

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
import ParkEstatesProject from './pages/ParkEstatesProject'

import withTracker from './withTracker';

const history = createBrowserHistory()


class App extends Component {

  componentDidMount() {


  }

  render() {

    let showMenuAndFooter = true
    if (
        window.location.pathname === '/legacyfarms' 
        || window.location.pathname === '/parkestates'
    ) {
      showMenuAndFooter = false
    }

    return (
      <div className="App">
        <Router history={history}>
          <div>
            {showMenuAndFooter ? <NavbarPage /> : null}

            <Switch>

              <Route exact strict path="/" render={({ location }) => {
                if (location.pathname === window.location.pathname) {
                  return <Redirect to="/home" />;
                }
                return null;
              }} />
              <Route path="/home" component={withTracker(Home)} />
              <Route path="/about" component={withTracker(About)} />
              <Route path="/services" component={withTracker(Services)} />
              <Route path="/projects" component={withTracker(Projects)} />
              <Route path="/contact" component={withTracker(Contact)} />
              <Route path="/careers" component={withTracker(Careers)} />
              <Route path="/legacyfarms" component={withTracker(LegacyFarmsProject)} />
              <Route path="/parkestates" component={withTracker(ParkEstatesProject)} />

            </Switch>
            {showMenuAndFooter ? <FooterPage /> : null}

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
