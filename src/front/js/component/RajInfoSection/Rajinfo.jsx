import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import "./Rajinfo.scss"

const Rajinfo = () => {

  return (
    <>
      <Container>
        <Row>
          <Col className="Textauto" md={8} xs={6} >
            <h1><strong>¿Que es la Auto-exclusión?</strong></h1>
            <span>La Autoexclusión es una forma de que cualquier persona que crea tener problemas con el juego pueda autoexcluirse de todas las webs de apuestas y casinos online de España.
               De esta manera, una vez solicitada esta autoexclusión, el usuario no podrá volver acceder a estos locales.</span>
            <Button className="Buttonauto">Registrate</Button>
          </Col>
          <Col md={4} xs={6}>
            <img className="imgauto" src="https://www.tribunasalamanca.com/uploads/imagenes/images/2020/1/28/5e30719ad86b9e22850000a9/Cartel%20ludopat%C3%ADa%20B%C3%A9jar_detail.jpg?1580233103" alt="" />
           
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rajinfo;
