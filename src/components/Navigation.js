import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import pic6v3 from '../assets/pic6v3.PNG'
import Styled from 'styled-components';


const StyledAnchor = Styled.a`
&:hover{
    cursor: pointer;
}
`


const Navigation = (props) => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
    <div className="nav-container" style={{position: "sticky", top:"0"}}>
        <Navbar color="dark" light>
            <StyledAnchor onClick={toggleNavbar}>
                <NavbarBrand className="mr-auto" style={{margin:"0",color: "white",}}><img style={{margin:"0 0 2% 2%", width: "35%", height: "auto"}} src={pic6v3} alt=""/></NavbarBrand>
            </StyledAnchor>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <div className="nav-item-container">
                        <a href="/login" onClick={!collapsed}>
                            <NavItem className="nav-item-item">
                                <Link to="/login" style={{color: "white",}}>Log In / Sign Up</Link>
                            </NavItem>
                        </a>
                        <a href="/dashboard" onClick={!collapsed}>
                            <NavItem className="nav-item-item">
                                <Link to="/dashboard" style={{color: "white",}}>Dashboard</Link>
                            </NavItem>
                        </a>
                        <a href="/marketing-ui" onClick={!collapsed}>
                            <NavItem className="nav-item-item">
                                <Link to="/marketing-ui" style={{color: "white",}}>What is 'How-To'?</Link>
                            </NavItem>
                        </a>
                    </div>
                </Nav>
            </Collapse>

        </Navbar>
    </div>
)};

export default Navigation;