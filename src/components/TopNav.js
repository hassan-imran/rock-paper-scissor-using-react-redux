import Button from 'react-bootstrap/Button';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const TopNav = () => {
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Outplay AI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="me-2">
            <Navbar.Text><Link to="/"><Button>Play Rock Paper</Button></Link></Navbar.Text>
          </Nav>
          <Nav className="me-2">
            <Navbar.Text><Link to="/about"><Button variant='outline-light'>About</Button></Link></Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav