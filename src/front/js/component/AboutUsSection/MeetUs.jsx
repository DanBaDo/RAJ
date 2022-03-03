import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import CompanyValue from "./CompanyValue.jsx";
import "./AboutUsSection.scss"
const MeetUs = () => {
  return (
    <>
      <Container fluid className="py-5 slantedDivA bg-color_color">
        <Row>
          <Col xs={12} md={6} className="my-3 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate ad autem voluptatem eius. Exercitationem laborum
              inventore, neque ex aliquid sed et nostrum id praesentium quod
              deleniti magnam, a, omnis dolore?
            </p>
            <Button>Click</Button>
          </Col>
          <Col xs={12} md={6} >
          <CompanyValue/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MeetUs;
