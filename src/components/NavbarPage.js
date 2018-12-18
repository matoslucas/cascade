import React from "react";
import { NavLink } from 'react-router-dom'

import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavItem,
    // NavLink,
    // NavbarToggler,
    HamburgerToggler,
    Collapse,
    // FormInline,
    // Dropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    Media,
} from "mdbreact";

class NavbarPage extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { isOpen: false };
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        
        const linkStyle = {
            color: '#fff',
            margin: '5px',
            padding: '5px',
        }
        const tabStyle = {
            margin: '5px 0px'
        }
        return (

            <Navbar dark expand="md" style={{ backgroundColor: '#3f3f3f'}}>
                <NavbarBrand>
                    <Media left >
                        <Media object src={require('../assets/img/logo.png')} alt="Cascade logo" style={{ width: 200 }} />
                    </Media>
                </NavbarBrand>

                <HamburgerToggler id="hamburger1" className="navbar-toggler" onClick={this.toggleCollapse} right />
                <Collapse
                    isOpen={this.state.isOpen}
                    navbar
                >
                    <NavbarNav left>
                        <NavItem style={tabStyle}>
                            <NavLink activeClassName="activeTab" style={linkStyle} to="/home">Home</NavLink>
                        </NavItem>
                        <NavItem style={tabStyle}>
                            <NavLink activeClassName="activeTab" style={linkStyle} to="/about">About</NavLink>
                        </NavItem>
                        <NavItem style={tabStyle}>
                            <NavLink activeClassName="activeTab" style={linkStyle} to="/services">Services</NavLink>
                        </NavItem>

                        {/**
                        <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>
                                    <div className="d-md-inline">Services</div>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="#!">Stucco</DropdownItem>
                                    <DropdownItem href="#!">Siding</DropdownItem>
                                    <DropdownItem href="#!">Stone</DropdownItem>
                                    <DropdownItem href="#!">Brick</DropdownItem>
                                    <DropdownItem href="#!">Soffit & Fascia</DropdownItem>
                                    <DropdownItem href="#!">Rain Gutters</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                        */}

                        <NavItem style={tabStyle}>
                            <NavLink activeClassName="activeTab" style={linkStyle} to="/projects">Projects</NavLink>
                        </NavItem>

                        <NavItem style={tabStyle}>
                            <NavLink activeClassName="activeTab" style={linkStyle} to="/careers">Careers</NavLink>
                        </NavItem>

                        <NavItem style={tabStyle}> 
                            <NavLink activeClassName="activeTab" style={linkStyle} to="/contact">Contact</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarPage;