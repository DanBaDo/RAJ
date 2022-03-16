import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Button, Container, Card, Stack, Col, Row, Modal, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import {
  ModDataUserForm,
  Avatar,
  PanelEventos,
  PanelCalvesAPI,
  PanelLogros,
  Boton
} from "../component/IndexComponents";
import styled from 'styled-components';

import { getLogs, getAPIKeys, createAPIKeys } from "../libraries/request/APIRequests.js";

const Block = styled.div`
	text-align: center;
`

const UserPageProfile = () => {
  const history = useHistory()
  const { store, actions } = useContext(Context);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ purpose: "APPLICATION" });
  const [validated, setValidated] = useState(false);
  const [keys, setKeys] = useState([]);

  // Show profile form  hook.
  const [open, setOpen] = useState(false);

  // Logout handller.
  const logout = (ev) => {
    actions.setLoggedOut();
  };
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
      setShowForm(false);
      setKeys([resp.contents.data.newApiKey, ...keys]);
    };
    createAPIKeys.data = formData;
    createAPIKeys.call();
  };
  /**
   * Start event handler logic
   */
  // Store data form backend mocked data.
  const [ logsMockup, setLogrosMockup ] = useState([]);
  // Store current page. Change page hook.
  const [ currentPage, setCurrentPage ] = useState(0);
  // Store total data pages in backend mocked data.
  const [ totalPages, setTotalPages ] = useState(Infinity);
  
  // Call for new data page on currentPage changes
  useEffect (
    ()=> {
      getLogs.query = `${store.user.role}/${currentPage}`;
      getLogs.onError = (error) => console.error(error)
      getLogs.onResponse = (response) => {
        setLogrosMockup(response.contents.data);
        setTotalPages(response.contents.pages);
      }
      getLogs.call()
    },
    [currentPage]
  )
  
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
            actions.addError("Autentication error getting API keys list", "/");
            break;
          default:
            actions.addError("Unexpected error getting API keys list", "/");
        }
      } catch (error) {
        actions.addError(error);
      }
    };
    if (store.user.role === "RPR") getAPIKeys.call();
  }, []);

  // Next/previous page handler
  function changePage (action) {
    switch (action) {
      case "next":
        if ( currentPage < totalPages-1 ) {
          setCurrentPage(prevCurrentPage => prevCurrentPage+1);
        }
        break;
      case "prev":
        if ( currentPage > 0 ) {
          setCurrentPage(prevCurrentPage => prevCurrentPage-1);
        }
        break;
    }
  }
  /**
   * End event handler logic
   */

  return (
    <Block>
    <Container className="py-3 my-4">
      <style>{'body{background-color:#1f2b5b}'}</style>
      <Row>
        <Col md={3} xs={12} className="bg-white">
          <Card>
            <Card.Header as="h5">
              <Row>
                <Col> <Avatar/></Col>
                <Col> Bienvenido: {store.user.name}</Col>
            
              </Row>
            </Card.Header>
            <Card.Body>
              <Card.Title>Este es tu perfil</Card.Title>
              <Card.Text>
                Desde aquí podrás interactuar con todas las opciones que
                necesites:
              </Card.Text>
              <Stack gap={3} className="col-md-10 mx-auto">
              <Boton onClick={() => setOpen(!open)}>Modificar usuario</Boton>
              <Boton onClick={logout}>Cerrar sesión</Boton>
              <Boton onClick={()=>history.push("/DropOutRequest/")}>Solicitar Baja</Boton>
              </Stack>
            </Card.Body>
          </Card>

        </Col>
        <Col md={4} xs={12} className="bg-white mx-2">
          <PanelEventos
            arrayEventos={logsMockup}
            getPageHandler={changePage}
            currentPage={currentPage === 0 && "start" || currentPage === totalPages-1 && "end"}
          />
        </Col>
        <Col md={4} xs={12} className="bg-white mx-2">
          {
            store.user.role === "RPR" ? 
            <>
              <PanelCalvesAPI keys={keys}/>
              <Boton onClick={()=>setShowForm(true)}>Nueva llave</Boton>
              <p></p>
            </> :
            <PanelLogros/>
          }
        </Col>
      </Row>
      <Modal show={showForm} onHide={()=>setShowForm(false)}>
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
          <Button variant="secondary" onClick={()=>setShowForm(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </Block>
  );
};

export default UserPageProfile;
/*
        <Col md={3} xs={12} className="bg-white mx-2">
          <Fade in={open} className="bg-white">
            <div id="example-fade-text">
            Aqui va el formulario
            </div>
          </Fade>
        </Col>
*/