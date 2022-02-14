import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../img/logo.png"
import styled from 'styled-components';

const AboutUsSection = () => {
  const ContainerImg = styled.img`
  max-width: 100%;
  heigth:auto;
  width:auto;
  margin: 20px 20px 20px 20px;
  padding: 90px 90px 90px 90px;
  `
  return (<>

    <Container className="my-3">
      <Row>
        <Col md={6} sm={12}>
          <h1>¿Que es <strong>RAJ</strong>?</h1>
          <p><strong>RAJ</strong> es la  web que ayuda a personas con problemas de ludopatia ,al registro para la auto-exclusión a locales de juegos de azar.
          <p><strong>RAJ</strong> es la plataforma encarga de hacer de intermediario entre los salones de juego y las personas.Mediante el registro de autoexclusión <strong>RAJ</strong> se encarga de hacer el proceso automáticamente cuando el usuario este registrado.</p>
          <p><strong>RAJ</strong> después  de comprobar que el usuario es correcto y no habido ningún problema en el proceso de registro . <strong>RAJ</strong> procede a tratar los datos de este , siempre en confidencialidad para que conste en todos los locales que este afecta.</p>
          <p><strong>RAJ</strong> quiere colaborar con las personas afectadas y ayudar con su recuperación mediante este proceso.No es el paso definitivo para la recuperación ya que esta enfermedad debe ser tratada por profesionales especializados.
          <u>No tengas miedo y pide ayuda.</u> </p></p>
        </Col>
        <Col md={6} xs={{ order: 'last' }}>
          <ContainerImg src={logo} alt="logo <strong>RAJ</strong>" />
        </Col>
      </Row>
    </Container>
  </>);
};

export default AboutUsSection;
