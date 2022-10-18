import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer>
    <Row>
      <Col>
        Lunch
        <hr/>
        Monday-Friday: 11:am - 2:30pm<br/>
        Saturday-Sunday: Not open
      </Col>
      <Col>
        Bar
        <hr/>
        Monday-Friday: 11:am - 2:30pm<br/>
        Saturday-Sunday: Not open
      </Col>
      <Col>
        Dinner
        <hr/>
        Monday-Friday: 11:am - 2:30pm<br/>
        Saturday-Sunday: Not open
      </Col>
    </Row>
  </footer>
)

export default Footer;
