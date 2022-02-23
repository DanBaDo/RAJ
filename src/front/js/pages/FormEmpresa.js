import React, { useState } from "react";
import { Form, Row, Col, InputGroup, Button, Container } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import es from "react-phone-input-2/lang/es.json";
import "./FormEmpresa.scss";



export const FormEmpresa = () => {
  
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
      <Container className="justify-content-center ">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 vw-100">
            <Col >
            <h2 className="stylempresa">Registra tu empresa </h2>
            
            <p className="stylempresatext">Con el registro de tu empresa nos ayudas a tener  controlados a todos los registrados en <strong>RAJ</strong> para coloborar con su recuperacion.
            <p>¡Ayudanos a Ayudar!</p>
            <p>GRACIAS!</p>
            </p>
            </Col>
            <Col>
              <h3>Datos de la empresa</h3>
              <Form.Group as={Col} md="10" xs="8" controlId="validationCustom01">
                <Form.Label>Razon Social</Form.Label>
                <Form.Control required type="text" placeholder="Razon Social" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please write a correct text
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="10" xs="8" controlId="validationDNI">
                <Form.Label>NIF</Form.Label>
                <Form.Control required type="text" placeholder="NIF" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please write a correct NIF
                </Form.Control.Feedback>
              </Form.Group>
              <hr/>
              <h3>Persona de contacto</h3>
              <Form.Group as={Col} md="10" xs="8" controlId="validationCustom02">
                <Form.Label>Nombre</Form.Label>
                <Form.Control required type="text" placeholder="Nombre" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please write a correct name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="10" xs="8" controlId="validationDNI">
                <Form.Label>DNI</Form.Label>
                <Form.Control required type="text" placeholder="DNI" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please write a correct DNI
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="10" xs="8" controlId="validationDNI">
                <Form.Label>Cargo en la compañía</Form.Label>
                <Form.Control required type="text" placeholder="Cargo" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please write a correct Cargo
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="10" xs="8"controlId="validationPhone">
                <Form.Label>Phone</Form.Label>
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

              <Form.Group as={Col} md="10" xs="8" controlId="validationCustomEmail">
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
                    Please write a correct email
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button className="button" type="submit">Registrar empresa</Button>
            </Col>
            <Col></Col>
          </Row>
        </Form>
       
      </Container>
      
    </>
  );
};
