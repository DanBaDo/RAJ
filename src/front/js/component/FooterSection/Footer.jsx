import React from 'react';
import { Container, Row, Col, ListGroup, Form, Button, Stack } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container className="bg-secondary p-4" xs={12} md={12} fluid>
        <Row>
          <Col >
            <h4>CONTACT US</h4>
            <ListGroup variant="flush" className="text-left">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <h4>CONNECT WITH US</h4>
            <ListGroup className="text-left" horizontal variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
          
            <h4>SUBSCRIBE</h4>
            <Stack direction="horizontal" gap={3}>
              <Form.Control className="me-auto" placeholder="Add your item here..." />
              <Button variant="secondary">Submit</Button>
            </Stack>
          </Col>
        </Row>
      </Container>
      <Container className="bg-info p-2 text-center" fluid>
        <h4>Informacion legal</h4>
        <p>Numero de registro legal : 123456789</p>
      </Container>
      <Container className="bg-dark p-2 text-center text-white" fluid>
        2023 by 4geekAcademy. Proudley created by BigBitDev, DanBaDo, Adrian
      </Container>
    </>
  );
};

export default Footer;
