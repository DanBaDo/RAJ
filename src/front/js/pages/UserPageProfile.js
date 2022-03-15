import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Button, Container, Card, Stack, Fade, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ModDataUserForm,
  Avatar,
  PanelEventos,
  PanelCalvesAPI,
  PanelLogros
} from "../component/IndexComponents";

import { getLogs } from "../libraries/request/APIRequests.js";


const UserPageProfile = () => {
  const { store, actions } = useContext(Context);

  // Show profile form  hook.
  const [open, setOpen] = useState(false);

  // Logout handller.
  const logout = (ev) => {
    actions.setLoggedOut();
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
      getLogs.query = currentPage;
      getLogs.onError = (error) => console.error(error)
      getLogs.onResponse = (response) => {
        setLogrosMockup(response.contents.data);
        setTotalPages(response.contents.pages);
      }
      getLogs.call()
    },
    [currentPage]
  )
  
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
    <>
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
                Desde aqui podras interactuar con todas las opciones que
                necesites:
              </Card.Text>
              <Stack gap={3} className="col-md-10 mx-auto">
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-fade-text"
                  aria-expanded={open}
                >
                Modificar usuario
                </Button>
                <Button onClick={logout} variant="primary">
                Cerrar Sesion
              </Button>
              <Button variant="secondary"><Link to="/DropOutRequest/">Solicitar Baja</Link></Button>
              <Button>Prueba</Button>
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
          { store.user.role === "RPR" ? <PanelCalvesAPI/> : <PanelLogros/> }
        </Col>
      </Row>      
    </Container>
    </>
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