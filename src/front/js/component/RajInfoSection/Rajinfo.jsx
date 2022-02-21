import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";

import styled from "styled-components";

const Rajinfo = () => {
  const StyledSpan = styled.span`
  font-size:20px;
  
  
  `
  const ImgAuto = styled.img `
  margin-top:20px ;
  height:200px;
  

`


    return (
    <>
      <Container className="my-3">
        <Row>
          <Col className="Textauto" md={{order:"first"}} xs={{ order: 'last' }}>
            <h1><strong>¿Que es la Auto-exclusión?</strong></h1>
            <StyledSpan>La Autoexclusión es una forma de que cualquier persona que crea tener problemas con el juego pueda autoexcluirse de todas las webs de apuestas y casinos online de España.
               De esta manera, una vez solicitada esta autoexclusión, el usuario no podrá volver acceder a estos locales.</StyledSpan>
            
          </Col>
          <Col md={4} xs={12}>
            <ImgAuto src="https://amasapoyosocial.org/wp-content/uploads/2020/09/ludopatia-online-amas-4.jpg" alt="" />
           
          </Col>
          <div>
          <Button className="button" type="submit">Registrarme</Button>
    
  </div>
          
        </Row>
      </Container>
    </>
  );
};



export default Rajinfo;
