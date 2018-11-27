import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarPage from './components/NavbarPage'
import FooterPage from './components/FooterPage'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Careers from './pages/Careers'
import Contact from './pages/Contact'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavbarPage />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/careers" component={Careers} />
            </Switch>
            <FooterPage />
          </div>       
        </Router>

      </div>
    );
  }
}

export default App;
