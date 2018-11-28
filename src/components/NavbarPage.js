import React from "react";

import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavItem,
    NavLink,
    NavbarToggler,
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
        return (

            <Navbar dark expand="md" color="rgba-black-strong">
                <NavbarBrand>
                    <Media left >
                        <Media object src={require('../assets/img/logo.png')} alt="Cascade logo" style={{ width: 200 }} />
                    </Media>
                </NavbarBrand>
                <NavbarToggler
                    onClick={this.toggleCollapse}
                />
                <Collapse
                    id="navbarCollapse3"
                    isOpen={this.state.isOpen}
                    navbar
                >
                    <NavbarNav left>
                        <NavItem>
                            <NavLink to="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/services">Services</NavLink>
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

                        <NavItem>
                            <NavLink to="/projects">Projects</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink to="/careers">Careers</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/contact">Contact</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarPage;