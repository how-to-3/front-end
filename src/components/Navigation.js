import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import pic6v3 from '../assets/pic6v3.PNG'
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledAnchor = Styled.a`
&:hover{
    cursor: pointer;
}
`


const Navigation = (props) => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
    <div className="nav-container" style={{backgroundColor:"#1C3144", position: "sticky", top:"0"}}>
        <Navbar color="dark" light>
            <StyledAnchor onClick={toggleNavbar}>
                <NavbarBrand className="mr-auto" style={{margin:"0",color: "white",}}><img style={{margin:"0 0 2% 2%", width: "35%", height: "auto"}} src={pic6v3} alt=""/></NavbarBrand>
            </StyledAnchor>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <div className="nav-item-container">
                            
                            <NavItem>
                                <NavLink><Link to="/login" onClick={toggleNavbar}>Log In / Sign Up</Link></NavLink>
                            </NavItem>

                            <NavItem className="nav-item-item" onClick={!collapsed}>
                                <NavLink><Link to="/dashboard" onClick={toggleNavbar}>Dashboard</Link></NavLink>
                            </NavItem>

                            <NavItem className="nav-item-item" onClick={!collapsed}>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">What is 'How-To'?</a>
                            </NavItem>
                    </div>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
)};

export default Navigation;