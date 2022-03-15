import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Button, Container, Card, Stack, Fade, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ModDataUserForm, Avatar} from "../component/IndexComponents";


const UserPageProfile = () => {
  const { store, actions } = useContext(Context);
  const [open, setOpen] = useState(false);
  const logout = (ev) => {
    actions.setLoggedOut();
  };
  return (
    <>
    <style>{'body{background-color:#1f2b5b}'}</style>
      <Container className="py-3 my-4">
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
            <Boton>Prueba</Boton>
            </Stack>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} xs={12} className="bg-white mx-2">
       
      
      </Col>
      <Col md={3} xs={12} className="bg-white mx-2">
      
      hola mundo
      
      </Col>
      <Col md={3} xs={12} className="bg-white mx-2">
      <Fade in={open} className="bg-white">
          <div id="example-fade-text">
           Aqui va el formulario
          </div>
       </Fade>
      
      
      </Col>



    </Row>
    
    

  
    </Container>
  </>
  );
};

export default UserPageProfile;
