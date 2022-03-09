import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import family from "../../../img/family.jpg";
import styled from "styled-components";
import {Link} from "react-router-dom"


const Rajinfo = () => {
  const StyledSpan = styled.span`
    font-size: 20px;
  `;
  const ImgAuto = styled.img`
    width: 100%;
    heigth: auto;
    max-width: 100%;
  `;

  return (
    <>
      <Container className="my-3">
        <Row>
          <h2>
            <strong>Toma un respiro y pasalo en Familia</strong>
          </h2>
          <Col className="Textauto">
            <StyledSpan>
              La Autoexclusión es una forma de que cualquier persona que crea
              tener problemas con el juego pueda autoexcluirse de todas las webs
              de apuestas y casinos online de España. De esta manera, una vez
              solicitada esta autoexclusión, el usuario no podrá volver acceder
              a estos locales.
              <p>
                La ludopatía, la adicción a los juegos de azar lleva a la
                pérdida de trabajo, problemas de dinero, fraude, crimen o
                problemas en las relaciones familiares. Si quieres ponerle fin
                pincha aqui:
              </p>
              <Link className="text-white" to="/FormAffected"><Button className="button">Registro</Button></Link>
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
