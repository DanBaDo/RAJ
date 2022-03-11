import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Button, Container, Card, Stack, Fade, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ModDataUserForm } from "../component/IndexComponents";

const UserPageProfile = () => {
  const { store, actions } = useContext(Context);
  const [open, setOpen] = useState(false);
  return (
    <Container className="mt-5 bg-white">
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
              <Button variant="outline-secondary">Cancel</Button>
              
                <Button variant="danger"><Link to="/DropOutRequest/">Darme de Baja</Link></Button>
              
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
  );
};

export default UserPageProfile;
