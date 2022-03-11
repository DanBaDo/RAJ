import React from "react";
import { Button, Col, Container, Form, Check, Row } from "react-bootstrap";

const DropOutRequest = () => {
  return (
    <>
      {" "}
        <Container>
          <Row>
          <Col>
            <h1>Baja </h1>
            Estas apunto de darte de baja!
            <p>
              <span>
                Darse de baja de <strong>RAJ</strong> no es tan facil.{" "}
              </span>
            </p>
            Nuestro equipo se pondra en contacto contigo despues de{" "}
            <strong>72h</strong>.
            <p>
              La Ludopatia no se cura , solo se trata y por eso queremos estar
              seguros de que tomas la decisión correcta.
            </p>
            <span>Estas seguro que quieres darte de baja </span>
          </Col>
          <Col class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            ></input>
            <label class="form-check-label" for="inlineRadio1">
              Si
            </label>
            &nbsp;&nbsp;&nbsp;
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            ></input>
            <label class="form-check-label" for="inlineRadio2">
              NO
            </label>
          </Col>
          <Col>
            <Button className="button">Darme de baja</Button>
          </Col>
          </Row>
        </Container>
    </>
  );
};

export default DropOutRequest;
