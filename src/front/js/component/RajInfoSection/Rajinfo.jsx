import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
const Rajinfo = () => {
  return (
    <>
      <Container className="my-3 p-5">
        <Container>
          <Row>
            <Col xs={12} md={8} className="bg-light">
              <h3>Nuestros valores</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ipsum lectus, 
                mollis non eleifend sit amet, varius in purus.
                Aliquam erat volutpat. Integer suscipit elit at varius rhoncus. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                 Ut at risus lacinia elit pellentesque fringilla. </p>
            </Col>
            <Col xs={12} md={4} className="bg-warning">
              <h3>Informate</h3>
              <p>lorem ipsum in sulae</p>
              <Button>Informate</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8} className="bg-dark text-white">
              <h3>Como empresa</h3>
              <p>Nuestros objetivos</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ipsum lectus, 
                mollis non eleifend sit amet, varius in purus.
                Aliquam erat volutpat. Integer suscipit elit at varius rhoncus. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                 Ut at risus lacinia elit pellentesque fringilla. </p>
            </Col>
            <Col xs={12} md={4} className="bg-info text-white">
              <h3>Informate</h3>
              <p>lorem ipsum in sulae</p>
              <Button>Informate</Button>
            </Col>

          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Rajinfo;
