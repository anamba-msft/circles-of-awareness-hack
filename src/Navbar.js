import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

class NavigationBar extends Component {
    render() {
        return (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Register/Log In</Nav.Link>
      <Nav.Link href="#browse">Browse Clubs</Nav.Link>
      <NavDropdown title="My Book Clubs" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Club 1 Name</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Club 2 Name</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Club 3 Name</NavDropdown.Item>
          </NavDropdown>
    </Nav>
  </Navbar>
        )
    }
}

export default NavigationBar