import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="/" className=" ">
          {" "}
          <img
            src="https://latarjetadelacaja.com/wp-content/uploads/2022/07/logo_caja.png"
            alt="Logo Caja Popular de Ahorros"
          ></img>
        </Navbar.Brand>
        <Nav className="col-sm-12 col-lg-2">
          <NavDropdown title="Usuario" id="basic-nav-dropdown" className="fs-3 fw-bold">
            <NavDropdown.Item href="#action/3.1">
              Iniciar sesion
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Cerrar sesion
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
