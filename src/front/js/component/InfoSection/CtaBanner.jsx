import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import family from "../../../img/family.jpg";
import styled from "styled-components";
import {Link} from "react-router-dom"


const Rajinfo = () => {
  const StyledSpan = styled.span`
    & > p {
      font-size: 1.5rem;
    }
  `;
  const ImgAuto = styled.img`
    width: 100%;
    height: auto;
    max-width: 100%;
  `;

  return (
    <>
      <Container className="my-3">
        <Row>
          <h2>
            <strong>Tómate un respiro en familia.</strong>
          </h2>
          <Col className="Textauto">
            <StyledSpan>
              <p>La autoexclusión permite que cualquier persona con
              problemas con el juego pueda cerrar su acceso a todas las webs
              de apuestas y salas de juego. De esta manera, una vez
              solicitada la autoexclusión, el usuario no podrá volver a acceder
              a estos locales.</p>
              <p>
                La ludopatía, la adicción a los juegos de azar lleva a la
                pérdida de trabajo, problemas económicos, crimen o
                problemas en las relaciones familiares. Si quieres ponerle fin
                pincha aqui:
              </p>
              <Link className="text-white" to="/FormAffected"><Button className="buttonlogin">Registro</Button></Link>
            </StyledSpan>
          </Col>
          <Col md={4} xs={12}>
            <ImgAuto src={family} alt="a picture of a family with a baby" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rajinfo;
