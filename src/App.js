import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarPage from './components/NavbarPage'
import FooterPage from './components/FooterPage'
import Home from './pages/Home'


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
            </Switch>
            <FooterPage />
          </div>       
        </Router>

      </div>
    );
  }
}

export default App;
