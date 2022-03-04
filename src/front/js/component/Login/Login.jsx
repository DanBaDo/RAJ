import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Button, Modal, Form, Col, Container } from "react-bootstrap";
import { login } from "../../libraries/request/APIRequests";
import logo from "../../../img/logo.png";
import "./Login.scss";
import { FaUserAlt } from "react-icons/fa";
import styled from "styled-components";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formToUsername = (ev) => setUsername(ev.target.value);
  const formToPassword = (ev) => setPassword(ev.target.value);

  const formSubmitHandler = (ev) => {
    ev.preventDefault();
    setShow(false);
    login.data = { username, password };
    login.onError = (error) => actions.addError(error);
    login.onResponse = (response) => {
      try {
        switch (response.code) {
          case 200:
            actions.setLoggedIn(response.contents.data);
            break;
          case 401:
            actions.setLoggedOut();
            throw "Nombre de usuario o contraseña incorrectos";
            break;
          default:
            actions.addError("Error inesperado iniciando sesión");
            break;
        }
      } catch (error) {
        actions.addError(error);
      }
    };
    login.call();
  };

  const logout = (ev) => {
    actions.setLoggedOut();
  };

  return (
    <>
      <StyledContainer onClick={handleShow}>
        <FaUserAlt />
        Inicia Sesion
      </StyledContainer>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        {store.logged === true ? (
          <Modal.Footer>
            <Button onClick={logout} variant="primary">
              Cerrar Sesion
            </Button>
          </Modal.Footer>
        ) : (
          <Container className="main">
            <Col className="signup">
              <img src={logo} alt="logo " className="img"></img>
              <Form onSubmit={formSubmitHandler}>
                <Form.Group
                  className="inputlogin"
                  as={Col}
                  md="10"
                  xs="8"
                  controlId="validationCustom01"
                >
                  <Form.Control
                    required
                    type="text"
                    onChange={formToUsername}
                    value={username}
                    placeholder="Usuario"
                  />
                </Form.Group>
                <Form.Group
                  className="inputlogin"
                  as={Col}
                  md="10"
                  xs="8"
                  controlId="validationCustom01"
                >
                  <Form.Control
                    required
                    type="password"
                    onChange={formToPassword}
                    value={password}
                    placeholder="Contraseña"
                  />
                </Form.Group>
                <Modal.Footer>
                  <Button
                    className="buttonlogin"
                    type="submit"
                    variant="primary"
                  >
                    Enviar
                  </Button>
                </Modal.Footer>
              </Form>
            </Col>
          </Container>
        )}
      </Modal>
    </>
  );
};
const StyledContainer = styled.div`
  margin: 0 auto;
  cursor:pointer;

`

export default Login;
