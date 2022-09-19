import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Address</Nav.Link>
          <Nav.Link href="#pricing">City</Nav.Link>
        </Nav>
        {/* <Nav>
          <Link to ="/">Home</Link>
          <Link to ="/address">Address</Link>
          <Link to ="/city">City</Link>
        </Nav> */}
      </Container>
    </Navbar>
  );
};

export default Header;
