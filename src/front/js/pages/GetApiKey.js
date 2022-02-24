import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import styled from "styled-components";
import { getAPIKeys } from "../libraries/request/APIRequests";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

import Apikey from "../component/ApiKey/Apikey.jsx";
import "./GetApiKey.scss";

const GetApiKey = () => {
  const { store, actions } = useContext(Context);
  const [keys, setKeys] = useState([]);
  const [QRData, setQRData] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const keysComponents = () => {
    return keys.map((key, idx) => (
      <Apikey id={key.id} url={key.url} key={idx}></Apikey>
    ));
  };

  useEffect(() => {
    /*getAPIKeys.onError = (error) => {
        actions.addError(error);
      }
      getAPIKeys.onResponse = (response) => {
        try {
          switch (response.code) {
            case 200:
              const keys = response.contents.data.map(
                (key, idx) => {
                  key.show = false;
                  return key;
                }
              );
              setKeys(keys);
              break;
            case 403:
              throw "Autentication error getting API keys list";
              break;
            default:
              throw "Unexpected error getting API keys list";
              break;
          };
        } catch (error) {
          actions.addError(error);
        }
      };
      getAPIKeys.call()*/
    setKeys([
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
    ]);
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Col>
              <Button variant="primary" onClick={handleShow}>
                Añadir
              </Button>
            </Col>
            <Col>
              <h1 className="TitleApi">Dispositivos Permitidos</h1>
              <ul>{keysComponents()}</ul>
            </Col>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Añadir Dispositivo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default GetApiKey;
