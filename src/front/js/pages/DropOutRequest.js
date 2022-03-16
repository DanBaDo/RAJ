import React from "react";
import { Button, Col, Container, Form, Check, Row } from "react-bootstrap";

const DropOutRequest = () => {
  return (
    <>
      {" "}
      <style>{"body{background-color:#1f2b5b}"}</style>
      <Container className="bg-white rounded py-3 my-4">
        <Row>
          <Col className="text-center">
            <h1>Solicitud de Baja de RAJ</h1>
              <p>Darse de baja de  
              RAJ no es tan fácil.<br/> 
              Nuestro equipo se pondrá en
              contacto contigo después de <strong>72h</strong>.
              <br/> La Ludopatía no
              se cura, por eso queremos estar seguros de que
              tomas la decisión correcta.
            </p>
            <span className="pl-1">¿Estás seguro que quieres solicitar la baja?</span>
            <Button className="buttonlogin">Darme de baja</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DropOutRequest;
