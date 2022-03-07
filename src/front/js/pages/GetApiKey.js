import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { getAPIKeys, createAPIKeys } from "../libraries/request/APIRequests";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import Apikey from "../component/ApiKey/Apikey.jsx";
import "./GetApiKey.scss";

const GetApiKey = () => {
  const { store, actions } = useContext(Context);
  const [keys, setKeys] = useState([]);
  const [QRData, setQRData] = useState(null);
  const [show, setShow] = useState(false);
  //New API key modal
  const [formData, setFormData] = useState({ purpose: "APPLICATION" });
  const [validated, setValidated] = useState(false);

  const keysComponents = () => {
    return keys.map((key, idx) => (
      <Apikey
        description={key.description}
        url={key.url}
        key={idx}
        installed={key.installed}
      ></Apikey>
    ));
  };

  useEffect(() => {
    getAPIKeys.onError = (error) => {
      actions.addError(error);
    };
    getAPIKeys.onResponse = (response) => {
      try {
        switch (response.code) {
          case 200:
            const keys = response.contents.data.map((key, idx) => {
              key.show = false;
              return key;
            });
            setKeys(keys);
            break;
          case 403:
            actions.addError("Autentication error getting API keys list","/");
            break;
          default:
            actions.addError("Unexpected error getting API keys list","/");
        }
      } catch (error) {
        actions.addError(error);
      }
    };
    getAPIKeys.call();
  }, []);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const currentFormData = { ...formData };
    currentFormData[event.target.name] = event.target.value;
    setFormData(currentFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    createAPIKeys.onError = (error) => actions.addError(error);
    createAPIKeys.onResponse = (resp) => {
      handleClose();
      setKeys([resp.contents.data.newApiKey, ...keys]);
    };
    createAPIKeys.data = formData;
    createAPIKeys.call();
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h1 className="TitleApi">Claves API</h1>
            <ul>{keysComponents()}</ul>
            <Button variant="primary" onClick={handleShow}>
              Añadir
            </Button>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nueva clave API</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onChange={handleChange}
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre descriptivo</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Diferencie sus claves API"
                  maxLength={12}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Uso de la llave</Form.Label>
                <Form.Check
                  type="radio"
                  name="purpose"
                  label="Servicio on-line"
                  value="APPLICATION"
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  name="purpose"
                  label="Lector de control de acceso"
                  value="IOT"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default GetApiKey;
