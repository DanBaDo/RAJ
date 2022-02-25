import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { getAPIKeys } from "../libraries/request/APIRequests";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { createAPIKeys } from "../libraries/request/APIRequests";
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
            throw "Autentication error getting API keys list";
            break;
          default:
            throw "Unexpected error getting API keys list";
            break;
        }
      } catch (error) {
        actions.addError(error);
      }
    };
    getAPIKeys.call();
    /*setKeys([
      {
        id: 1,
        key: "8ebfd8977b010655bfdd3c353c234e5e8472b6ac51c1ae1cab3fe06fad053beb",
        url: "/apikey/8ebfd8977b010655bfdd3c353c234e5e8472b6ac51c1ae1cab3fe06fad053beb",
      },
      {
        id: 2,
        key: "53c234e5e8472b6ac51c1ae1cab3fe06fad053beb8ebfd8977b010655bfdd3c3",
        url: "/apikey/53c234e5e8472b6ac51c1ae1cab3fe06fad053beb8ebfd8977b010655bfdd3c3",
      },
      {
        id: 3,
        key: "b6ac51c1ae1cab3fe06fad053beb8ebfd853c234e5e8472977b010655bfdd3c3",
        url: "/apikey/b6ac51c1ae1cab3fe06fad053beb8ebfd853c234e5e8472977b010655bfdd3c3",
      },
    ]);*/
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
      console.log(resp);
      handleClose();
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
