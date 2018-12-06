import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Collapse, Container, HamburgerToggler } from 'mdbreact';

class NavbarComp extends Component {

  state = {
    collapse1: false,
    collapseID: ''
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }

  render() {
    return (
      <Container>
        <Router>
            <Navbar color="amber lighten-4" style={{marginTop: '20px'}} light>
              <Container>
                <NavbarBrand>
                 Navbar
                </NavbarBrand>
                <HamburgerToggler color="#d3531a" id="hamburger1" onClick={() => this.toggleSingleCollapse('collapse1')} />
                <Collapse isOpen={this.state.collapse1} navbar>
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
        </Router>
      </Container>
    );
  }
}

export default NavbarComp;