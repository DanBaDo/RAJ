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
          <Col md={{ order: "last" }} xs={{ order: "first" }} className="my-3 text-center">
            <Logo />
            <TextMeet>
              Raj se caracteriza por se un modelo diferente y mas eficiente de
              autoexclucion, mediante el cual se emplean las nuevas tecnologias,
              de la web, si quieres conocer mas acerca de nuestro trabajo pincha
              el boton de leer mas.
            </TextMeet>
            <Button> <Link className="text-white" to="/AboutUsPage">Leer mas</Link></Button>
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
font-size:1em;



`





export default MeetUs;
