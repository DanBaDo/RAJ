import React from "react";
import { Button,Container } from "react-bootstrap";

const DropOutRequest = () => {
  return (
    <>
    <Container className="text-center mt-5">
    <h1>Baja </h1>
      <p>
        Estas apunto de  darte de baja!
        <p><span>Darse de baja de <strong>RAJ</strong> no es tan facil. </span></p>
        Nuestro equipo se pondra en contacto contigo despues de <strong>72h</strong>.
        <p>
          La Ludopatia no se cura , solo se trata y por eso queremos estar seguros de que tomas la decisión correcta.


        </p>
      </p>
    <Button className="button">Darse de baja</Button>
    </Container>
    </>
  );
};

export default DropOutRequest;
