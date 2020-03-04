import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavDropdown} from 'react-bootstrap'

import MainFrame from './SideBar'



function TopBar() {
    return <Navbar class = "navBar" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Bruno Romaniv da Silva</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Home</Nav.Link>
        <Nav.Link href="#pricing">About Me</Nav.Link>
        <NavDropdown title="Projects" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Nav>
        
        <a href="https://www.facebook.com/bruno.romaniv.1" target="_blank" class="fa fa-facebook"></a>
        <a href="https://www.linkedin.com/in/bruno-romaniv-38791182/" target="_blank" class="fa fa-linkedin"></a>
        <a href="https://github.com/brunoromaniv" target="_blank" class="fa fa-github"></a>
        <a href="https://www.instagram.com/bruno.romaniv/?hl=pt-br" target="_blank" class="fa fa-instagram"></a>
        
       
       
       
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  
  }
  
  export default TopBar;