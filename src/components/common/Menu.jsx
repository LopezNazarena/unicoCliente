import React from "react";
import { Navbar, Container } from "react-bootstrap";


const Menu = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand>
        
        </Navbar.Brand>
        <Navbar.Brand href="/" className="fs-1">
          Cliente Unico
        </Navbar.Brand>{" "}
      </Container>
    </Navbar>
  );
};

export default Menu;
