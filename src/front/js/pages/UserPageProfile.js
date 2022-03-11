import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Button, Container, Card, Stack, Fade, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ModDataUserForm } from "../component/IndexComponents";

const UserPageProfile = () => {
  const { store, actions } = useContext(Context);
  const [open, setOpen] = useState(false);
  const logout = (ev) => {
    actions.setLoggedOut();
  };
  return (
    <>
    <style>{'body{background-color:#1f2b5b}'}</style>
      <Container className="bg-white rounded py-3 my-4">
        <Row>
      <Col md={6} xs={12}>
        <Card>
          <Card.Header as="h5">
            Bienvenido: {store.user.name}
          </Card.Header>
          <Card.Body>
            <Card.Title>Este es tu perfil</Card.Title>
            <Card.Text>
              Desde aqui podras interactuar con todas las opciones que
              necesites:
            </Card.Text>
            <Stack gap={3} className="col-md-10 mx-auto">
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}
              >
               Modificar usuario
              </Button>
              <Button onClick={logout} variant="primary">
              Cerrar Sesion
            </Button>
            <Button variant="secondary"><Link to="/DropOutRequest/">Solicitar Baja</Link></Button>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text-3"
                aria-expanded={open}
              >
               Registros
              </Button>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text-3"
                aria-expanded={open}
              >
               Logros
              </Button>
            </Stack>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} xs={12}>
        <Fade in={open}>
          <div id="example-fade-text">
           Aqui va el formulario
          </div>
       </Fade>
      </Col>
      </Row>
    </Container>
  </>
  );
};

export default UserPageProfile;
