import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Container, Navbar, Nav , NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../../img/logo.png"
import "./NavbarTop.scss"


const NavbarTop = () => {
  const { store, actions } = useContext(Context);
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand> <img className="logoRaj" src={logo} alt="logo RAJ" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
          <Nav className="navbar">
            {!store.logged && <Link className="nav-link" to="/">Home</Link>}
            <NavDropdown title="Registro" id="collasible-nav-dropdown" className="text-dark">
            {!store.logged && <Link className="nav-link" to="/FormAffected/">Registro usuario</Link>}
            {!store.logged && <Link className="nav-link" to="/FormEmpresa/">Registro empresa</Link>}
            {store.logged && <Link className="nav-link " to="/GetApiKey/">Llaves API</Link>}
            {store.logged && <Link className="nav-link " to="/DropOutRequest/">Baja</Link>}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
