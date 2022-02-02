import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./NavbarTop.scss"
const NavbarTop = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/tests/">Component tests</Link>
            <Link className="nav-link" to="/networkLayer/">Network</Link>
            <Link className="nav-link" to="/FormAffected/">Usuario</Link>
            <Link className="nav-link" to="/FormEmpresa/">Empresa</Link>
            <Link className="nav-link" to="/GetApiKey/">Get Api</Link>
            <Link className="nav-link" to="/DropOutRequest/">DropOut</Link>          
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
