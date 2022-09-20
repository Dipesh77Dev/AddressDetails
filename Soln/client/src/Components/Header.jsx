import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" >
      <Container>
        {/* <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Address</Nav.Link>
          <Nav.Link href="#pricing">City</Nav.Link>
        </Nav> */}
        <Nav>
          <NavLink style = {{marginRight : 30}} to ="/">Home</NavLink>
          <NavLink style = {{marginRight : 30}} to ="/address">Address Detail</NavLink>
          <NavLink style = {{marginRight : 30}} to ="/city">City Detail</NavLink>
          <NavLink style = {{marginRight : 30}} to ="/addCity">Add City</NavLink>
          <NavLink style = {{marginRight : 30}} to ="/addAddress">Add Address</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

/*
<Nav>
  <Link to ="/">Home</Link>
  <Link to ="/address">AddressDetail</Link>
  <Link to ="/city">CityDetail</Link>
</Nav>

<a class = "nav-link" href = "/"> Home</a>
we can use as <Link to ="/">Home</Link>
*/