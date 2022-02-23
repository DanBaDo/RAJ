import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Form, Row, Col, InputGroup, Button, Container } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import es from "react-phone-input-2/lang/es.json";
import "./FormAffected.scss";
import { signup } from "../libraries/request/APIRequests.js";

export const FormAffected = () => {

  const { store, actions } = useContext(Context);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({role: "AFT"});

  const handleChange = (event) => {
    const currentFormData = {...formData};
    /*
      We need a hack for getting "phone" input name,
      becouse PhoneInput don't provides a way for set a
      input name.
    */
    currentFormData[event.target.name || "phone"] = event.target.value;
    setFormData(currentFormData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    console.log(event)
    signup.onError = (error) => actions.addError(error);
    signup.onResponse = (resp)=>{console.log(resp)}
    signup.data = formData;
    signup.call();
  };

  return (
    <>
      <Container className="justify-content-center">
        <Form  onChange={handleChange} noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 vw-100 ">
            <Col md={4} xs={2}>
            <h2 className="stylempresa">Registrate en <strong>RAJ</strong> </h2>
            
            <p className="stylempresatext"> “Los grandes cambios no tienen que ser difíciles pero tienen que comenzar con una elección. Aquí es donde comienza el verdadero cambio; aquí es donde comienzas a tomar el control de tu vida y cómo eliges vivirla; aquí es donde comienza todo.”
            
            </p>
            </Col>
            <Col md={4} xs={4}>
              <h3>Datos personales</h3>
              <Form.Group  as={Col} md="10" xs="8" controlId="validationCustom01">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="name" required type="text" placeholder="Nombre" />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  El nombre no es correcto!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="10" xs="8" controlId="validationCustom02">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control name="last_name" required type="text" placeholder="Apellidos" />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  El apellido no es correcto!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="10"  xs="8"  controlId="validationDNI">
                <Form.Label>DNI</Form.Label>
                <Form.Control name="id_doc" required type="text" placeholder="DNI" />
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
                    name="email"
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
              <hr/>
              <h3>Cuenta de usuario</h3>
              <Form.Group  as={Col} md="10" xs="8" controlId="validationCustom01">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control name="username" required type="text" placeholder="Usuario" />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  El nombre de usuario no es correcto!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group  as={Col} md="10" xs="8" controlId="validationCustom01">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control name="password" required type="text" placeholder="Contraseña" />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Es necesario proporcionar una contraseña
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  name="opt_in"
                  required
                  label="Acepto las condiciones"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>

              <Button className="button" type="submit">Registrarme</Button>
            </Col>
            <Col md={3} xs={2}>
            
            
            </Col>
          </Row>
        </Form>
        
        
      </Container>
    </>
  );
};
