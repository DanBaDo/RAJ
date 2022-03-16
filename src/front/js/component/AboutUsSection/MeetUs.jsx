import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import CompanyValue from "./CompanyValue.jsx";
import { Logo } from "../IndexComponents.js";
import "./AboutUsSection.scss";
import styled from "styled-components";
import {Link} from "react-router-dom";



const MeetUs = () => {
  return (
    <>
      <Container fluid className="py-5 slantedDivA bg-color_color">
        <Row>
          <Col md={{ order: "last" }} xs={{ order: "last" }} className="my-3 text-center">
            <Logo />
            <TextMeet>
              Raj ofrece un modelo más eficiente de solución para la
              autoexclusión del juego.
              Si quieres conocer más acerca de nuestro trabajo pincha
              el botón.
            </TextMeet>
            <Link className="text-white" to="/AboutUsPage"><Button className="buttonlogin"> Leer más</Button></Link>
          </Col>
          <Col xs={12} md={6}>
            <CompanyValue />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const TextMeet = styled.p`
font-size:2rem;
`

export default MeetUs;
