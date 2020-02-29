import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
    <div style={{position: "sticky", top:"0"}}>
        <Navbar color="dark" light>
        <NavbarBrand href="/" className="mr-auto" style={{color: "white",}}>*Insert Cool How-To Logo Here*</NavbarBrand>
        
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                        <NavItem>
                            <Link to="/" style={{color: "white",}}>Log In</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/" style={{color: "white",}}>Sign Up</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/" style={{color: "white",}}>Dashboard</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/" style={{color: "white",}}>What is 'How-To'?</Link>
                        </NavItem>
                </Nav>
            </Collapse>

        </Navbar>
    </div>
)};

export default Navigation;