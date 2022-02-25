import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Container, Navbar, Nav ,ContainerImg } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../../img/logo.png"
import { Login } from "../IndexComponents.js";
import "./NavbarTop.scss"


const NavbarTop = () => {
  const { store, actions } = useContext(Context);
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand> <img className="logoRaj" src={logo} alt="logo RAJ" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar text-white">
            {!store.logged && <Link className="nav-link" to="/">Home</Link>}
            {!store.logged && <Link className="nav-link" to="/FormAffected/">Registro usuario</Link>}
            {!store.logged && <Link className="nav-link" to="/FormEmpresa/">Registro empresa</Link>}
            {store.logged && <Link className="nav-link " to="/GetApiKey/">Llaves API</Link>}
            {store.logged && <Link className="nav-link " to="/DropOutRequest/">Baja</Link>}
            <Login />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
