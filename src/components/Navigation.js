import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import pic6v3 from '../assets/pic6v3.PNG'

const Navigation = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
    <div className="nav-container" style={{position: "sticky", top:"0"}}>
        <Navbar color="dark" light>
        <NavbarBrand href="/" className="mr-auto" style={{margin:"0",color: "white",}}><img style={{margin:"0 0 2% 2%", width: "35%", height: "auto"}} src={pic6v3} alt=""/></NavbarBrand>
        
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <div className="nav-item-container">
                        <NavItem className="nav-item-item">
                            <Link to="/" style={{color: "white",}}>Log In</Link>
                        </NavItem>
                        <NavItem className="nav-item-item">
                            <Link to="/" style={{color: "white",}}>Sign Up</Link>
                        </NavItem>
                        <NavItem className="nav-item-item">
                            <Link to="/" style={{color: "white",}}>Dashboard</Link>
                        </NavItem>
                        <NavItem className="nav-item-item">
                            <Link to="/" style={{color: "white",}}>What is 'How-To'?</Link>
                        </NavItem>
                    </div>
                </Nav>
            </Collapse>

        </Navbar>
    </div>
)};

export default Navigation;