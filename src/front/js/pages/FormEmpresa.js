import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Form, Row, Col, InputGroup, Button, Container } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import es from "react-phone-input-2/lang/es.json";
import { signup } from "../libraries/request/APIRequests.js";
import { useHistory } from "react-router-dom";

export const FormEmpresa = () => {

  const history = useHistory()
  const { store, actions } = useContext(Context);
  const [validated, setValidated] = useState(false);
  // Provides a object for storing form data and
  // initializes it like a company representant form (RPR)
  const [formData, setFormData] = useState({role: "RPR"});

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
    signup.onError = (error) => actions.addError(error);
    signup.onResponse = (resp)=>{history.push("/thanks/")}
    signup.data = formData;
    signup.call();
  };  

  return (
    <>
      <style>{'body{background-color:#1f2b5b}'}</style>
      <Container className="bg-white rounded py-3 my-4">
        <Form onChange={handleChange} noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col >
            <h2 className="stylempresa">Registra tu empresa </h2>
            
            <p className="stylempresatext">Con el registro de tu empresa nos ayudas a tener  controlados a todos los registrados en <strong>RAJ</strong> para colaborar con su recuperación.
            <p>¡Ayúdanos a ayudar!</p>
            <p>¡GRACIAS!</p>
            </p>
            </Col>
            <Col md={1} xs={1}></Col>
            <Col>
              <h3>Datos de la empresa</h3>
              <Form.Group as={Col} md="8" xs="10" controlId="validationCustom01">
                <Form.Label>Razon Social</Form.Label>
                <Form.Control name="company_name" required type="text" placeholder="Razon Social" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please write a correct text
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="8" xs="10" controlId="validationCustom01">
                <Form.Label>Dirección</Form.Label>
                <Form.Control name="company_address" equired type="text" placeholder="Dirección" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please write a correct text
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="8" xs="10" controlId="validationDNI">
                <Form.Label>NIF</Form.Label>
                <Form.Control name="company_id_doc" required type="text" placeholder="NIF" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please write a correct NIF
                </Form.Control.Feedback>
              </Form.Group>
              <hr/>
              <h3>Persona representando a la empresa</h3>
              <Form.Group  as={Col} md="10" xs="10" controlId="validationCustom01">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="name" required type="text" placeholder="Nombre" />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  El nombre no es correcto!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="10" xs="10" controlId="validationCustom02">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control name="last_name" required type="text" placeholder="Apellidos" />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  El apellido no es correcto!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="10"  xs="10"  controlId="validationDNI">
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

              <Form.Group as={Col} md="10"  xs="10"  controlId="validationCustomEmail">
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
              <Form.Group  as={Col} md="10" xs="10" controlId="validationCustom01">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control name="username" required type="text" placeholder="Usuario" />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  El nombre de usuario no es correcto!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group  as={Col} md="10" xs="10" controlId="validationCustom01">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control name="password" required type="password" placeholder="Contraseña" />
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

              <Button className="buttonlogin" type="submit">Registrar empresa</Button>
            </Col>
            
          </Row>
        </Form>
       
      </Container>

      
    </>
  );
};
