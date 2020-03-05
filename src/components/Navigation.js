import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import pic6v3 from '../assets/pic6v3.PNG'
import Styled from 'styled-components';
import { NavLink } from "react-router-dom";


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
                            
                            <NavItem className="nav-item-item" onClick={!collapsed}>
                                <Link to="/login" style={{color: "white",}}>Log In / Sign Up</Link>
                            </NavItem>

                            <NavItem className="nav-item-item" onClick={!collapsed}>
                                <Link to="/dashboard" style={{color: "white",}}>Dashboard</Link>
                            </NavItem>

                            <NavItem className="nav-item-item" onClick={!collapsed}>
                                <a href="marketing-ui" style={{color: "white",}}>What is 'How-To'?</a>
                            </NavItem>
                    </div>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
)};

export default Navigation;