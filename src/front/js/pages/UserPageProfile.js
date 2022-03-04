import React from "react";
import { Button, Container, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserPageProfile = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header as="h5">
          Bienvenido: Aqui va el nombre del usuario
        </Card.Header>
        <Card.Body>
          <Card.Title>Este es tu perfil</Card.Title>
          <Card.Text>
            Desde aqui podras interactuar con todas las opciones que necesites:
          </Card.Text>
          <Stack gap={3} className="col-md-10 mx-auto">
            <Button variant="secondary">Modificar Perfil</Button>
            <Button variant="outline-secondary">Cancel</Button>
            <Link to="/DropOutRequest/">
              <Button variant="danger">Darme de Baja</Button>
            </Link>
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserPageProfile;
