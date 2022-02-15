import React, { useState } from "react";
import { Form, Row, Col, InputGroup, Button, Container } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import es from "react-phone-input-2/lang/es.json";
import "./FormAffected.scss";


export const FormAffected = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  

  return (
    <>
      <Container className="justify-content-center">
        <Form  noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 vw-100 ">
            <Col></Col>
            <Col >
              <Form.Group  as={Col} md="10" xs="8" controlId="validationCustom01">
                <Form.Label>Nombre</Form.Label>
                <Form.Control required type="text" placeholder="Nombre" />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  El nombre no es correcto!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="10" xs="8" controlId="validationCustom02">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control required type="text" placeholder="Apellidos" />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  El apellido no es correcto!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="10"  xs="8"  controlId="validationDNI">
                <Form.Label>DNI</Form.Label>
                <Form.Control required type="text" placeholder="DNI" />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Escriba correctamente de nuevo su DNI
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="10"  xs="8"  controlId="validationPhone">
                <Form.Label>Telefono/Movil</Form.Label>
                <PhoneInput 
                  localization={es}
                  isValid={(value, country) => {
                    if (value.match(/12345/)) {
                      return "Invalid value: " + value + ", " + country.name;
                    } else if (value.match(/1234/)) {
                      return false;
                    } else {
                      return true;
                    }
                  }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please write a correct phone number
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="10"  xs="8"  controlId="validationCustomEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="your email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Repita nuevamente su email
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Acepto las condiciones"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button className="button" type="submit">Registrarme</Button>
            </Col>
            <Col>
            
            
            </Col>
          </Row>
        </Form>
        
        
      </Container>
    </>
  );
};
