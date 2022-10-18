import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

const TopBar = () => (
  <Navbar expand="lg" id="top-bar">
    <Container>
      <Nav className="justify-content-start">
        <Nav.Link>
          <img width="200" src="http://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/murphyslogowhite.png" />
        </Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link className="text-white">Home</Nav.Link>
        <Nav.Link className="text-white">About Us</Nav.Link>
        <Nav.Link className="text-white">St. Patrick's Day</Nav.Link>
        <Nav.Link className="text-white">To Go Ordering</Nav.Link>
        <Nav.Link className="text-white"><Facebook /></Nav.Link>
        <Nav.Link className="text-white"><Twitter /></Nav.Link>
        <Nav.Link className="text-white"><Instagram /></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default TopBar;
