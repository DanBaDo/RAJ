import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
const Rajinfo = () => {
  return (
    <>
      <Container className="my-3 p-5">
        <Container>
          <Row>
            <Col xs={12} md={8} className="bg-light">
              
              <h2><strong>¿Que la Autoexclusión?</strong></h2>
              <p>La Autoexclusión es una forma de que cualquier persona que crea tener problemas con el juego pueda autoexcluirse de todas las webs de apuestas y casinos online que hay en nuestro país. De esta manera, una vez solicitada esta autoexclusión, el usuario no podrá volver a entrar en ninguna de ellas.

</p>
            </Col>
            <Col xs={12} md={4} className="bg-warning">
            <h3>Personas</h3>
              <p>Quiero autoexcluirme!</p>
              <Button>Registrate</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8} className="bg-dark text-white">
              <h3><strong>¿Como ayudar como empresa?</strong></h3>
              
              <p>Tu empresa nos puede ayudar con el registro de esta. Para poder verificar a todos los clientes que quieran acceder a los vuestros locales.
               Así mediante una comprobación simple de DNI. Se vera si este cliente esta dado de alta en nuestra plataforma y se le limite el acceso.
               Confiamos en todas la empresas para apoyarnos y hacer uso del registro y utilización de nuestra plataforma.


              </p>
            </Col>
            <Col xs={12} md={4} className="bg-info text-white">
              <h3>Empresa</h3>
              <p>Quiero registrar mi empresa! </p>
              <Button>Registrate</Button>
            </Col>

          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Rajinfo;
