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
            <p>
              Estas apunto de darte de baja! Aunque darse de baja de  
              RAJ no es tan facil.<br/> 
              Nuestro equipo se pondra en
              contacto contigo despues de <strong>72h</strong>.
              <br/> La Ludopatia no
              se cura , solo se trata y por eso queremos estar seguros de que
              tomas la decisión correcta.
            </p>
            <span className="pl-1">¿Estas seguro que quieres darte de baja?</span>
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            ></input>
            <label className="form-check-label">Si</label>
            &nbsp;&nbsp;&nbsp;
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            ></input>
            <label className="form-check-label">NO</label>
            <Button className="buttonlogin">Darme de baja</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DropOutRequest;
