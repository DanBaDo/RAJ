import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Container, Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./NavbarTop.scss"
import { Logo } from "../IndexComponents.js";


const NavbarTop = () => {
  const { store, actions } = useContext(Context);
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand><Link className="nav-link" to="/"><Logo/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
          <Nav className="navbar">
            {!store.logged && <Link className="nav-link" to="/">Home</Link>}
            {!store.logged && <Link className="nav-link" to="/FormAffected/">Registro usuario</Link>}
            {!store.logged && <Link className="nav-link" to="/FormEmpresa/">Registro empresa</Link>}
            { (store.logged && store.user.role === "RPR") && <Link className="nav-link " to="/GetApiKey/">Llaves API</Link>}
            {store.logged && <Link className="nav-link " to="/DropOutRequest/">Baja</Link>}
            <Link className="nav-link " to="/tests/">Tests</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
